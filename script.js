document.getElementById('surpriseBtn').addEventListener('click', function() {
    var surpriseMessage = document.getElementById('surpriseMessage');
    var button = document.getElementById('surpriseBtn');
    var container = document.querySelector('.container');
    
    if (surpriseMessage.classList.contains('hidden')) {
        surpriseMessage.classList.remove('hidden');
        void surpriseMessage.offsetWidth;
        surpriseMessage.classList.add('show');
        button.textContent = 'Close this uppp';
        container.classList.add('animate-show');
        container.classList.remove('animate-hide');
    } else {
        surpriseMessage.classList.remove('show');
        surpriseMessage.classList.add('hide');
        setTimeout(function() {
            surpriseMessage.classList.add('hidden');
            surpriseMessage.classList.remove('hide');
        }, 600); // Matches the CSS transition duration
        button.textContent = 'Click hereee *';
        container.classList.add('animate-hide');
        container.classList.remove('animate-show');
    }
});

document.getElementById('questionBtn').addEventListener('click', function() {
    var questionBox = document.getElementById('questionBox');
    var questionBtn = document.getElementById('questionBtn');

    if (questionBox.style.display === 'none' || questionBox.style.display === '') {
        questionBox.style.display = 'flex';
        questionBox.classList.add('show');
        questionBtn.style.display = 'none';
    } else {
        questionBox.classList.remove('show');
        setTimeout(function() {
            questionBox.style.display = 'none';
        }, 600); // Matches the CSS transition duration
        questionBtn.style.display = 'inline-block';
    }
});

document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Yesssssssss!!!🥹, I love u so muchhhhhh❤️');
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('It says "yes" right?😭');
});
