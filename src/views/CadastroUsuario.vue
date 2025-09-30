<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const senha = ref('');

function handleSubmit(e) {
  e.preventDefault();
  // Salva email e senha no localStorage para passar para a tela de login
  localStorage.setItem('loginEmail', email.value);
  localStorage.setItem('loginSenha', senha.value);
  router.push('/loginusu');
}
</script>
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


      <form class="form">
        <label>Nome Completo</label>
        <input type="text" placeholder="Digite seu nome e sobrenome" required />

        <label>CPF</label>
        <input type="text" placeholder="Digite seu CPF" required />

        <label>Data de Nascimento</label>
        <input type="date" required />

        <label>Telefone</label>
        <input type="tel" placeholder="(99) 99999-9999" required />

        <label>Email</label>

  <input type="email" placeholder="Digite seu email" v-model="email" required />

  <label>Senha</label>
  <input type="password" placeholder="Crie uma senha" v-model="senha" required />

  <button class="btn-register" type="submit" @click="handleSubmit">Cadastrar</button>

        <div class="login-link">
          <span>Já tem uma conta? <a href="/loginusu">Entrar!</a></span>
          <div class="login-divider"></div>
          <router-link to="/Cadastro">Deseja se tornar Corretor?</router-link>
        </div>
      </form>
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


body {
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
  background: linear-gradient(120deg, #f5f7fa 0%, #fff 100%);
  min-height: 100vh;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e6e9f0 100%);
  align-items: flex-start;
  z-index: 1000;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
  }
.anuncio-container {
  width: 100%;
  max-width: 520px;
  background: rgba(255,255,255,0.98);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(230,0,35,0.10), 0 1.5px 8px rgba(0,0,0,0.04);
  padding: 2.8rem 2.2rem 2.2rem 2.2rem;
  transition: box-shadow 0.3s, transform 0.3s;
  border: 1.5px solid #f3e6ea;
  animation: fadeIn 0.7s;
  position: relative;
  overflow: hidden;
}
.register-card::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ffe6ea 0%, #fff 100%);
  border-radius: 50%;
  z-index: 0;
  opacity: 0.5;
}
.register-card:hover {
  box-shadow: 0 12px 36px rgba(230,0,35,0.13), 0 2px 12px rgba(0,0,0,0.07);
  transform: translateY(-4px) scale(1.012);
}
.register-header {
  text-align: center;
  margin-bottom: 2.2rem;
  position: relative;
  z-index: 1;
}
.logo {
  width: 82px;
  margin-bottom: 0.85rem;
  filter: drop-shadow(0 2px 8px #ffe6ea);
}
.register-header h2 {
  color: #e60023;
  font-size: 2.1rem;
  margin-bottom: 0.3rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px #ffe6ea;
}
.register-header p {
  color: #6a6a6a;
  font-size: 1.08rem;
  font-weight: 500;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  position: relative;
  z-index: 1;
}
label {
  font-weight: 700;
  color: #e60023;
  font-size: 1.04rem;
  margin-bottom: 0.2rem;
  letter-spacing: 0.1px;
}
input {
  padding: 15px 18px;
  border-radius: 22px;
  border: 1.8px solid #f3e6ea;
  background: #fff;
  font-size: 1.08rem;
  transition: border 0.3s, box-shadow 0.3s;
  font-family: inherit;
  box-shadow: 0 2.5px 14px rgba(230,0,35,0.06);
  margin-bottom: 2px;
  outline: none;
  appearance: none;
}
input:focus {
  border-color: #e60023;
  box-shadow: 0 0 0 4px #ffe6ea, 0 2.5px 14px rgba(230,0,35,0.10);
}
input[type="date"]::-webkit-input-placeholder,
input[type="text"]::-webkit-input-placeholder,
input[type="email"]::-webkit-input-placeholder,
input[type="password"]::-webkit-input-placeholder,
input[type="tel"]::-webkit-input-placeholder {
  color: #bdbdbd;
  opacity: 1;
}
input[type="date"]::-moz-placeholder,
input[type="text"]::-moz-placeholder,
input[type="email"]::-moz-placeholder,
input[type="password"]::-moz-placeholder,
input[type="tel"]::-moz-placeholder {
  color: #bdbdbd;
  opacity: 1;
}
input[type="date"]:-ms-input-placeholder,
input[type="text"]:-ms-input-placeholder,
input[type="email"]:-ms-input-placeholder,
input[type="password"]:-ms-input-placeholder,
input[type="tel"]:-ms-input-placeholder {
  color: #bdbdbd;
  opacity: 1;
}
input[type="date"]::placeholder,
input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="password"]::placeholder,
input[type="tel"]::placeholder {
  color: #bdbdbd;
  opacity: 1;
}
.btn-register {
  background: linear-gradient(90deg, #e60023 60%, #ff4b2b 100%);
  color: #fff;
  padding: 15px 0;
  font-size: 1.08rem;
  border: none;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.25s;
  margin-top: 0.7rem;
  box-shadow: 0 4px 16px rgba(230,0,35,0.13);
  letter-spacing: 0.5px;
  text-shadow: 0 1.5px 8px #ffe6ea;
}
.btn-register:hover {
  background: linear-gradient(90deg, #cc001e 60%, #e60023 100%);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 8px 24px rgba(230,0,35,0.18);
}
  .login-link {
    margin-top: 1.5rem;
    text-align: center;
    font-size: 1.01rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .login-link a,
  .login-link router-link {
    color: #e60023;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.2s, text-shadow 0.2s;
    text-shadow: 0 1px 6px #ffe6ea;
  }
  .login-link a:hover,
  .login-link router-link:hover {
    color: #cc001e;
    text-decoration: underline;
    text-shadow: 0 2px 10px #ffe6ea;
  }
  .login-divider {
    width: 100%;
    height: 1.5px;
    background: #e6e6e6;
    border-radius: 2px;
    margin: 0.4rem 0 0.3rem 0;
  }
  .btn-voltar {
    display: inline-block;
    margin-bottom: 1.2rem;
    color: #e60023;
    background: none;
    border: none;
    font-size: 1.01rem;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;
    padding: 0.2rem 0.5rem;
  }
  .btn-voltar:hover {
    color: #cc001e;
    text-decoration: underline;
  }
@media (max-width: 600px) {
  .register-card {
    padding: 1.2rem 0.2rem;
    max-width: 100%;
    border-radius: 12px;
  }
  .register-header h2 {
    font-size: 1.25rem;
  }
  .logo {
    width: 54px;
  }
  .form {
    gap: 0.7rem;
  }
}
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
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
  .content {
    padding: 1rem 0.3rem;
  }
}
.btn-cadastrar:hover {
  background: #246b43;
}
</style>
