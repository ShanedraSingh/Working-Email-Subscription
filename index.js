  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzDy2PDiPweKJafOCFI7CCLx_qUiLouR3S39xM6j5l5QGYnyXMZLpdrxA6RQKvQAOQJCQ/exec";
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = 'Thank you for Subscription!'
        setTimeout(function(){
        msg.innerHTML = "";
          
        },5000)
        form.reset();

    })
      .catch(error => console.error('Error!', error.message))
  });   