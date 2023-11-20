<template>
  <!-- <div class="input-group mb-3">
    <div class="input-group-prepend">
      <button class="btn btn-outline-secondary" type="button">Button</button>
    </div>
    <div class="custom-file">
      <input type="file" class="custom-file-input" @change="handleFileUpload" id="inputGroupFile03">
      <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
    </div>
  </div> -->

  <div class="container mt-5">
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="text-center">
                <img src="placeholder.jpg" alt="Foto do Perfil" class="img-fluid rounded-circle mb-3" style="width: 150px; height: 150px;">
                <input type="file" class="form-control-file mb-3">
            </div>
            <h4 class="text-center">John Doe</h4>
            <p class="text-center">@johndoe123</p>
            <hr>

            <h5>Informações Pessoais</h5>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Data de Nascimento:</strong> 01/01/1990</p>
            <p><strong>Localização:</strong> Cidade, País</p>

            <hr>

            <h5>Informações Adicionais</h5>
            <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec felis in turpis venenatis congue.</p>
        </div>
    </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      selectedFile: null as File | null
    }
  },

  methods: {
    // handleFileUpload(event: Event) {
    //   const inputElement = event.target as HTMLInputElement;
    //   this.selectedFile = inputElement.files ? inputElement.files[0] : null;
    //   console.log("blob: " + this.selectedFile)
    //   const reader = new FileReader();
    //   reader.onload = (event: ProgressEvent<FileReader>) => {
    //     const result = event.target?.result;

    //     if (result instanceof ArrayBuffer) {
    //       const blob = new Blob([result], { type: this.selectedFile?.type });
    //       console.log("Blob:", blob);

    //       // Agora você pode enviar o blob para o banco de dados ou fazer o que quiser com ele
    //     } else if (typeof result === 'string') {
    //       console.log("merda")
    //     }
    //   };

    //   reader.readAsArrayBuffer(this.selectedFile); 
    // },
  }
}) 
</script>