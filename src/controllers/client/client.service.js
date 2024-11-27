import { prisma } from "../../services/prisma.js";

const clientService = {
  createClient: async (data) => {
    const client = await prisma.client.create({
      data,
    });

    return client;
  },

  getAllClients: async (userId) => {
    const clients = await prisma.client.findMany({
      where: {
        user_id: userId,
      },
    });

    if (clients) {
      return clients;
    } else {
      return null;
    }
  },

  deleteClient: async (clientId) => {
    const client = await prisma.client.delete({
      where: {
        id: clientId,
      },
    });

    return client;
  },

  editClient: async (clientId, data) => {
    const client = await prisma.client.update({
      where: {
        id: clientId,
      },
      data,
    });

    return client;
  },
};

export default clientService;
