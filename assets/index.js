const app = Vue.createApp({
  data() {
    return {
      carrinho: [],
      carrinhoVisivel: false,
      usuarioLogado: false,
      personagens: [
        {
          id: 1,
          nome: "Homem de Ferro",
          estoque: 15,
          image: "./assets/imagens/HomemFerro.webp",
          hoverImage: "./assets/imagens/HomemFerroCosta.webp",
          preco: 99.99,
        },
        {
          id: 2,
          nome: "Homem-Aranha",
          estoque: 8,
          image: "./assets/imagens/Aranha.jpg",
          hoverImage: "./assets/imagens/AranhaCosta.jpg",
          preco: 79.99,
        },
        {
          id: 3,
          nome: "Thor",
          estoque: 5,
          image: "./assets/imagens/thor.avif",
        hoverImage: "./assets/imagens/thor2.jpg",
          preco: 79.99,
        },
        {
          id: 4,
          nome: "Hulk",
          estoque: 10,
          image: "./assets/imagens/hulk.webp",
        hoverImage: "./assets/imagens/hulkcosta.webp",
          preco: 79.99,
        },
        {
          id: 5,
          nome: "Pantera Negra",
          estoque: 7,
          image: "./assets/imagens/PNegra.webp",
        hoverImage: "./assets/imagens/PNegra2.webp",
          preco: 79.99,
        },
        {
          id: 6,
          nome: "Capitão América",
          estoque: 12,
          image: "./assets/imagens/captainamerica.png",
        hoverImage: "./assets/imagens/captainamerica-hover.png",
          preco: 79.99,
        },
        {
          id: 7,
          nome: "Doutor Estranho",
          estoque: 6,
          image: "./assets/imagens/doctorstrange.png",
          hoverImage: "./assets/imagens/doctorstrange-hover.png",
          preco: 79.99,
        },
        {
          id: 8,
          nome: "Falcão",
          estoque: 9,
          image: "./assets/imagens/blackpanther.png",
          hoverImage: "./assets/imagens/blackpanther-hover.png",
          preco: 79.99,
        },
        {
          id: 9,
          nome: "Soldado Invernal",
          estoque: 4,
          image: "./assets/imagens/scarletwitch.png",
          hoverImage: "./assets/imagens/scarletwitch-hover.png",
          preco: 79.99,
        },
        {
          id: 10,
          nome: "Groot",
          estoque: 11,
          image: "./assets/imagens/antman.png",
          hoverImage: "./assets/imagens/antman-hover.png",
          preco: 79.99,
        },
        {
          id: 11,
          nome: "Rocket Raccoon",
          estoque: 5,
          image: "./assets/imagens/hawkeye.png",
          hoverImage: "./assets/imagens/hawkeye-hover.png",
          preco: 79.99,
        },
        {
          id: 12,
          nome: "Gavião Arqueiro",
          estoque: 3,
          image: "./assets/imagens/vision.png",
          hoverImage: "./assets/imagens/vision-hover.png",
          preco: 79.99,
        },
        {
          id: 13,
          nome: "PARCERIA IMPERDIVEL - Coringa",
          estoque: 1,
          image: "./assets/imagens/coringa.png",
          hoverImage: "./assets/imagens/coringa-hover.png",
          preco: 79.99,
        },
      ],
      imagemHover: {},
    };
  },
  computed: {
    itensAgrupadosCarrinho() {
      const agrupados = [];
      this.carrinho.forEach((produto) => {
        const existente = agrupados.find((item) => item.id === produto.id);
        if (existente) {
          existente.quantidade++;
        } else {
          agrupados.push({ ...produto, quantidade: 1 });
        }
      });
      return agrupados;
    },
  },
  methods: {
    abrirCarrinho() {
      this.carrinhoVisivel = true;
    },
    fecharCarrinho() {
      this.carrinhoVisivel = false;
    },
    alternarCarrinho() {
      this.carrinhoVisivel = !this.carrinhoVisivel;
    },
    adicionarCarrinho(personagem) {
      if (personagem.estoque > 0) {
        this.carrinho.push(personagem);
        personagem.estoque--;
      }
    },
    finalizarPedido() {
      localStorage.setItem("carrinho", JSON.stringify(this.carrinho));
      window.location.href = "carrinho.html";
    },
    mudarImagem(personagem, hover) {
      this.imagemHover[personagem.id] = hover ? personagem.hoverImage : null;
    },
    irParaLogin() {
      window.location.href = "login.html";
    },
    sair() {
      localStorage.removeItem("usuarioLogado");
      this.usuarioLogado = false;
      alert("Você saiu da sua conta.");
    },
    irParaPerfil() {
      window.location.href = "perfil.html";
    },
  },
  mounted() {
    const usuario = localStorage.getItem("usuarioLogado");
    this.usuarioLogado = !!usuario;
  },
});

app.mount("#app");
