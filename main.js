// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errModal= document.querySelector('div#modal')
const like = document.getElementsByClassName('like')
Array.from(like).forEach(el=>{
  el.addEventListener('click',(e)=>{
    const heart= el.querySelector('span.like-glyph')
    mimicServerCall().then(()=>{
      if (heart.innerText === EMPTY_HEART){
        heart.classList.add('activated-heart')
        heart.innerText= FULL_HEART
      } else{
        heart.classList.remove('activated-heart')
        heart.innerText= EMPTY_HEART
      }
    }).catch(err=>{
      console.log("err",err)
      errModal.querySelector('p#modal-message').innerText= err
      errModal.classList.remove('hidden')
      setTimeout(()=>errModal.classList.add('hidden') , 3000)
    })
    
   
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
