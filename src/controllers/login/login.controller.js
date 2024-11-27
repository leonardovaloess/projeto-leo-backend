import { createStripeCustumer } from "../../services/stripe.js";
import loginService from "./login.service.js";
import jwt from "jsonwebtoken";

const loginController = {
  signUp: async (req, res) => {
    try {
      const customer = await createStripeCustumer({
        email: req.body.email,
        name: req.body.name,
      });

      console.log(customer);

      const user = await loginService.signUp(req.body, customer);

      const token = jwt.sign({ userId: user.id }, "leo130406", {
        expiresIn: 5000,
      });

      return res.status(200).json({ user, token: token });
    } catch (error) {
      console.log("error:", error);

      return res.status(400).send("Erro ao criar conta");
    }
  },

  login: async (req, res) => {
    try {
      const login = await loginService.login(req.body);
      if (login) {
        const token = jwt.sign({ userId: login.id }, "leo130406", {
          expiresIn: 5000,
        });
        return res.json({ auth: true, token, user_id: login.id });
      } else {
        return res.status(404).send("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send("Usuário ou senha incorretos");
    }
  },

  logout: async (req, res) => {
    try {
      const token = req.headers["token-auth"];

      if (token) {
        await loginService.logout(token);
        return res.send("deslogado");
      }
    } catch (error) {
      return res.status(400).send("Erro ao deslogar");
    }
  },
};

export default loginController;
