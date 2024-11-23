var input = document.getElementById("inp")
var text = document.querySelector("#todo-list")
var todo_arr=[]
function Add() {
    if (input.value =="") {
        alert("please enter your task") 
    }
    else{
        var newEle =document.createElement("li")
        
        todo_arr.push(input.value);
        newEle.innerHTML=`<span class="todo" id="${todo_arr.length-1}">${input.value}</span><i class="fa-solid fa-trash" id="delete"></i> <i class="fa-solid fa-pen-to-square" id="edit"></i>`
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("#delete").addEventListener("click", remove)
        newEle.querySelector("#edit").addEventListener("click", edit)
        function remove() {
            newEle.remove()
        }
        function edit(){
            input.value = newEle.getElementsByClassName("todo")[0].innerText;
            document.getElementById("add-btn").innerHTML= `<button onclick="editItem(${newEle.getElementsByClassName("todo")[0].getAttribute("id")})">Edit</button>`
        }
    

       
    }
}
function editItem(newEle){
    document.getElementById(newEle).innerText=input.value;
    todo_arr[parseInt(newEle)] = input.value;
    input.value ="";
    document.getElementById("add-btn").innerHTML= `<button onclick="Add()">Add</button>`
   
}