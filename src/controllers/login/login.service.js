import { prisma } from "../../services/prisma.js";

const loginService = {
  signUp: async (data, customer) => {
    const user = await prisma.user.create({
      data: { ...data, stripeCustumerId: customer.id },
    });

    return user;
  },

  login: async (body) => {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (user) {
      if (user.password !== body.password) {
        return;
      } else {
        return user;
      }
    } else {
      console.log("nao existe");
    }
  },
};

export default loginService;
