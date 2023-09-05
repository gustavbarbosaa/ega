<template>
  <section 
  class="login flex h-full w-full"
  :class="store.stateModal ? 'modal-active' : ''"
  >
    <picture class="flex flex-col items-center justify-center max-w-[563px] w-full bg-yellow-login">
      <img src="../assets/logo-catolica-da-paraiba-1024x384 1.png" alt="" />
      <img src="../assets/Logo Preta PNG 2 1.png" alt="" />
    </picture>
    <form
      class="w-full flex flex-col items-center justify-center text-white p-20 bg-blue-login relative"
    >
      <div class="container-form-login max-w-[560px] w-full">
        <h1 class="font-montserrat font-normal text-[40px] pb-8">
          Faça Login para o painel da <br />
          Católica
        </h1>
        <div class="inputs flex flex-col pb-8 relative">
          <label
            for="registration"
            class="font-inter font-bold text-xl px-2 absolute left-4 -top-3 rounded-full bg-blue-login"
            >Matrícula:</label
          >
          <input
            type="text"
            name="registration"
            id="registration"
            class="px-4 h-10 border-4 rounded-3xl bg-transparent outline-none"
          />
        </div>
        <div class="inputs flex flex-col pb-8 relative">
          <label
            for="password"
            class="font-inter font-bold text-xl px-2 absolute left-4 -top-3 rounded-full bg-blue-login"
            >Senha:</label
          >
          <input
            type="password"
            name="password"
            id="password"
            class="px-4 h-10 border-4 rounded-3xl bg-transparent outline-none"
          />
        </div>
        <div class="pb-8 flex items-center gap-4">
          <input type="checkbox" name="remember-user" id="remember-user" class="h-6 w-6" />
          <label for="remember-user" class="font-source text-xl">Lembrar Usuário</label>
        </div>
        <div class="w-full flex justify-end">
          <div class="flex flex-col items-center max-w-[472px] w-full">
            <button
              class="font-montserrat font-medium text-xl w-full h-[38px] rounded-full bg-blue-btn"
            >
              Entrar
            </button>
            <p class="text-btn text-xl font-montserrat font-medium py-4">ou</p>
            <button
              type="button"
              class="font-montserrat font-medium text-xl w-full h-[38px] rounded-full bg-yellow-btn"
              @click="store.toggleModal"
            >
              Esqueceu a senha?
            </button>
          </div>
        </div>
      </div>
    </form>
  </section>
  <modal-remember-password class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
</template>

<script setup lang="ts">
import { useStateModalStore } from '@/stores/stateModal'
import ModalRememberPassword from '@/components/ModalRememberPassword.vue';

const store = useStateModalStore()
</script>

<style scoped>

.modal-active  {
  opacity: 0.7;
}

.text-btn {
  position: relative;
}

.text-btn::after {
  position: absolute;
  top: 50%;
  right: -95px;
  content: '';
  height: 2px;
  width: 90px;
  background: #fff;
  border-radius: 999px;
}

.text-btn::before {
  position: absolute;
  top: 50%;
  left: -95px;
  content: '';
  height: 2px;
  width: 90px;
  background: #fff;
  border-radius: 999px;
}
</style>