// User Sign Up
const signup = document.getElementById('signup')
console.log(signup)

signup.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked')
})

// User Sign In
const signin = document.getElementById('signin')
console.log(signin)

signin.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked')
})

const post_question = document.getElementById('post_question')
console.log(post_question)

// User can post a question
post_question.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked')
})

// function signup(form){
//     fetch('http://127.0.0.1:5000/api/v2/auth/signup', {
//         method:'POST',
//         body:JSON.stringify(toJSON(form)),
//         headers: {
//             'Content-Type': "application/json"
//         }
//     })
//     .then(response => response.json())
//     .catch(error => console.error('Error my ass '+ error))
//     .then(data => {
//         if(data.message !== "New user registered!"){
//             let err = document.getElementById('err-message')
//             err.style.display = "block"
//             err.innerHTML = data.message
//         }else{
//             signin(form);
//             localStorage.setItem('success', 'Successfully registered')
//             location.replace('/sightmlnin.html')
//         }
//     })
//     return false;
// }

// User Sign In method
// function signin(form, e){
//     e.preventDefault()
//     console.log(JSON.stringify(toJSON(form)))
    // fetch('http://127.0.0.1:5000/api/v2/auth/signin', {
    //     method: 'POST',
    //     body: JSON.stringify(toJSON(form)),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then(response => response.json())
    // .catch(error => console.error('Error '+ error))
    // .then(data => {
    //     if(data.message !== "Logged in successfully!"){
    //         let err = document.getElementById('err-message')
    //         err.style.display = "block"
    //         err.innerHTML = data.message
    //     }else{
    //         setItems(data.token, data.email.email);
    //     }
    // })
    // return false;
// }

function toJSON(form) {
    let formData = new FormData(form);
    let object = {};

    formData.forEach(function (value, key) {
        object[key] = value;
    });

    return object;
}

//return error message response
function response(){
	if(!response.ok){
		throw new Error("Please enter valid information..")
	}
	return response
}

function setItems(token, email){	
	localStorage.setItem('token', token);
	localStorage.setItem('email', email);	
}

function getItems(){
	let token = localStorage.getItem('token')
	let email = localStorage.getItem('email')
	return {
		'token': token,
		'email': email
	}
}
