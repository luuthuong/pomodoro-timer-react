import { 
            collection, 
            getDocs, 
            addDoc ,
            doc,
            deleteDoc,
            updateDoc,
            runTransaction,
            getDoc
        } from 'firebase/firestore/lite';

import firebase from './config';

const getData= async(path)=>{
    return await getDocs(collection(firebase.db, path));
}
const addData= async(path,data)=>{
    try{
        await addDoc(collection(firebase.db,path),data)
    }catch (e){
        console.error("Error adding data: " + e);
    }
}

const updateData = async (path,id,data) => {
    const sfDocRef = doc(firebase.db, path, id);
    try {
        await runTransaction(firebase.db, async (transaction) => {
            const sfDoc = await transaction.get(sfDocRef);
            if (!sfDoc.exists()) {
                console.error("No  exists document")
            }
            transaction.update(sfDocRef,  data);
        });
        console.log("Transaction successfully committed!");
    } catch (e) {
        console.error("Transaction failed: ", e);
    }
}

const deleteData= async(path,id)=>{
    await deleteDoc(doc(firebase.db,path,id))
}



const handleFirebase={
    getData,
    addData,
    deleteData,
    updateData
}
export default handleFirebase