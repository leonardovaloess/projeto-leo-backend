import taskService from "./task.service.js";

const taskController = {
  createTask: async (req, res) => {
    try {
      const userId = req.userId;
      const task = await taskService.createTask(req.body, userId);

      return res.status(200).send(task);
    } catch (error) {
      console.log(error);
      return res.status(400).send("Erro ao criar tarefa");
    }
  },

  getTasks: async (req, res) => {
    try {
      const tasks = await taskService.getTasks(req.userId);
      return res.status(200).send(tasks);
    } catch (error) {
      return res.status(400).send("Não foi possivel listar as tarefas");
    }
  },

  deleteTask: async (req, res) => {
    try {
      await taskService.deleteTask(req.body.id);
      return res.status(200).json({ message: "tarefa deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(404).send("Tarefa não encontrada");
    }
  },

  editTask: async (req, res) => {
    try {
      const task = await taskService.editTask(req.body, req.params.id);
      return res.status(200).send(task);
    } catch (error) {
      console.log(error);
      return res.status(400).send("Não foi possivel editar a tarefa");
    }
  },

  toggleStatus: async (req, res) => {
    try {
      const task = await taskService.toggleStatus(req.body, req.params.id);
      return res.status(200).send(task);
    } catch (error) {
      console.log(error);
      return res.status(400).send("Não foi possivel mudar o status da tarefa");
    }
  },
};

export default taskController;
