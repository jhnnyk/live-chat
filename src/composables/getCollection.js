import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const getCollection = (collectionName) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = collection(projectFirestore, collectionName)
  const q = query(collectionRef, orderBy('createdAt'))

  const unsub = onSnapshot(
    q,
    (snap) => {
      let results = []
      snap.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      documents.value = null
      error.value = 'could not fetch data'
    }
  )

  return { error, documents }
}

export default getCollection
