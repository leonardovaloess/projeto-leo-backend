import userService from "./user.service.js";

const userController = {
  getProfile: async (req, res) => {
    try {
      const user_id = req.userId;
      const user = await userService.getProfile(user_id);
      return res.status(200).send(user);
    } catch (error) {
      return res.status(404).send("Usuário não encontrado");
    }
  },
};

export default userController;
