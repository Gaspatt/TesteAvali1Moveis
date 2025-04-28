const app = Vue.createApp({
  data() {
    return {
      carrinho: [],
      usuarioLogado: false,
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
    totalCarrinho() {
      return this.itensAgrupadosCarrinho.reduce((total, item) => {
        return total + item.preco * item.quantidade;
      }, 0);
    },
  },
  methods: {
    finalizarCompra() {
      alert("Compra finalizada com sucesso!");
      localStorage.removeItem("carrinho");
      this.carrinho = [];
      window.location.href = "index.html";
    },
    voltarParaIndex() {
      window.location.href = "index.html";
    },
    sair() {
      localStorage.removeItem("usuarioLogado");
      this.usuarioLogado = false;
      alert("Você saiu da sua conta.");
    },
  },
  mounted() {
    const usuario = localStorage.getItem("usuarioLogado");
    this.usuarioLogado = !!usuario;
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
      this.carrinho = JSON.parse(carrinhoSalvo);
      console.log("Carrinho carregado:", this.carrinho);
    } else {
      console.log("Carrinho vazio ou não encontrado.");
    }
  },
});

app.mount("#app");