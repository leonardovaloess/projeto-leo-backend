import { Router } from "express";
import userController from "./controllers/user/user.controller.js";
import loginController from "./controllers/login/login.controller.js";

import verifyJWT from "./services/auth.js";
import checkoutController from "./controllers/checkout/checkout.controller.js";
import clientController from "./controllers/client/client.controller.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ ok: true });
});

// Rotas de login e logout e sign up

routes.post("/sign-up", loginController.signUp);

routes.post("/login", loginController.login);

routes.post("/logout", loginController.logout);

// Rota de Perfil

routes.get("/profile", verifyJWT, userController.getProfile);

// Rota de checkout stripe

routes.get(
  "/checkout-upgrade-plan",
  verifyJWT,
  checkoutController.createCheckoutUpgradePlan
);

// Rotas de clientes do usuário

routes.post("/client/new", verifyJWT, clientController.createclient);

routes.get("/client/list-all", verifyJWT, clientController.getAllClients);

routes.delete(
  "/client/delete/:client_id",
  verifyJWT,
  clientController.deleteClient
);

routes.put("/client/edit/:client_id", verifyJWT, clientController.editClient);

export default routes;
