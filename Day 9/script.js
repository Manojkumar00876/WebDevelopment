const buttons = document.querySelectorAll(".question-btn")

buttons.forEach(function(btn){
 btn.addEventListener("click",function(e){
   
    const question = e.target.parentElement.parentElement.parentElement.parentElement;
   
        question.classList.toggle("show-text");
    

    
 })
})