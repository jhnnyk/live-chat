import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const useCollection = (collectionName) => {
  const error = ref(null)

  const addItemtoDB = async (doc) => {
    error.value = null

    try {
      await addDoc(collection(projectFirestore, collectionName), doc)
    } catch (err) {
      console.log(err)
      error.value = 'could not send the message'
    }
  }

  return { error, addItemtoDB }
}

export default useCollection
