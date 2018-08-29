import api from './api';

const question = document.getElementById('question')


let data = {
    question: null
}

question.addEventListener("change", e => {
    data.question= e.target.value;
    // console.log(data);
});


post_question.addEventListener('click', function(e) {
    e.preventDefault();
    if(data.question) {
        api.post('/questions', data)
        .then(res => res.json())
        .then(data => console.log(data))
    } else {
        console.log('All fields are required')
    }
})