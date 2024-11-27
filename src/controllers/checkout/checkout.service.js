import { prisma } from "../../services/prisma.js";

const checkoutService = {
  createCheckout: async (id) => {
    const data = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (data) {
      return data;
    } else {
      console.log("nao existe");
    }
  },
};

export default checkoutService;
