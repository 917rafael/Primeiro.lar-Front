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
        <router-link to="/loginUsu"></router-link>
        <div class="forgot-password forgot-password-horizontal">
          <a href="#">Esqueceu a senha?</a>
          <span class="forgot-separator"></span>
          <router-link to="/Cadastrousu"><a href="/#">Criar conta</a></router-link>
        </div>
      </form>
    </div>
  </div>
</template>

 
<style scoped>
body {
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
  background: linear-gradient(120deg, #f5f7fa 0%, #fff 100%);
  min-height: 100vh;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e6e9f0 100%);
}

.login-card {
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
.login-card::before {
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
.login-card:hover {
  box-shadow: 0 12px 36px rgba(230,0,35,0.13), 0 2px 12px rgba(0,0,0,0.07);
  transform: translateY(-4px) scale(1.012);
}
.login-header {
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
.login-header h2 {
  color: #e60023;
  font-size: 2.1rem;
  margin-bottom: 0.3rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px #ffe6ea;
}
.login-header p {
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
.btn-login {
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
.btn-login:hover {
  background: linear-gradient(90deg, #cc001e 60%, #e60023 100%);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 8px 24px rgba(230,0,35,0.18);
}
  .forgot-password {
    margin-top: 1.5rem;
    text-align: center;
    font-size: 1.01rem;
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
  .forgot-password a {
    color: #e60023;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.2s, text-shadow 0.2s;
    text-shadow: 0 1px 6px #ffe6ea;
  }
  .forgot-password a:hover {
    color: #cc001e;
    text-decoration: underline;
    text-shadow: 0 2px 10px #ffe6ea;
  }
  .forgot-separator {
    display: inline-block;
    width: 1.5px;
    height: 18px;
    background: #e6e6e6;
    border-radius: 2px;
    margin: 0 0.7rem;
    vertical-align: middle;
  }
@media (max-width: 600px) {
  .login-card {
    padding: 1.2rem 0.2rem;
    max-width: 100%;
    border-radius: 12px;
  }
  .login-header h2 {
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
}
</style>
