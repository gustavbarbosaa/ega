import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateModalStore = defineStore('state-modal', () => {
  const stateModal = ref(false)

  const toggleModal = () => {
    console.log(stateModal.value)
    stateModal.value = !stateModal.value
  }

  return { stateModal, toggleModal }
})