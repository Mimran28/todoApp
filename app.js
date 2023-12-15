import {db,collection,addDoc,setDoc,doc,deleteDoc,getDocs,updateDoc } from "./firebase.js"

let btnAdd = document.querySelector('#btn-add')
let input = document.querySelector('#input')
let todoContianer = document.querySelector('#todo-contianer')
btnAdd.addEventListener('click',async function(){
    if(input.value){
        const newCityRef = doc(collection(db, "todolist"));
        await setDoc(newCityRef,{
            todo:input.value,
            uid:newCityRef.id
        });
        showTodo(input.value,newCityRef.id)
    }
  input.value =""
    
})
const getTodo =async ()=>{
    const querySnapshot = await getDocs(collection(db, "todolist"));
    querySnapshot.forEach((doc) => {
      showTodo(doc.data().todo,doc.id)
    });
}
window.addEventListener('load',getTodo)

const showTodo =(val,id)=>{
    todoContianer.innerHTML += `<div id=${id} class="flex justify-between w-full rounded-md bg-red-200 my-2 p-7 box-border doc">
    <h1 class="text-2xl font-semibold">${val}</h1>
    <div class="w-1/5 flex justify-around text-2xl">
        <i class="fa-solid fa-pen-to-square"  style="cursor:pointer" id="update"></i>
        <i class="fa-solid fa-trash" style="color: #e10e43; cursor:pointer" id="delete"></i>
    </div>`
    let newDoc = document.querySelectorAll('#update')
    newDoc.forEach(val =>{
        val.addEventListener('click',updateTodo)
    })
}

const updateTodo =()=>{
    console.log("update");
//     let toUpdate=document.querySelector('.doc')
//     console.log(toUpdate.id);
//     const docRef = doc(db, "todolist", toUpdate.id);
// await updateDoc(docRef,{
//     todo: 'new word'
// });
// console.log('added');
}

const delTodo = async(id)=>{
    await deleteDoc(doc(db, "todolist", id));
}