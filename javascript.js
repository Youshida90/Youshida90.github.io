// The query Selector for all the data for the validation form:
const FirstName = document.querySelector('#FirstName');
const LastName = document.querySelector('#LastName');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const confpassword = document.querySelector('#confpass');
document.addEventListener('DOMContentLoaded',function(){
const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    validteInputs();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});
});
// To check if the text fields contains data or not if it contains data then it will move you to the another page else it will give an error
function isFormValid(){
    const inputContainers = form.querySelectorAll('.input');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
};
// Set Error that gives an error message if there is an error
const setError = (element,message) =>{
const inputControl = element.parentElement;
const errordisplay = inputControl.querySelector('.error');
errordisplay.innerText = message;
inputControl.classList.add('error');//add the red color
inputControl.classList.remove('success');
}
// Set Success that gives an correct message if there is no error
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector('.error');
    errordisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    };
    // The email validation to check if the user writes in the email form
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
// This function will tell if the user didnot write any thing or didnot give the write form for a password or an email it will give him an error otherwise it gives correct and it make the user go to another page 
 function validteInputs(){
const FirstNameValue = FirstName.value.trim();
const LastNameValue = LastName.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const confpasswordValue = confpassword.value.trim();
if(FirstNameValue === ''){
setError(FirstName, 'First Name is required');
}else if(FirstNameValue === emailValue){
setError(FirstName,'Please enter your first name');
}else{
setSuccess(FirstName);
}
if(LastNameValue === ''){
    setError(LastName, 'Last Name is required');
    }else if(LastNameValue ===emailValue){
        setError(LastName,'Please enter your last name');
}else{
    setSuccess(LastName);
    }
    if(emailValue === ''){
        setError(email, 'email is required');
        }else if(!isValidEmail(emailValue)){
            setError(email,'Provide a valid email address');
    }else{
        setSuccess(email);
        }
        if(passwordValue === ''){
            setError(password, 'password is required');
            }else if(password.value.length<8){
                setError(password,'Password must be at least 8 character.')
         } else if(!/\d/.test(password.value)){
            setError(password,'Password should contain at least one number')
        } else{
            setSuccess(password);
            }
            if(FirstNameValue === ''){
                setError(confpassword, 'confirm Password is required');
                }else if(confpasswordValue != passwordValue){
                    setError(confpassword,'Password do not match')
            }else{
                setSuccess(confpassword);
                }
            };
// The querySelector for the alert of the living room
const result = document.querySelector('#livingroom');
  result.addEventListener('click', () => {
      alert("Still under construction,you get a bonus if you think of somethig to implement:D");
});
// This function replace the default text with another one when clicking on the specific radio button
function replacetext(){
    document.getElementById('part1').innerHTML = " this option is for the living room";
}
function replacetext1(){
    document.getElementById('part1').innerHTML = " this option is for the bedroom";
    document.getElementById('part1').innerHTML = " this option is for the bedroom";
}
function replacetext2(){
    document.getElementById('part1').innerHTML = " this option is for the kitchen";
}
document.getElementById('livingroom').addEventListener('click',replacetext);
document.getElementById('bedroom').addEventListener('click',replacetext1);
document.getElementById('kitchen').addEventListener('click',replacetext2);
// This function will show and hide the whole text that displays
function hideshowbutton(){
    var hideshowbutton = document.getElementById('part1');
    if(hideshowbutton.style.display==="none"){
        hideshowbutton.style.display = "block";
    }else{
        hideshowbutton.style.display = "none";
    }
};
//Show checkboxes
const bedradio = document.querySelector('input[value="bedroom"]');
bedradio.addEventListener('click', () => {
	if(bedradio.checked) {
		const checkxd = document.getElementById('checkbox');
		if(checkxd.style.display == "none") {
			checkxd.style.display = "block";
		}
	else {
		checkxd.style.display = "none";
	}
	}
})
// To make the checkbox more function when clicking on it gives img(for the bed)
const bedcheckbox = document.querySelector('input[value="bedcheck"]');
const tableElement = document.getElementById('table');
bedcheckbox.addEventListener('change', () => {
	if(bedcheckbox.checked) {
	       tableElement.style.display = "none";
			tableElement.style.display = "block";
		}
		else {
			tableElement.style.display = "none";
		}
	}
)

const bedImage = document.getElementById("bed-img");
bedImage.addEventListener('click', () => {
	if (bedImage.src.endsWith("bed1.png")) {
		bedImage.src = "bed2.png";
	}
	else if (bedImage.src.endsWith("bed2.png")) {
		bedImage.src = "bed3.png";
	}
	else {
		bedImage.src = "bed1.png";
	}
})
// For the dresser
const dressercheckbox = document.querySelector('input[value="dressercheck"]');
const tableElement1 = document.getElementById('table');
dressercheckbox.addEventListener('change', () => {
	if(dressercheckbox.checked) {
		    tableElement1.style.display = "none" 
			tableElement1.style.display = "block";
		}
		else{
			tableElement1.style.display = "none";
		}
	})

const dresserImage = document.getElementById("dresser-img");
dresserImage.addEventListener('click', () => {
	if (dresserImage.src.endsWith("dresser1.png")) {
		dresserImage.src = "dresser2.png";
	}
	else if (dresserImage.src.endsWith("dresser2.png")) {
		dresserImage.src = "dresser3.png";
	}
	else {
		dresserImage.src = "dresser1.png";
	}
})
//For the nightstand
const nightstandcheckbox = document.querySelector('input[value="nightstandcheck"]');
const tableElement2 = document.getElementById('table');
nightstandcheckbox.addEventListener('change', () => {
	if(nightstandcheckbox.checked) {
		    tableElement2.style.display = "none" 
			tableElement2.style.display = "block";
		}
		else {
			tableElement2.style.display = "none";
		}
	})

const nightstandImage = document.getElementById("nightstand-img");
nightstandImage.addEventListener('click', () => {
	if (nightstandImage.src.endsWith("nightstand1.png")) {
		nightstandImage.src = "nightstand2.png";
	}
	else if (nightstandImage.src.endsWith("nightstand2.png")) {
		nightstandImage.src = "nightstand3.png";
	}
	else {
		nightstandImage.src = "nightstand1.png";
	}
})
// For the kitchen
const kitchenradio = document.querySelector('input[value="kitchen"]');
kitchenradio.addEventListener('click', () => {
    const checkxd = document.getElementById('kit1');
	if(kitchenradio.checked) {
		    checkxd.style.display = "none"
			checkxd.style.display = "block";
		}
	else{
		checkxd.style.display = "none";
	}
	})
    // button for the kitchen error
    const button = document.getElementById('kitbutton');
    button.addEventListener('click', () => {
      if (document.getElementById('sl').classList.contains('highlighted')) {
        document.getElementById('sl').classList.remove('highlighted');
        button.innerHTML = 'got trapped';
      } else {
        document.getElementById('sl').classList.add('highlighted');
        button.innerHTML ='<span style = "background-color: red">wrong code heheh</span>';
      }
    });
    


