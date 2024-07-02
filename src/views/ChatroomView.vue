<script setup>
import getUser from '@/composables/getUser'
import NavBar from '../components/NavBar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const router = useRouter()
const { user } = getUser()

watch(user, () => {
  if (!user.value) {
    router.push({ name: 'WelcomeView' })
  }
})
</script>

<template>
  <div class="container">
    <NavBar />
    <NewChatForm />
  </div>
</template>
