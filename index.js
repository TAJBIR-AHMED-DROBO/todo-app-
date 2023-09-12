// This is a comment
const form = document.querySelector("form");
const card = document.querySelector(".card");
const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("#list");
const message =document.querySelector(".mes");





const tm=(value,status)=>{

  message.innerHTML=`todo is ${value}` ;
      message.classList.add(`${status}`);      
setTimeout(()=>{

message.innerHTML="";
message.classList.remove(status);

},300);
}


//adding todo in local storage
const too = ()=>{

return  localStorage.getItem("mytodos") ? 
JSON.parse(localStorage.getItem("mytodos")) :[];
 



}
// This is another comment
const createTodo = (value, id) => {
  const li = document.createElement("li");
  li.id = id;
  li.classList.add("list");
  li.innerHTML = `
    <span>${value}</span>
    <span><button class="but" id="delete"><i class="fa-solid fa-trash"></i></button></span>
  `;
  ul.appendChild(li);

  const del = li.querySelector("#delete");
  del.addEventListener("click",(e)=>{

 const vo=e.target.parentElement.parentElement.parentElement;
ul.removeChild(vo);
tm("deleted", "danger")
 
let toso =too(); 

 let tosos =toso.filter((res)=>res.todoId!==vo.id);

 localStorage.setItem("mytodos",JSON.stringify(tosos));

  })
}

// And here's another comment
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  const todoId = Date.now().toString();
  
  createTodo(value, todoId);
  tm("added","success");

 const toso=too();

toso.push({todoId,value});
localStorage.setItem("mytodos",JSON.stringify(toso));


input.value = "";




 
});
window.addEventListener("DOMContentLoaded", ct)


function ct(){
  const toso=too();
toso.map((res)=>createTodo(res.value,res.todoId));


}