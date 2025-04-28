const app = Vue.createApp({
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      registrando: false,
    };
  },
  methods: {
    registrar() {
      if (!this.email.includes("@")) {
        alert("Email inválido!");
        return;
      }
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      if (usuarios.find((u) => u.email === this.email)) {
        alert("Usuário já existe!");
        return;
      }
      usuarios.push({ nome: this.nome, email: this.email, senha: this.senha });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Usuário registrado com sucesso!");
      this.alternarModo(false);
    },
    logar() {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuario = usuarios.find(
        (u) => u.email === this.email && u.senha === this.senha
      );
      if (usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
      } else {
        alert("Email ou senha inválidos!");
      }
    },
    alternarModo(modoRegistrar) {
      this.registrando = modoRegistrar;
      this.nome = "";
      this.email = "";
      this.senha = "";
    },
    voltarParaIndex() {
      window.location.href = "index.html";
    },
  },
});

app.mount("#app");
