import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { projectAuth } from '@/firebase/config'
import { ref } from 'vue'

const error = ref(null)

const signup = async (email, password, displayName) => {
  error.value = null

  try {
    const res = await createUserWithEmailAndPassword(projectAuth, email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    await updateProfile(projectAuth.currentUser, { displayName })
    error.value = null
    console.log(res.user)
    return res
  } catch (err) {
    console.log(err.message, displayName)
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
