<template>
  <div class="overlay">
    <div class="anuncio-container">
      <div class="anuncio-page">
        <div class="content">
          <div class="left-column">
            <h2>Cadastro de Usuário</h2>
            <form class="form-anuncio" @submit.prevent="cadastrar">
              <input type="text" v-model="form.nomeCompleto" placeholder="Nome Completo" required />
              <input type="text" v-model="form.nomeUsuario" placeholder="Nome de Usuário" required />
              <input type="email" v-model="form.email" placeholder="Email" required />
              <input type="password" v-model="form.senha" placeholder="Senha" required />
              <input type="password" v-model="form.confirmarSenha" placeholder="Confirmar Senha" required />
              <button type="submit" class="btn anunciar">Cadastrar</button>
              <p class="cadastrar">
                <router-link to="/Loginusu">Já tem uma conta? Entre aqui</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CadastroUsuario',
  data() {
    return {
      form: {
        nomeCompleto: '',
        nomeUsuario: '',
        email: '',
        senha: '',
        confirmarSenha: ''
      }
    }
  },
  methods: {
    cadastrar() {
      // Lógica de cadastro aqui
      alert('Cadastro realizado com sucesso!');
    }
  }
}
</script>

<style scoped>

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  z-index: 1000;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
}
.anuncio-container {
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 26px rgba(0,0,0,0.25);
  animation: slideUp 0.35s ease;
}
.anuncio-page {
  font-family: 'Inter', sans-serif;
  color: #222;
  background: #fff;
  line-height: 1.6;
}
.content {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}
.left-column {
  flex: 1;
}
.form-anuncio {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-anuncio input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}
.btn.anunciar {
  background: #246b43;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn.anunciar:hover {
  background: #2e8b57;
  transform: translateY(-2px);
}
.cadastrar {
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
}
.cadastrar a {
  color: #2e8b57;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s;
}
.cadastrar a:hover {
  color: #246b43;
}
@media (max-width: 600px) {
  .anuncio-container {
    max-width: 98vw;
  }
  .content {
    padding: 1rem 0.3rem;
  }
}
.btn-cadastrar:hover {
  background: #246b43;
}
</style>
