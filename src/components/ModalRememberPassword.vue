<template>
  <div
    class="modal flex flex-col max-h-[425px] h-full max-w-[650px] w-full bg-gray-modal rounded-[15px] drop-shadow-2xl"
    v-show="store.stateModal"
  >
    <header class="flex items-center justify-center w-full h-[75px] bg-blue-login">
      <h2 class="text-white text-xl font-bold font-inter">
        Preencha os campos para trocar de senha:
      </h2>
    </header>
    <form class="h-[calc(100%-75px)] flex flex-col items-center justify-center">
      <div class="inputs flex flex-col relative max-w-[500px] w-full mb-[65px]">
        <label
          for="registration-remember"
          class="font-inter font-bold text-[15px] text-blue-login px-2 absolute left-8 -top-3 rounded-full bg-gray-modal"
          >Matrícula:</label
        >
        <input
          type="text"
          name="registration-remember"
          id="registration-remember"
          class="px-4 h-10 border-4 border-blue-login rounded-3xl bg-transparent outline-none"
        />
      </div>
      <div class="inputs flex flex-col relative max-w-[500px] w-full mb-[45px]">
        <label
          for="email-remember"
          class="font-inter font-bold text-[15px] text-blue-login px-2 absolute left-8 -top-3 rounded-full bg-gray-modal"
          >Email:</label
        >
        <input
          type="text"
          name="email-remember"
          id="email-remember"
          class="px-4 h-10 border-4 border-blue-login rounded-3xl bg-transparent outline-none"
        />
      </div>
      <button
        type="button"
        class="font-montserrat font-medium text-xl text-white max-w-[357px] w-full h-[38px] rounded-full bg-blue-btn"
        @click="store.toggleModal"
      >
        Enviar solicitação
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStateModalStore } from '../stores/stateModal'

const store = useStateModalStore()
</script>