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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f0f4f8;
}

.register-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to right, #f5f7fa, #dceeff);
}

.register-card {
  width: 100%;
  max-width: 550px;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  padding: 40px;
  transition: 0.3s ease;
}

.register-card:hover {
  transform: translateY(-3px);
}

.register-header {
  text-align: center;
  margin-bottom: 26px;
}

.logo {
  width: 80px;
  margin-bottom: 12px;
}

.register-header h2 {
  color: #003366;
  font-size: 2rem;
  margin-bottom: 8px;
}

.register-header p {
  color: #555555;
  font-size: 0.95rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  font-weight: 600;
  color: #222;
  font-size: 0.95rem;
}

input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ccd6dd;
  background-color: #ffffff;
  font-size: 1rem;
  transition: border 0.3s ease;
}

input:focus {
  border-color: #00a3d1;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 163, 209, 0.2);
}

.btn-register {
  background: linear-gradient(135deg, #003366, #00baff);
  color: white;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  box-shadow: 0 5px 14px rgba(0, 186, 255, 0.3);
}

.btn-register:hover {
  background: linear-gradient(135deg, #002244, #009acb);
  transform: scale(1.02);
}

.login-link {
  margin-top: 18px;
  text-align: center;
  font-size: 0.9rem;
}

.login-link a {
  color: #0077b6;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}

@media (max-width: 540px) {
  .register-card {
    padding: 28px 22px;
  }

  .register-header h2 {
    font-size: 1.7rem;
  }

  .logo {
    width: 65px;
  }
}
</style>
