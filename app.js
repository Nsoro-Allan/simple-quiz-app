const correctAnswers = {
    answer1: 'true', 
    answer2: 'false',
    answer3: 'false',
    answer4: 'true'
};

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    const answer4 = document.querySelector('input[name="answer4"]:checked');


    // Check answers
    const result1 = answer1 ? (answer1.value === correctAnswers.answer1) : false;
    const result2 = answer2 ? (answer2.value === correctAnswers.answer2) : false;
    const result3 = answer3 ? (answer3.value === correctAnswers.answer3) : false;
    const result4 = answer4 ? (answer4.value === correctAnswers.answer4) : false;

    // Store the form data and results in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('dob', dob);
    localStorage.setItem('answer1', result1 ? 'Correct Answer' : 'Incorrect Answer');
    localStorage.setItem('answer2', result2 ? 'Correct Answer' : 'Incorrect Answer');
    localStorage.setItem('answer3', result3 ? 'Correct Answer' : 'Incorrect Answer');
    localStorage.setItem('answer4', result4 ? 'Correct Answer' : 'Incorrect Answer');


    // Redirect to the results page
    window.location.href = 'results.html';
});