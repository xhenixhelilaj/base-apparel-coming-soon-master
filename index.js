function validation(){
   const form = document.getElementById("form");
   const email = document.getElementById("email").value;
   const text = document.getElementById("text");
   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   if (email.match(pattern)){
       form.classList.add("valid")
       form.classList.remove("invalid")
       text.innerHTML = "Your Email Address is Valid!"
       text.style.color = "#009400"
   }else{
       form.classList.remove("valid")
       form.classList.add("invalid")
       text.innerHTML = "Please Enter Valid Email Address."
       text.style.color = "#F70000"
   }

   if (email == ""){
    form.classList.remove("valid")
    form.classList.remove("invalid")
    text.innerHTML = ""
    text.style.color = "#009400"
   }
}
