<script setup>
import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';
import Anuncio from '@/components/Anuncio.vue';
import Filtro from '@/components/Filtro.vue';
</script>


<template>
  <Header />
  <div style="display: flex; justify-content: flex-end; gap: 2.5rem; margin: 1rem 2rem 0 0;">
    <router-link to="/Favoritos">
      <button class="btn favorito">Favoritos</button>
    </router-link>
    <router-link to="/CadastroUsuario">
      <button class="btn cadastro">Cadastre-se</button>
    </router-link>
  </div>
  <Filtro />
  <Anuncio />
  <Anuncio />
  <Anuncio />
  <Anuncio />
  <Anuncio />
  <Anuncio />
</template>

<style scoped>
.btn {
  background: var(--color3, #2e8b57);
  color: var(--color5, #fff);
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 6px 14px rgba(17,77,77,0.18);
  border: 2px solid var(--color4, #246b43);
}
.btn.favorito {
  background: var(--color4, #246b43);
  color: var(--color1, #fff);
  border-color: var(--color3, #2e8b57);
}
.btn.cadastro {
  background: var(--color4, #246b43);
  color: var(--color1, #fff);
  border-color: var(--color3, #2e8b57);
}
.btn:hover {
  background: var(--color2, #246b43);
  color: var(--color5, #fff);
  box-shadow: 0 8px 18px rgba(17,77,77,0.28);
  transform: translateY(-3px) scale(1.04);
}
</style>

