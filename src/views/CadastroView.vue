<template>
    <div class="body"
        style="width: 100%; height: 100vh; background-image: url('https://github.com/renan-andrade-senai/senaifood-front/blob/main/src/assets/variedade-plana-com-deliciosa-comida-brasileira.jpg?raw=true');">
        <br>
        <div class="container" style="">

            <div id="homeView" style="display: flex; justify-content: center;">
                <div id="home">
                    <div class="container-form" style="display: flex;">
                        <div v-if="isAlert" class="alert alert-dark" role="alert">
                            {{ msgAlert }}
                        </div>

                        <h1 style="display: flex; justify-content: center;">Cadastro de Cliente</h1>


                        <form @submit.prevent="addCliente" action="">
                            <div class="formgroup1">
                                <label for="username">Cpf:</label>
                                <input type="text" class="form-control" v-model="cliente.cpfCliente">
                            </div>
                            <div class="form-group formgroup2">
                                <label for="password">Nome:</label>
                                <input type="text" class="form-control" v-model="cliente.nomeCliente">
                            </div>

                            <div class="form-group formgroup2">
                                <label for="password">Nome de Usuário:</label>
                                <input type="text" class="form-control" v-model="cliente.usuarioDto.username">
                            </div>

                            <div class="form-group formgroup1">
                                <label for="username">Telefone:</label>
                                <input type="text" class="form-control" v-model="cliente.telefoneCliente">
                            </div>
                            <div class="form-group formgroup2">
                                <label for="password">E-mail:</label>
                                <input type="email" class="form-control" v-model="cliente.emailCliente">
                            </div>
                            <div class="form-group formgroup1">
                                <label for="username">Password:</label>
                                <input type="password" class="form-control" v-model="cliente.usuarioDto.password">
                            </div>
                            <div class="form-group formgroup1">
                                <label for="username">Endereço:</label>
                                <input type="text" class="form-control" v-model="cliente.enderecoCliente">
                            </div>
                            



                            <!-- <input type="file" class="custom-file-input" @change="handleFileUpload"
                                            id="inputGroupFile03">
                                        <label class="custom-file-label" for="inputGroupFile03">{{ selectedFile ?
                                            selectedFile.name
                                            : 'Choose file'
                                        }}</label> -->

                            <label class="form-label" for="customFile">Default file input example</label>
                            <input type="file" class="form-control" id="customFile" @change="handleFileUpload" />











                            <button class="btn btn-primary btn-cadastro "
                                style="margin-top: 20px; width: 100%;">Cadastrar</button>
                        </form>
                    </div>


                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>
.btn-cadastro {
    transition: all 0.2s ease-in-out;
}

.container-form input {
    width: 600px;
}

.btn-cadastro:hover {
    transform: translateY(-2px);
}

.container {
    margin-top: 100px;
}

.container-form {
    flex-direction: column;
    background-color: rgb(118, 117, 117);
    padding: 50px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 20px;
    color: white;
}

/* 
#homeView { 
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100%;
  filter: blur(0) !important;
}

.container {
    width: 100vw;
    height: 100vh;
    background-color: red;
    background: #AE2012 url("../assets/bg.png") no-repeat !important;
    background-position: center center;
    background-size: 120% !important;
    background-position: 30% 45%;
}

#home>h1 {
    padding: 10px;
}

#home {
    flex-direction: column;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: aqua;
    margin: 45px;
    padding: 20px;
}

#menu {
    flex-direction: column;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: aqua;
    background-image: url("../assets/imgAd.png");
}

#salvaCliente {
    margin-top: 20px;
    margin-bottom: 10px;
} */
</style>

<script lang="ts">
import http from '@/http';
import type Cliente from '@/interfaces/Cliente';
import type Usuario from '@/interfaces/Usuario'

import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            cliente: { usuarioDto: {} } as Cliente,
            msgAlert: '',
            Usuario: {} as Usuario,
            isAlert: false,
            selectedFile: null as File | null,
        }
    },

    methods: {
        async addCliente() {
            this.validarCliente();
            const response = await http.post("/cliente", this.cliente)
            const clienteAtual: Cliente = response.data;

            this.uploadToDatabase();

            if (clienteAtual.cpfCliente == this.cliente.cpfCliente) {   
                // this.$router.push("/")
            } else {
                alert("Usuário inválido");
            }

        },

        validarCliente() {
            if (!this.cliente.cpfCliente) {
                this.msgAlert = "O cpf não pode ser vazio!";
                this.isAlert = true;
                throw Error("O cpf não pode ser vazio!")
            }

            if (!this.cliente.nomeCliente) {
                this.msgAlert = "O nome do cliente não pode ser vazio!";
                this.isAlert = true;
                throw Error("O nome do cliente não pode ser vazio!")
            }

            if (!this.cliente.emailCliente) {
                this.msgAlert = "O email do cliente não pode ser vazio!";
                this.isAlert = true;
                throw Error("O email não pode ser vazio!")
            }

            if (!this.cliente.usuarioDto.username) {
                this.msgAlert = "O nome de usuário não pode ser vazio!";
                this.isAlert = true;
                throw Error("O nome do usuário não pode ser vazio!")
            }

            if (!this.cliente.telefoneCliente) {
                this.msgAlert = "O telefone não pode ser vazio!";
                this.isAlert = true;
                throw Error("O telefone não pode ser vazio!")
            }

            if (!this.cliente.nomeCliente) {
                this.msgAlert = "O nome do cliente não pode ser vazio!";
                throw Error("O nome do cliente não pode ser vazio!")
            }



        },


        handleFileUpload(event: Event) {
            const inputElement = event.target as HTMLInputElement
            this.selectedFile = inputElement.files ? inputElement.files[0] : null
        },

        async uploadToDatabase() {
            if (this.selectedFile) {
                const reader = new FileReader();
                reader.onload = async (event: ProgressEvent<FileReader>) => {
                    const result = event.target?.result;
                    if (result instanceof ArrayBuffer) {
                        const blob = new Blob([result], { type: this.selectedFile?.type });
                        console.log("Blob: " + blob);
                        this.cliente.image = blob;
                            const formData = new FormData();
                            formData.append('cpfCliente', this.cliente.cpfCliente);
                            formData.append('file', blob);

                            try {
                                const responseUsuario = await http.post("/cliente/save", formData);
                                console.log('Resposta do servidor:', responseUsuario.data);
                                // Adicione a lógica adicional aqui conforme necessário
                            } catch (error) {
                                console.error('Erro ao enviar para o servidor:', error);
                                // Trate o erro conforme necessário
                            }
                        
                    }
                };
                reader.readAsArrayBuffer(this.selectedFile)
            }
        }
    },

    async getClienteById(x) {
        const cliente: Cliente = await http.get()
    }








})
</script>