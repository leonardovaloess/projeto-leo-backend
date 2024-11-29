import { QrCodePix } from "qrcode-pix";

async function gerarPix(
  chavePix,
  valor,
  nomeBeneficiario,
  cidade,
  descricao = ""
) {
  try {
    // Criação do payload Pix
    const pix = QrCodePix({
      version: "01", // Versão do padrão Pix
      key: chavePix, // Chave Pix (CPF)
      name: nomeBeneficiario, // Nome do recebedor (até 25 caracteres)
      city: cidade, // Cidade do recebedor
      transactionId: "***", // ID da transação (pode ser *** para transações genéricas)
      message: descricao, // Descrição opcional
      value: valor, // Valor da transação
    });

    // Gera o código Pix "Copia e Cola"
    const payload = pix.payload();
    return payload;
  } catch (error) {
    console.error("Erro ao gerar Pix:", error.message);
    throw error;
  }
}

// Exemplo de uso
(async () => {
  const chavePix = "+5541998989019"; // CPF sem formatação
  const valor = 1.0; // Valor do Pix
  const nomeBeneficiario = "Leonardo Berlanda de Valões"; // Nome do recebedor
  const cidade = "Curitiba"; // Cidade
  const descricao = "Pagamento de Serviço"; // Descrição

  try {
    const pixCopiaCola = await gerarPix(
      chavePix,
      valor,
      nomeBeneficiario,
      cidade,
      descricao
    );
    console.log("Pix Copia e Cola:", pixCopiaCola);
  } catch (error) {
    console.error("Erro:", error);
  }
})();
