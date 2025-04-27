const app = Vue.createApp({
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      dataNascimento: "",
      cep: "",
      cidade: "",
      estado: "",
      endereco: "",
      registrando: false,
      mostrarSenha: false,
      mostrarSenhaRegistrar: false,
    };
  },
  methods: {
    registrar() {
      const usuario = {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        dataNascimento: this.dataNascimento,
        cep: this.cep,
        cidade: this.cidade,
        estado: this.estado,
        endereco: this.endereco,
      };
      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      usuarios.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.registrando = false;
      alert('Usuário registrado com sucesso! Faça login para continuar.');
      // Redireciona para a tela de login
      window.location.href = 'login.html';
    },
    logar() {
      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuario = usuarios.find(
        (u) => u.email === this.email && u.senha === this.senha
      );
      if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
      } else {
        alert('Email ou senha inválidos!');
      }
    },
    alternarModo(modoRegistrar) {
      this.registrando = modoRegistrar;
      this.nome = "";
      this.email = "";
      this.senha = "";
      this.dataNascimento = "";
      this.cep = "";
      this.cidade = "";
      this.estado = "";
      this.endereco = "";
    },
    voltarParaIndex() {
      window.location.href = "index.html";
    },
  },
});

app.mount("#app");
