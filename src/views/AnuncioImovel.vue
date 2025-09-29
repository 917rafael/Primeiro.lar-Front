<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const estados = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
]

const cidades = ref([])

const form = ref({
  operacao: '',
  tipo: '',
  imagem: null,
  estado: '',
  cidade: '',
  cep: '',
  endereco: '',
  areaUtil: '',
  areaTotal: '',
  quartos: '',
  suites: '',
  banheiros: '',
  garagens: '',
  titulo: '',
  descricao: '',
  areasPrivativas: '',
  areasComuns: '',
  preco: '',
})

watch(() => form.value.estado, async (uf) => {
  cidades.value = []
  form.value.cidade = ''
  if (uf) {
    try {
      const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
      const data = await res.json()
      cidades.value = data.map(c => c.nome)
    } catch {
      cidades.value = []
    }
  }
})

function voltar() {
  router.push('/PaginaAnuncio')
}
function anunciar() {
  localStorage.setItem('anuncioPreview', JSON.stringify({ ...form.value, imagem: form.value.imagem ? URL.createObjectURL(form.value.imagem) : null }))
  router.push('/PreviaAnuncio')
}
function handleImageUpload(e) {
  form.value.imagem = e.target.files[0]
}
</script>

<template>
  <div class="overlay">
    <div class="anuncio-container">
      <div class="anuncio-page">
        <div class="nav-header">
          <button class="back-btn" @click="voltar">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="content">
          <div class="left-column">
            <h2>Anuncie seu imóvel</h2>
            <form class="form-anuncio" @submit.prevent="anunciar">
              <select v-model="form.operacao" required>
                <option value="">Vender ou Alugar?</option>
                <option value="Vender">Vender</option>
                <option value="Alugar">Alugar</option>
              </select>
              <select v-model="form.tipo" required>
                <option value="">Tipo de imóvel</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Comercial">Comercial</option>
                <option value="Outro">Outro</option>
              </select>
              <input type="file" accept="image/*" @change="handleImageUpload" />
              <select v-model="form.estado" required>
                <option value="">Selecione o estado</option>
                <option v-for="uf in estados" :key="uf" :value="uf">{{ uf }}</option>
              </select>
              <select v-if="cidades.length" v-model="form.cidade" required>
                <option value="">Selecione a cidade</option>
                <option v-for="cidade in cidades" :key="cidade" :value="cidade">{{ cidade }}</option>
              </select>
              <input v-else v-model="form.cidade" type="text" placeholder="Cidade" required />
              <input v-model="form.cep" type="text" placeholder="CEP" required />
              <input v-model="form.endereco" type="text" placeholder="Endereço" required />
              <input v-model="form.areaUtil" type="text" placeholder="Área útil (m²)" required />
              <input v-model="form.areaTotal" type="text" placeholder="Área total (m²)" required />
              <input v-model="form.quartos" type="number" min="0" placeholder="Quartos" required />
              <input v-model="form.suites" type="number" min="0" placeholder="Suítes" required />
              <input v-model="form.banheiros" type="number" min="0" placeholder="Banheiros" required />
              <input v-model="form.garagens" type="number" min="0" placeholder="Garagens" required />
              <input v-model="form.titulo" type="text" placeholder="Título do anúncio" required />
              <textarea v-model="form.descricao" placeholder="Descrição" rows="3" required></textarea>
              <input v-model="form.areasPrivativas" type="text" placeholder="Áreas privativas (separadas por vírgula)" />
              <input v-model="form.areasComuns" type="text" placeholder="Áreas comuns (separadas por vírgula)" />
              <input v-model="form.preco" type="text" placeholder="Preço" required />
              <button class="btn anunciar" type="submit">Anunciar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  max-width: 1100px;
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
.nav-header {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background: #fafafa;
  border-bottom: 1px solid #eee;
}
.back-btn {
  background: #246b43;
  border: none;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #246b43;
}
.content {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}
.left-column {
  flex: 3;
}
.right-column {
  flex: 1.2;
  position: sticky;
  top: 80px;
  height: fit-content;
}
.form-anuncio {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-anuncio input,
.form-anuncio select,
.form-anuncio textarea {
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
  background: #246b43;
  transform: translateY(-2px);
}
.info-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.2rem 0;
}
.info-box span {
  background: #f8f8f8;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.95rem;
  border: 1px solid #eee;
}
.mensagem {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #246b43;
  font-weight: 500;
}
.comodidades h4 {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #222;
}
.comodidades ul {
  margin-bottom: 0.5rem;
}
.chip {
  border: 1px solid #ddd;
  background: #f7f7f7;
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}
.chip:hover {
  background: #e60023;
  color: #fff;
  border-color: #e60023;
}
.quick-questions {
  margin-top: 1.5rem;
}
.questions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}
.btn.enviar {
  background: #e60023;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}
.btn.enviar:hover {
  background: #cc001e;
  transform: translateY(-2px);
}
.alerta {
  background: #fff4f4;
  border: 1px solid #ffd1d1;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #a6001a;
}
.contact-box {
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 3px 12px rgba(0,0,0,0.05);
}
.contact-box .tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.contact-box .tabs button.active {
  border-bottom: 2px solid #e60023;
  color: #e60023;
}
.contact-box input,
.contact-box textarea {
  width: 100%;
  margin: 0.5rem 0;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
}
.phone {
  margin-top: 1rem;
  font-size: 1rem;
  color: #222;
}
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@media (max-width: 1024px) {
  .content { flex-direction: column; }
  .right-column { position: relative; top: 0; }
}
@media (max-width: 600px) {
  .anuncio-container { max-width: 100%; }
  .content { padding: 1rem; }
}
</style>