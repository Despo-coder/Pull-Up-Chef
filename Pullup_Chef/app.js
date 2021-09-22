const hamburger = document.querySelector('#btnHamburger');
hamburger.addEventListener('click', runevent)
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElements = document.querySelectorAll('.has-fade');



function runevent(e){
    console.log('clicked')

if(header.classList.contains('open')){

    header.classList.remove('open')
    fadeElements.forEach(function(iterator){
   iterator.classList.remove('fade-in');
    iterator.classList.add('fade-out');
   });
}else{
header.classList.add('open');
fadeElements.forEach(function(iterator){
iterator.classList.remove('fade-out');
iterator.classList.add('fade-in');
});
}  
 e.preventDefault() ;
}

  
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function(btn){
// btn.addEventListener('click', function(e){
//     const question= e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
// })
// })

const questions = document.querySelectorAll(".questions__question");
console.log(questions);
questions.forEach(function(question_iteraotor){
    console.log(question_iteraotor);
    const btn_selected = question_iteraotor.querySelector('.question-btn');
   console.log(btn_selected);
    btn_selected.addEventListener('click', function(){
 questions.forEach(function(item){
     console.log(item)
            if(item !==question_iteraotor){
                item.classList.remove('show-text')
            }
        })
        
         question_iteraotor.classList.toggle('show-text');
       
       
    })
})
