<script setup>
const displayName = defineModel('displayName')
const email = defineModel('email')
const password = defineModel('password')

const handleSubmit = () => {
  console.log(displayName.value, email.value, password.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign up</button>
  </form>
</template>
