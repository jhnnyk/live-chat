<script setup>
const email = defineModel('email')
const password = defineModel('password')

const handleSubmit = () => {
  console.log(email.value, password.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Log in</button>
  </form>
</template>
