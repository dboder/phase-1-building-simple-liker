// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};
// Your JavaScript code goes here!


const configurationObject = {
method: "POST",
headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
},
};

function coldHearts(e){
  const heart = e.target;

  console.log(heart.classList);
  mimicServerCall("http://localhost:3000/users", configurationObject)
  .then(function (response) {
      console.log(response,"1");
      heart.innerText = glyphStates[heart.innerText];
      heart.classList.toggle("activated-heart");
      return response;
  })
  .catch(function (error) {
      // alert("Bad things! Ragnarők!");
      const errorAlert = document.getElementById("modal");
      errorAlert.classList.remove("hidden");
      errorAlert.innerText = error
      setTimeout(function() { errorAlert.classList.add("hidden")}, 3000);
      console.log(error,"2");
      // console.log(errorAlert);
});
  
}


const heartObjs = document.getElementsByClassName("like-glyph");
console.log(heartObjs);
console.log(heartObjs[0].parentElement);

for (var i = 0; i < heartObjs.length; i++) {
  heartObjs[i].addEventListener('click', coldHearts);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure =false;// Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
