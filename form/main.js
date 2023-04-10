let popButton = document.getElementById('pop-button');
let formOverlay = document.querySelector('.form-overlay');
let mainForm  = document.querySelector('.form-overlay .form');
let formExit  = document.querySelector('.form-header .exit');
let paymentForm = document.querySelector('.payment-form');
let subFormBtn = document.querySelector('.subm-form');
let subPaymentFormBtn = document.querySelector('.sub-payment-form');
let nextFormBtn = document.querySelector('.next-form');
let paymentFormBtn = document.querySelector('.payment-form-btn');


// contorlling the pop-up 

popButton.addEventListener('click', () =>{
    formOverlay.classList.add('active')
    mainForm.classList.add('active')
})

// the diffrent functionality for removing hiding  the form 

formExit.addEventListener('click', () =>{ fadingOut()     })

formOverlay.addEventListener('click', () =>{ fadingOut() })

mainForm.addEventListener('click', (e) =>{ e.stopPropagation()})

  document.addEventListener('keydown', event => {
    if (event.keyCode === 27) {
        fadingOut()
    }
  });

// sliding the payment form up and down 


nextFormBtn.addEventListener('click', (e) =>{
     e.preventDefault();
     const formInputs = document.querySelectorAll('.form-input');
   
    //  checking if the form is empty
     let allInputsFilled = true;

    formInputs.forEach(input => {
    if (input.value.trim() === '') {
        allInputsFilled = false;
    }
    });

    if (allInputsFilled) {
        paymentForm.style.top = '0';;
    } else {
    alert('please fill all the form')
    }
    })

    // submiting the form 
    paymentFormBtn.addEventListener('click', (e) => {
        
        subFormBtn.click();
        subPaymentFormBtn.click();
        e.preventDefault();
    })


// my functions 

function fadingOut() {
        
    mainForm.style.transform = "translateY(-120px)"
           

            setTimeout( () =>{
                formOverlay.classList.remove('active')
                mainForm.classList.remove('active')
                paymentForm.style.top = '100%'
            }
                , 200);

    }
function increment() {
    let num = parseInt(document.getElementById("form-number").textContent);
    num++;
    document.getElementById("form-number").textContent = num;
  }
  
  function decrement() {
    let num = parseInt(document.getElementById("form-number").textContent);
    num--;
    if(num < 0){
       num = 0
    }
    document.getElementById("form-number").textContent = num;
  }
  


