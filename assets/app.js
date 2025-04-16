const { createApp, ref } = Vue;

createApp({
  data() {
    const personagens = ref([
      {
        id: 1,
        nome: "Homem de Ferro",
        estoque: 15,
        image: "./assets/imagens/ironman.png",
        hoverImage: "./assets/imagens/ironman-hover.png",
      },
      {
        id: 2,
        nome: "Homem-Aranha",
        estoque: 8,
        image: "./assets/imagens/spiderman.png",
        hoverImage: "./assets/imagens/spiderman-hover.png",
      },
      {
        id: 3,
        nome: "Thor",
        estoque: 5,
        image: "./assets/imagens/thor.png",
        hoverImage: "./assets/imagens/thor-hover.png",
      },
      {
        id: 4,
        nome: "Hulk",
        estoque: 10,
        image: "./assets/imagens/hulk.png",
        hoverImage: "./assets/imagens/hulk-hover.png",
      },
      {
        id: 5,
        nome: "Pantera Negra",
        estoque: 7,
        image: "./assets/imagens/blackwidow.png",
        hoverImage: "./assets/imagens/blackwidow-hover.png",
      },
      {
        id: 6,
        nome: "Capitão América",
        estoque: 12,
        image: "./assets/imagens/captainamerica.png",
        hoverImage: "./assets/imagens/captainamerica-hover.png",
      },
      {
        id: 7,
        nome: "Doutor Estranho",
        estoque: 6,
        image: "./assets/imagens/doctorstrange.png",
        hoverImage: "./assets/imagens/doctorstrange-hover.png",
      },
      {
        id: 8,
        nome: "Falcão",
        estoque: 9,
        image: "./assets/imagens/blackpanther.png",
        hoverImage: "./assets/imagens/blackpanther-hover.png",
      },
      {
        id: 9,
        nome: "Soldado Invernal",
        estoque: 4,
        image: "./assets/imagens/scarletwitch.png",
        hoverImage: "./assets/imagens/scarletwitch-hover.png",
      },
      {
        id: 10,
        nome: "Groot",
        estoque: 11,
        image: "./assets/imagens/antman.png",
        hoverImage: "./assets/imagens/antman-hover.png",
      },
      {
        id: 11,
        nome: "Rocket Raccoon",
        estoque: 5,
        image: "./assets/imagens/hawkeye.png",
        hoverImage: "./assets/imagens/hawkeye-hover.png",
      },
      {
        id: 12,
        nome: "Gavião Arqueiro",
        estoque: 3,
        image: "./assets/imagens/vision.png",
        hoverImage: "./assets/imagens/vision-hover.png",
      },
      {
        id: 13,
        nome: "PARCERIA IMPERDIVEL - Coringa",
        estoque: 1,
        image: "./assets/imagens/coringa.png",
        hoverImage: "./assets/imagens/coringa-hover.png",
      },
    ]);
    const carrinho = ref([]);

    const adicionarCarrinho = (personagem) => {
      if (personagem.estoque > 0) {
        carrinho.value.push(personagem);
        personagem.estoque -= 1;
      }
    };

    const mudarImagem = (personagem, hover) => {
      personagem.image = hover ? personagem.hoverImage : personagem.image;
    };

    return {
      personagens,
      carrinho,
      adicionarCarrinho,
      mudarImagem,
    };
  },
}).mount("#app");
