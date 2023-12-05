<template>
  <div class="container">
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="['carousel-item', { 'active': index === currentIndex }]">
          <img :src="getImageSource(image)" class="d-block w-100" alt="Slide">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" @click="prevSlide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" @click="nextSlide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> 
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  props: {
    images: {
      type: Array as () => string[],
      required: true
    }
  },
  setup(props) {
    const currentIndex = ref(0);
    let carouselInstance: any = null; // Armazenar a instância do carrossel
    let intervalId: number | null = null; // Armazenar o ID do intervalo

    const prevSlide = () => {
      currentIndex.value = currentIndex.value <= 0 ? props.images.length - 1 : currentIndex.value - 1;
      carouselInstance.prev(); // Ir para o slide anterior usando Bootstrap
    };

    const nextSlide = () => {
      currentIndex.value = currentIndex.value >= props.images.length - 1 ? 0 : currentIndex.value + 1;
      carouselInstance.next(); // Ir para o próximo slide usando Bootstrap
    };

    const getImageSource = (image: unknown) => {
      return typeof image === 'string' ? image : '';
    };

    onMounted(() => {
      startAutoSlide();
    });

    onBeforeUnmount(() => {
      stopAutoSlide();
    });

    const startAutoSlide = () => {
      intervalId = setInterval(() => nextSlide(), 4000);
    };

    const stopAutoSlide = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    return {
      currentIndex,
      prevSlide,
      nextSlide,
      getImageSource
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
</style>