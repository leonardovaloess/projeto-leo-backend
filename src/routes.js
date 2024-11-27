import { Router } from "express";
import userController from "./controllers/user/user.controller.js";
import loginController from "./controllers/login/login.controller.js";

import verifyJWT from "./services/auth.js";
import checkoutController from "./controllers/checkout/checkout.controller.js";

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
export default routes;
