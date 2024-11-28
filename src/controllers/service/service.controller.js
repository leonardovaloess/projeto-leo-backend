import { createStripeCustumer } from "../../services/stripe.js";
import serviceService from "./service.service.js";
import clientService from "./service.service.js";
import jwt from "jsonwebtoken";

const serviceController = {
  createService: async (req, res) => {
    try {
      const infos = {
        ...req.body,
        user_id: req.userId,
      };

      const service = await serviceService.createService(infos);

      return res.status(200).json(service);
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao cadastrar um novo cliente");
    }
  },
  getAllServices: async (req, res) => {
    try {
      const services = await serviceService.getAllServices(req.userId);
      if (services) {
        return res.status(200).json(services);
      } else {
        return res.status(404).json("Nenhum cliente Cadastrado");
      }
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao listar clientes");
    }
  },

  deleteService: async (req, res) => {
    try {
      const service = await serviceService.deleteService(req.params.service_id);

      if (service) {
        return res.status(200).json("Cliente deletado com sucesso!");
      } else {
        return res.status(404).json("Cliente não encontrado");
      }
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao listar clientes");
    }
  },

  editservice: async (req, res) => {
    try {
      const service = await serviceService.editService(
        req.params.service_id,
        req.body
      );

      if (service) {
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

export default serviceController;
