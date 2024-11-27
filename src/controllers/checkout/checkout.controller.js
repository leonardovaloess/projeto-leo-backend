import { generateCheckout } from "../../services/stripe.js";
import checkoutService from "./checkout.service.js";

const checkoutController = {
  // virá id do token do usuário logado
  createCheckoutUpgradePlan: async (req, res, next) => {
    try {
      const id = req.userId;
      const user = await checkoutService.createCheckout(id);

      if (!user) {
        return res.status(404).json("usuario não encontrado");
      }

      const checkout = await generateCheckout(user.id, user.email);

      return res.status(200).json(checkout);
    } catch (error) {
      return res.status(400).send("Erro ao deslogar");
    }
  },
};

export default checkoutController;
