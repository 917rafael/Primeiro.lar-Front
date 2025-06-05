<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-header">
        <!--
          <img src="/logo-imobiliaria.png" alt="Logo Imobiliária" class="logo" />
        -->
        <h2>Área do Cliente</h2>
        <p>Entre para acessar imóveis para comprar ou alugar</p>
      </div>

      <form class="form">
        <label>Email</label>
        <input type="email" placeholder="Digite seu email" />

        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />

        <button class="btn-login" type="submit">Entrar</button>

        <p class="forgot-password">
          <a href="#">Esqueceu a senha?</a> | <a href="#">Criar conta</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fonte e fundo principal */
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5f7fa;
}

/* Página de login */
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-image: linear-gradient(to bottom right, #ffffff, #e6f2ff);
}

/* Cartão de login */
.login-card {
  width: 100%;
  max-width: 440px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  padding: 32px;
  transition: 0.3s ease;
}

.login-card:hover {
  transform: translateY(-2px);
}

/* Cabeçalho do login */
.login-header {
  text-align: center;
  margin-bottom: 28px;
}

.logo {
  width: 90px;
  margin-bottom: 12px;
}

.login-header h2 {
  color: #002244;
  font-size: 1.8rem;
  margin-bottom: 6px;
}

.login-header p {
  color: #555555;
  font-size: 0.95rem;
}

/* Formulário */
.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

label {
  font-weight: 600;
  color: #222222;
  font-size: 0.95rem;
}

input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #dcdcdc;
  background-color: #ffffff;
  font-size: 1rem;
  transition: border 0.3s ease;
}

input:focus {
  border-color: #00baff;
  outline: none;
}

/* Botão de login */
.btn-login {
  background: linear-gradient(135deg, #002244, #00baff);
  color: white;
  padding: 14px;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  box-shadow: 0 4px 12px rgba(0, 186, 255, 0.3);
}

.btn-login:hover {
  background: linear-gradient(135deg, #003366, #00a3d1);
  transform: scale(1.02);
}

/* Links */
.forgot-password {
  margin-top: 16px;
  text-align: center;
  font-size: 0.9rem;
}

.forgot-password a {
  color: #00baff;
  text-decoration: none;
  font-weight: 500;
}

.forgot-password a:hover {
  text-decoration: underline;
}

/* Responsivo */
@media (max-width: 500px) {
  .login-card {
    padding: 24px 20px;
  }

  .login-header h2 {
    font-size: 1.6rem;
  }

  .logo {
    width: 70px;
  }
}

/* Estilizações extras para beleza */
input::placeholder {
  color: #999999;
  font-size: 0.95rem;
}

input:invalid {
  border-color: #f44336;
}

input,
button {
  transition: 0.3s ease;
}

/* Estilização animada de foco */
input:focus {
  box-shadow: 0 0 0 3px rgba(0, 186, 255, 0.15);
}

/* Estilo do formulário em hover */
.form:hover input {
  border-color: #00baff;
}

/* Animação sutil no card */
.login-card {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Detalhes decorativos */
.login-page::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #00baff;
  top: 10%;
  left: 5%;
  border-radius: 50%;
  opacity: 0.1;
  z-index: -1;
}

.login-page::after {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: #002244;
  bottom: 5%;
  right: 10%;
  border-radius: 50%;
  opacity: 0.08;
  z-index: -1;
}
</style>
