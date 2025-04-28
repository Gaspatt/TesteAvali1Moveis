document.addEventListener('DOMContentLoaded', function () {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (!usuario) return;

  const campos = [
    { id: 'nomeUsuario', key: 'nome' },
    { id: 'dataNascimento', key: 'dataNascimento' },
    { id: 'cep', key: 'cep' },
    { id: 'cidade', key: 'cidade' },
    { id: 'estado', key: 'estado' },
    { id: 'endereco', key: 'endereco' },
  ];

  function exibirCampos() {
    campos.forEach(campo => {
      document.getElementById(campo.id).textContent = usuario[campo.key] || '';
    });
  }

  function habilitarEdicao() {
    campos.forEach(campo => {
      const valor = usuario[campo.key] || '';
      document.getElementById(campo.id).innerHTML = `<input type='text' id='edit_${campo.id}' value='${valor}' class='form-control' />`;
    });
    document.getElementById('editarPerfil').style.display = 'none';
    document.getElementById('botoesEdicao').style.display = 'block';
  }

  function salvarEdicao() {
    campos.forEach(campo => {
      const novoValor = document.getElementById(`edit_${campo.id}`).value;
      usuario[campo.key] = novoValor;
    });
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const idx = usuarios.findIndex(u => u.email === usuario.email);
    if (idx !== -1) {
      usuarios[idx] = usuario;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    exibirCampos();
    document.getElementById('editarPerfil').style.display = 'block';
    document.getElementById('botoesEdicao').style.display = 'none';
  }

  function cancelarEdicao() {
    exibirCampos();
    document.getElementById('editarPerfil').style.display = 'block';
    document.getElementById('botoesEdicao').style.display = 'none';
  }

  window.habilitarEdicao = habilitarEdicao;
  window.salvarEdicao = salvarEdicao;
  window.cancelarEdicao = cancelarEdicao;

  exibirCampos();
});
