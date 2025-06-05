<template>
  <div class="register-page">
    <div class="register-card">
      <div class="register-header">
        <!--
          <img src="/logo-imobiliaria.png" alt="Logo Imobiliária" class="logo" />
        -->

        <h2>Cadastro de Cliente</h2>
        <p>Crie sua conta para visualizar e comparar imóveis disponíveis</p>
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
        <input type="email" placeholder="Digite seu email" required />

        <label>Senha</label>
        <input type="password" placeholder="Crie uma senha" required />

        <button class="btn-register" type="submit">Cadastrar</button>

        <p class="login-link">
          Já tem uma conta? <a href="#">Entrar</a>
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
  background-color: #f5f7fa;
}

.register-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-image: linear-gradient(to bottom right, #ffffff, #e6f2ff);
}

.register-card {
  width: 100%;
  max-width: 520px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  padding: 36px;
  transition: 0.3s ease;
}

.register-card:hover {
  transform: translateY(-2px);
}

.register-header {
  text-align: center;
  margin-bottom: 24px;
}

.logo {
  width: 80px;
  margin-bottom: 12px;
}

.register-header h2 {
  color: #002244;
  font-size: 1.8rem;
  margin-bottom: 6px;
}

.register-header p {
  color: #555555;
  font-size: 0.95rem;
}

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
  box-shadow: 0 0 0 3px rgba(0, 186, 255, 0.15);
}

.btn-register {
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

.btn-register:hover {
  background: linear-gradient(135deg, #003366, #00a3d1);
  transform: scale(1.02);
}

.login-link {
  margin-top: 16px;
  text-align: center;
  font-size: 0.9rem;
}

.login-link a {
  color: #00baff;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}

@media (max-width: 500px) {
  .register-card {
    padding: 24px 20px;
  }

  .register-header h2 {
    font-size: 1.6rem;
  }

  .logo {
    width: 70px;
  }
}
</style>
