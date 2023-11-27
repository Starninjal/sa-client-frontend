<template>
    <div class="container">
      <div id="autoCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(image, index) in images" :key="index" :class="['carousel-item', { 'active': index === currentIndex }]">
            <img :src="getImageSource(image)" class="d-block w-100" alt="Slide">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  
  export default defineComponent({
    props: {
      images: {
        type: Array as () => string[],
        required: true
      }
    },
    setup(props) {
      const currentIndex = ref(0);
      let intervalId: number | null = null;
  
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
  
      const nextSlide = () => {
        currentIndex.value = currentIndex.value >= props.images.length - 1 ? 0 : currentIndex.value + 1;
      };
  
      return {
        currentIndex,
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