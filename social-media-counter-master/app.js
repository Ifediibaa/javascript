/**
 * SocialMedia Word Counter App
 * The App is to count how many words the user has typed based on the 
 * Social Media handle they have selected. And when they reach the limit
 * of the SM handle they receive a message You have reached your maximum word count.
 * 
 * Bellow are the word counts for each social media
 * Twitter = 280
 * Facebook = 63206
 * Instagram = 2200
 * Others = 8000. 
 * 
 * When a user selects a SocialMedia Handle, Words in the html page
 * changes from 0 to the desired number of words. E.g if twitter is selected, word changes form 0 280.centered
 * 
 * When a user begins to type in the textarea, Word Count increases while word decreases.
 * 
 * Once word decreases to 0. The user is unable to type any further characters and gets the
 * congratulatory message. 
 * 
 * NOTE
 * 1. Your code must be properly commented.
 * 2. Use Es6 syntax wherever possible.  
 */

//hold them in variables

let num1=document.querySelector('#num1');
 let num = document.querySelector('#num');
let media = document.form.media; // to hold all the radio types in variables
 let text = document.getElementById('text');
 let message = document.getElementById('message');
 let stop;


 for(let i = 0;i<media.length;i++){
   media[i].addEventListener('click',()=>{

    if(media[0].checked === true){
      stop = 280
     num.innerHTML=stop
     num1.innerHTML=0
  }
   else if(media [1].checked === true){
       stop = 63206
       num.innerHTML=stop
       num1.innerHTML=0
   } 
   else if(media [2].checked === true){
     stop = 2200
     num.innerHTML=stop
     num1.innerHTML=0
   }
   else if(media [3].checked === true){
     stop = 8000
     num.innerHTML=stop
     num1.innerHTML=0
   }
   else{}
  })      
 }

 //you add an eventlistenr to listen to the function (keyup)
 text.addEventListener( 'keyup',function () {
  if(media[0].checked|| media[1].checked ||media[2].checked|| media [3].checked){
      num.innerHTML= stop-text.value.length
      num1.innerHTML= text.value.length
  }else{}  

  if (text.value.length === stop){
    message.innerHTML='You have reached your maximum word count.'
    text.setAttribute('disabled',true) // this is to stop the count at zero

  }
} ) 