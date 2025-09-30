<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="register-page">
    <div class="register-card">

      <div class="register-header">
        <!-- <img src="/logo-imobiliaria.png" alt="Logo Imobiliária" class="logo" /> -->
        <h2>Cadastro de Corretor</h2>
        <p>Cadastre-se para gerenciar imóveis e atender clientes</p>
      </div>

      <form class="form">
        <label>Nome Empresarial / Razão Social</label>
        <input type="text" placeholder="Ex: Imobiliária Sol Nascente LTDA" required />

        <label>CNPJ</label>
        <input type="text" placeholder="Digite seu CNPJ" required />

        <label>CRECI</label>
        <input type="text" placeholder="Número do registro CRECI" required />

        <label>Data de Nascimento</label>
        <input type="date" required />

        <label>Telefone</label>
        <input type="tel" placeholder="(99) 99999-9999" required />

        <label>Email</label>
        <input type="email" placeholder="Digite seu email" required />

        <label>Senha</label>
        <input type="password" placeholder="Crie uma senha segura" required />

        <button class="btn-register" type="submit" >Cadastrar Corretor</button>

        <p class="login-link">
          Já é cadastrado?<router-link to="/loginusu"><a href="#">Entrar</a></router-link>
        </p>
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
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e6e9f0 100%);
}
.register-card {
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
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 26px rgba(0,0,0,0.18);
  padding: 2.5rem 2rem;
  max-width: 420px;
  width: 100%;
}
.register-header h2 {
  color: var(--color4, #246b43);
  margin-bottom: 0.5rem;
}
.register-header p {
  color: #222;
  margin-bottom: 1.2rem;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form label {
  font-weight: 500;
  margin-bottom: 0.3rem;
}
.form input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}
.btn-register {
  background: var(--color4, #246b43);
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-register:hover {
  background: var(--color2, #246b43);
  transform: translateY(-2px);
}
.login-link {
  text-align: center;
  margin-top: 1rem;
}
.login-link a {
  color: var(--color3, #2e8b57);
  text-decoration: underline;
}

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
}
  .btn-voltar-seta {
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    z-index: 10;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: transform 0.18s;
  }
  .btn-voltar-seta:hover svg circle {
    fill: #ffe6ea;
  }
  .btn-voltar-seta:active {
    transform: scale(0.96);
  }
</style>
