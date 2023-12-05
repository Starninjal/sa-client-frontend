


<template>
  <div class="div-principal">
    <!-- Barra de Navegação -->
    <nav class="navbar">
      <!-- Nome do Site -->
      <div class="brand">
        <span>SenaiFood</span>
      </div>
      <div class="nav-bar" style="display: flex; margin-right: 800px; gap: 20px;">
        <!-- Menu Restaurante -->
        <div class="menu">
          <span class="menu-title">Restaurante</span>
          <div class="submenu">
            <a href="#">Cadastrar Restaurante</a>
            <a href="#">Listar Restaurantes</a>
          </div>
        </div>

        <!-- Espaçador -->
        <div class="spacer"></div>

        <!-- Menu Entregador -->
        <div class="menu">
          <span class="menu-title">Entregador</span>
          <div class="submenu">
            <a href="#">Cadastrar Entregador</a>
            <a href="#">Listar Entregadores</a>
          </div>
        </div>
      </div>


      <!-- Botão de Login -->
      <div class="login-btn">
        <RouterLink to="/login"><button>Login</button></RouterLink>
      </div>
    </nav>
    <!-- <div class="div-texto" style="display: flex; justify-content: center;">
      <h1>{{ textHamburguer }}</h1>
    </div> -->
    <!-- Vídeo -->
    <div class="img-slider" style="display: flex; justify-content: center; align-items: center; padding: 30px;">
      
      <video autoplay="true" loop="true" src="../assets/party.mp4"></video>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para a Barra de Navegação */
.navbar {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
}

.brand {
  margin-right: auto;
  /* Empurra o resto para a direita */
}

.menu {
  position: relative;
  cursor: pointer;
}

.menu-title {
  padding: 10px;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #555;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.submenu a {
  display: block;
  padding: 8px;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 4px;
  /* Adiciona transição de cor de fundo */
}

.submenu a:hover {
  background-color: #777;
  /* Cor de fundo ao passar o mouse */
}

.menu:hover .submenu {
  display: block;
}

.spacer {
  width: 20px;
  /* Espaçador entre os menus */
}

.login-btn {
  display: flex;
  align-items: center;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.div-principal {
  width: 100%;
  background-color: #3D3D3D;
}

.div-texto {
  display: flex;
  justify-content: center;
  margin-left: 900px;
  margin-top: 120px;
  transform: translate(-50%, -50%); /* Centraliza completamente */
  z-index: 2; /* Garante que fique sobre o vídeo */
  background-color: rgba(255, 255, 255, 0.8); /* Fundo branco com opacidade */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Sombra suave */
  max-width: 80%; /* Largura máxima para melhor responsividade */
  text-align: center;
  color: #333; /* Cor do texto */
}

h1 {
  margin: 0; /* Remove margens padrão do h1 */
}

</style>

<script lang="ts">



import { defineComponent } from 'vue';

import SliderMain from '@/components/SliderMain.vue';
import SliderAuto from '../components/SliderAuto.vue'

export default defineComponent({



  data() {
    return {
      images: [
        "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG",
        "https://st2.depositphotos.com/3957801/5642/i/450/depositphotos_56423065-stock-photo-bacon-burger.jpg",
        "https://www.mirassolconectada.com.br/wp-content/uploads/2019/09/capa-El-Chorip%C3%A1n-.jpg"
      ],
      textHamburguer: 'Choripan (Chimichurri, Pão, Linguiça Toscana, Maionese Especial)',
    };
  },
  methods: {
    async iniciarLoopInfinito() {
      const valores = [
        { texto: "Choripan (Chimichurri, Pão, Linguiça Toscana, Maionese Especial)", tempo: 3000 },
        { texto: "DoubleCheese (dois hambúrgueres bovinos 100%, )", tempo: 2700 },
        { texto: "TripleCheesede", tempo: 3000 },
        {texto: "TripleCheese com Fritas", tempo: 3000}
      ];

      while (true) {
        for (const { texto, tempo } of valores) {
          console.log(`Variável: ${texto}`);
          this.textHamburguer = texto;
          await this.delay(tempo);
        }
      }
    },
    delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
},
  components: {
  SliderMain,
  SliderAuto
},

created() {
  this.iniciarLoopInfinito()
}

})
</script>