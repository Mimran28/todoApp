import {db,collection,onSnapshot,query,orderBy,setDoc,doc,deleteDoc,serverTimestamp,updateDoc } from "./firebase.js"

let btnAdd = document.querySelector('#btn-add')
let input = document.querySelector('#input')
let todoContianer = document.querySelector('#todo-contianer')
btnAdd.addEventListener('click',async function(){
    let saveVal = input.value;
    input.value ="";
    if(saveVal){
        const newCityRef = doc(collection(db, "todolist"));
        await setDoc(newCityRef,{
            todo:saveVal,
            timestamp:serverTimestamp()
        });
       
    }
 

    
})
const getTodo =async ()=>{
    const ref = query(collection(db, "todolist"),orderBy('timestamp','desc'));
const unsubscribe = onSnapshot(ref, (querySnapshot) => {
    todoContianer.innerHTML=""
  querySnapshot.forEach((doc) => {
    
    showTodo(doc.data().todo,doc.id)
  });
  
});

    // const querySnapshot = await getDocs(collection(db, "todolist"));
    // querySnapshot.forEach((doc) => {
    //   showTodo(doc.data().todo,doc.id)
    // });
}
getTodo();


const showTodo =(val,id)=>{
    todoContianer.innerHTML += `<div id=${id} class="flex justify-between w-full rounded-md bg-red-200 my-2 p-7 box-border doc">
    <h1 class="text-2xl font-semibold" id="heading">${val}</h1>
    <div class="w-1/5 flex justify-around text-2xl">
        <i class="fa-solid fa-pen-to-square"  style="cursor:pointer" id="update"></i>
        <i class="fa-solid fa-trash" style="color: #e10e43; cursor:pointer" id="delete"></i>
    </div>
    </div>`
    let newDoc = document.querySelectorAll('#update')
    let delDoc = document.querySelectorAll('#delete')
    newDoc.forEach(val =>{
        val.addEventListener('click',e=>{
            updateTodo(e)
        })
    })
    delDoc.forEach(val =>{
        val.addEventListener('click',e=>{
            delTodo(e)
        })
    })
}

const updateTodo =async (e)=>{
    let headingData = e.target.parentElement.previousElementSibling;
    console.log(headingData.innerText);
    let prom = prompt("Enter value",headingData.innerText);
    let dataId= e.target.parentElement.parentElement.getAttribute('id')
    const docRef = doc(db, "todolist", dataId);
  
if(prom){
    await updateDoc(docRef,{
    todo: prom
});

}
}

const delTodo = async(e)=>{
    let dataId= e.target.parentElement.parentElement.getAttribute('id')
    await deleteDoc(doc(db, "todolist", dataId));
}