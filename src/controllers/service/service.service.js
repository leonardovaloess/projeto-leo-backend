import { prisma } from "../../services/prisma.js";

const serviceService = {
  createService: async (data) => {
    const service = await prisma.service.create({
      data,
    });

    return service;
  },

  getAllServices: async (userId) => {
    const services = await prisma.service.findMany({
      where: {
        user_id: userId,
      },
    });

    if (services) {
      return services;
    } else {
      return null;
    }
  },

  deleteService: async (serviceId) => {
    const service = await prisma.service.delete({
      where: {
        id: serviceId,
      },
    });

    return service;
  },

  editService: async (serviceId, data) => {
    const service = await prisma.service.update({
      where: {
        id: serviceId,
      },
      data,
    });

    return service;
  },
};

export default serviceService;
