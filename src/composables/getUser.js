import { projectAuth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'

const user = ref(projectAuth.currentUser)

onAuthStateChanged(projectAuth, (_user) => {
  console.log('user state change. current user: ', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser
