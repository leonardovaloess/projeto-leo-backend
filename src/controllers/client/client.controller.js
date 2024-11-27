import { createStripeCustumer } from "../../services/stripe.js";
import clientService from "./client.service.js";
import jwt from "jsonwebtoken";

const clientController = {
  createclient: async (req, res) => {
    try {
      const infos = {
        ...req.body,
        user_id: req.userId,
      };

      const client = await clientService.createClient(infos);

      return res.status(200).json(client);
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao cadastrar um novo cliente");
    }
  },
  getAllClients: async (req, res) => {
    try {
      const clients = await clientService.getAllClients(req.userId);
      if (clients) {
        return res.status(200).json(clients);
      } else {
        return res.status(404).json("Nenhum cliente Cadastrado");
      }
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao listar clientes");
    }
  },

  deleteClient: async (req, res) => {
    try {
      const client = await clientService.deleteClient(req.params.client_id);

      if (client) {
        return res.status(200).json("Cliente deletado com sucesso!");
      } else {
        return res.status(404).json("Cliente não encontrado");
      }
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao listar clientes");
    }
  },

  editClient: async (req, res) => {
    try {
      const client = await clientService.editClient(
        req.params.client_id,
        req.body
      );

      if (client) {
        return res.status(200).json("Cliente editado com sucesso!");
      } else {
        return res.status(404).json("Cliente não encontrado");
      }
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao listar clientes");
    }
  },
};

export default clientController;
