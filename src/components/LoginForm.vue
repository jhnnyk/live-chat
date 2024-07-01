<script setup>
import useLogin from '@/composables/useLogin'

const email = defineModel('email')
const password = defineModel('password')
const emit = defineEmits(['login'])

const { error, login } = useLogin()

const handleSubmit = async () => {
  await login(email.value, password.value)
  if (!error.value) {
    emit('login')
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>
