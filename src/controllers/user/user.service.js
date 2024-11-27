import { prisma } from "../../services/prisma.js";

const userService = {
  getProfile: async (user_id) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: user_id,
        },
      }); // Exemplo de busca de usuários
      return user;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      throw error; // Trate ou relance o erro conforme necessário
    }
  },
};

export default userService;
