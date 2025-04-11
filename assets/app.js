const { createApp, ref } = Vue;

createApp({
  data() {
    const carrinho = ref(0);
    const EmEstoque = ref(15);
    const adicionarCarrinho = () => {
      carrinho.value += 1;
      EmEstoque.value -= 1;
    };
    const image = ref("./assets/imagens/ironman.png");
    const mudarImagem = (varianteImage) => {
      image.value = varianteImage;
    };
    return {
      personagem_nome: ref("Iron Man"),
      universo: "Marvel",
      image,
      EmEstoque,
      detalhes: ["Armadura de Ferro", "Tecnologia Stark", "Vingador"],
      variantes: [
        { id: 1, cor: "red", image: "assets/imagens/ironman.png" },
        { id: 2, cor: "gold", image: "assets/imagens/ironman-gold.png" },
        { id: 3, cor: "black", image: "assets/imagens/ironman-black.png" },
      ],
      carrinho,
      adicionarCarrinho,
      mudarImagem,
    };
  },
}).mount("#app");
