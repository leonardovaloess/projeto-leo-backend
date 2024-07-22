import { Router } from "express";
import userController from "./controllers/user/user.controller.js";
import loginController from "./controllers/login/login.controller.js";
import taskController from "./controllers/task/task.controller.js";
import verifyJWT from "./services/auth.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ ok: true });
});

// Rotas de users

routes.post("/users", userController.createUser);

routes.get("/users", verifyJWT, userController.getUsers);

routes.get("/users/:user_id", verifyJWT, userController.getUserById);

routes.get("/user-info", verifyJWT, userController.getUserInfo);

// Rotas de login e logout e sign up

routes.post("/sign-up", loginController.signUp);

routes.post("/login", loginController.login);

routes.post("/logout", loginController.logout);

// Rotas das tasks por usuário

routes.get("/tasks", verifyJWT, taskController.getTasks);

routes.post("/tasks", verifyJWT, taskController.createTask);

routes.delete("/delete-task", verifyJWT, taskController.deleteTask);

routes.put("/tasks/:id", verifyJWT, taskController.editTask);

routes.put("/toggle-task-status/:id", verifyJWT, taskController.editTask);

export default routes;
