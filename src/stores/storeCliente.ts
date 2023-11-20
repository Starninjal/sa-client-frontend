import type Cliente from "@/interfaces/Cliente";
import { createPinia, defineStore } from "pinia";

export const pinia = createPinia();

export const storeUsuario = defineStore({
   id: 'storeUsuario', 
   state: () => ({
    cliente: {} as Cliente
   }),

   actions: {
     setCliente(novoCliente: Cliente) {
        this.cliente = novoCliente;
     },
   },

   getters: {
    cliente: (state) => state.cliente
   }
});