<template>
  <div class="sss" style="width: 100%; height: 100vh;">

  <div style="display: flex; justify-content: center; margin-top: 200px;">
    <!-- <div v-if="isLoggedIn">
        <h2>Bem-vindo, {{ username }}!</h2>
        <button class="btn btn-danger" @click="logout">Sair</button>
      </div> -->
    <div style="">
      <h2>Login</h2>
      <div v-if="isLoginFail" class="alert alert-danger" role="alert">
        Usuário e/ou senha incorretos!
      </div>
      <div v-if="isLogado" class="alert alert-success" role="alert">
        Logado com sucesso
      </div>
      <form @submit.prevent="fazerLogin">
        <div class="form-group formgroup1">
          <label for="username">Cpf:</label>  
          <input type="text" class="form-control" v-model="cliente.cpfCliente" required>
        </div>
        <div class="form-group formgroup2">
          <label for="password">Nome:</label>
          <input type="password" class="form-control" v-model="cliente.nomeCliente" required>
        </div>
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Entrar</button>

        <div>
          <p class="mt-3">
            Não tem uma conta?
            <RouterLink to="/cadastro"><a href="">Crie uma conta aqui.</a></RouterLink>
          </p>
        </div>

      </form>



    </div>

  </div>

  
</div>
</template>

<style scoped>
.formgroup1 input,
.formgroup2 input {
  width: 400px;
}
</style>

<script lang="ts">
import http from '@/http';
import type Cliente from '@/interfaces/Cliente';
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      cliente: {} as Cliente,
      isLogado: false,
      isLoginFail: false
    }
  },

  methods: {
    async fazerLogin() {
      const responseUsuario = await http.post("/get/cliente", this.cliente);
      if (responseUsuario.data == true) {
        this.isLogado = true
        this.isLoginFail = false;
        setTimeout(() => {
          this.$router.push("/cadastro")
        }, 2000);
      } else {
        this.isLogado = false;
        this.isLoginFail = true;
      }
    },

    limparCampos() {

    }
  }
})
</script>