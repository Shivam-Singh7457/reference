const form= document.getElementById("regForm")

if(form){

form.addEventListener("submit",async function(e){

e.preventDefault()

const data={
id:document.getElementById("id").value,
name:document.getElementById("name").value,
email:document.getElementById("email").value,
mobile:document.getElementById("mobile").value,
event:document.getElementById("event").value
}

await fetch("/api/register",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

alert("Registration Successful")

form.reset()

})

}

async function loadParticipants(){

const res=await fetch("/api/participants")

const data=await res.json()

const list=document.getElementById("list")

list.innerHTML=""

data.forEach(p=>{

const li=document.createElement("li")

li.textContent=`${p.name} - ${p.event}`

list.appendChild(li)

})

}