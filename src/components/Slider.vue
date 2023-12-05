<template></template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            imgs: null as NodeListOf<HTMLImageElement> | null,
            dots: null as NodeListOf<Element> | null,
            leftArrow: null as HTMLDivElement | null,
            rightArrow: null as HTMLDivElement | null,
            currentIndex: 0,
            time: 5000,
        }
    },
    mounted() {
        this.imgs = document.querySelectorAll(".container img");
        this.dots = document.querySelectorAll(".dot i");
        this.leftArrow = document.querySelector(".arrow-left");
        this.rightArrow = document.querySelector(".arrow-right");

        this.defClass(1, 0);


        if (this.imgs && this.dots && this.leftArrow && this.rightArrow) {
            this.defClass(1, 0);

            this.leftArrow.addEventListener("click", () => {
                if (this.leftArrow) {
                    this.currentIndex <= 0 ? (this.currentIndex = this.imgs!.length - 1) : this.currentIndex--;
                    this.defClass(0, this.currentIndex);
                }
            });

            this.rightArrow.addEventListener("click", () => {
                this.currentIndex >= this.imgs!.length - 1 ? (this.currentIndex = 0) : this.currentIndex++;
                this.defClass(0, this.currentIndex);
            });

            this.startAutoSlide(); // Inicia o slideshow
        }

        this.startAutoSlide(); // Inicia o slideshow
    },

    methods: {
        defClass(startPos: number, index: number) {
            if (this.imgs && this.dots) {
                for (let i = startPos; i < this.imgs.length; i++) {
                    this.imgs[i].style.display = "none";
                    this.dots[i].classList.remove("fa-dot-circle");
                    this.dots[i].classList.add("fa-circle");
                }
                this.imgs[index].style.display = "block";
                this.dots[index].classList.add("fa-dot-circle");
            }
        },
        startAutoSlide() {
            if (this.imgs) {
                setInterval(() => {
                    if (this.imgs) {
                        this.currentIndex >= this.imgs.length - 1 ? (this.currentIndex = 0) : this.currentIndex++;
                        this.defClass(0, this.currentIndex);
                    }
                }, this.time);
            }
        },
    },
});
</script> q