import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  httpClient: Stripe.createFetchHttpClient(),
});

export const getStripeCustumerByEmail = async (email) => {
  const custumers = await stripe.customers.list({ email });
  return custumers.data[0];
};

export const createStripeCustumer = async (data) => {
  const custumer = await getStripeCustumerByEmail(data.email);
  if (custumer) return custumer;

  return stripe.customers.create({
    email: data.email,
    name: data.name,
  });
};

export const generateCheckout = async (userId, email) => {
  try {
    const customer = await createStripeCustumer({
      email,
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      client_reference_id: userId,
      customer: customer.id,
      success_url: "http://localhost:3000/done",
      cancel_url: "http://localhost:3000/error",
      line_items: [
        {
          price: process.env.STRIPE_ID_PLAN,
          quantity: 1,
        },
      ],
    });

    return {
      url: session.url,
    };
  } catch (error) {
    console.log("error", error);
  }
};
