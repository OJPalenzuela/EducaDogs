import { db } from '../firebase/firebase-config'

export const load = async (uid) => {

    const DogStore = await db.collection(`/Dog`).get()
    const dogsList = [];

    DogStore.forEach(hijo=>{
        dogsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return dogsList
}

