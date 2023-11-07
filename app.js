const boy =document.getElementById('boy-img')
const roc =document.getElementById('roc-img')



document.addEventListener('click',()=>{
    if(boy.classList != 'jump'){
        boy.classList.add('jump')
        setTimeout(()=> { 
            boy.classList.remove('jump')
        },1000)
    }
    
   

});


let alive =setInterval(()=>{
    let boy_pos=parseInt(window.getComputedStyle(boy).getPropertyValue('top'));
    let roc_pos=parseInt(window.getComputedStyle(roc).getPropertyValue('left'));
    let score = 0;

   

    if (boy_pos > 290 && roc_pos <40 ){
        alert('game over')
        location.reload()
        play=false

    }

    else{
        score=score+10;
        console.log(score)
        
    }



},2)




