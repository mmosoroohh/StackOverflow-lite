import api from './api';

const email = document.getElementById('email')
const password = document.getElementById('password')
const signin = document.getElementById('signin')

let data = {
    email: null,
    password: null
}

email.addEventListener("change", e => {
    data.email= e.target.value;
    // console.log(data);
});

password.addEventListener("change", e => {
    data.password= e.target.value;
    // console.log(data);
});




signin.addEventListener('click', function(e) {
    e.preventDefault();
    if(data.email && data.password) {
        api.post('/auth/signin', data)
        .then(res => res.json())
        .then(data => console.log(data))
    } else {
        console.log('All fields are required')
    }
})


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