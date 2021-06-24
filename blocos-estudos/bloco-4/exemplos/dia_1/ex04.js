let status = "aprovada";

switch (status) {
    case "aprovada":
        console.log("Você foi aprovada(o)");
        break;
    case "lista":
        console.log("Você ficou na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Infelismente você não passou em nosso processo. Tente outra vez.");
        break;
    default:
        console.log("Houve algum erro na avaliação. Aguarde!");
        break;
}
