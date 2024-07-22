import { prisma } from "../../services/prisma.js";

const taskService = {
  createTask: async (data, user_id) => {
    const done = false;
    const task = await prisma.task.create({
      data: {
        ...data,
        done,
        user_id,
      },
    });
    return task;
  },

  getTasks: async (user_id) => {
    try {
      const tasks = await prisma.task.findMany({
        where: {
          user_id: user_id,
        },
      });
      // Exemplo de busca de usuários
      return tasks;
    } catch (error) {
      console.log(error);
      console.error("Erro ao buscar tarefas:");
      throw error;
    }
  },

  deleteTask: async (task_id) => {
    await prisma.task.delete({
      where: {
        id: task_id,
      },
    });
  },

  editTask: async (data, task_id) => {
    const editedTask = await prisma.task.update({
      data,
      where: {
        id: task_id,
      },
    });

    return editedTask;
  },

  toggleStatus: async (status, task_id) => {
    const editedTask = await prisma.task.update({
      status,
      where: {
        id: task_id,
      },
    });

    return editedTask;
  },
};

export default taskService;
