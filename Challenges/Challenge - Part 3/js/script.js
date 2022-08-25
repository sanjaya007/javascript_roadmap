// Challenge 1: Animated Sound Creation

window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ['#60d394','#d36060','#c060d3','#d3d160','#6860d3','#60b2d3'];


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            createBubbles(index);
        });
    });

    const createBubbles = index => {
        const bubble = document.createElement('div');
        const anotherBubble = document.createElement('div');
        visual.appendChild(bubble);
        visual.appendChild(anotherBubble);
        bubble.style.backgroundColor = colors[index];
        anotherBubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 10s ease';
        anotherBubble.style.animation = 'jump 20s ease';

        bubble.addEventListener('animationend', function (){
            visual.removeChild(this);
        }); 
        anotherBubble.addEventListener('animationend', function (){
            visual.removeChild(this);
        }); 
        

    };

    
});

// Challenge 2 is light box library

// Challenge 3: Pop Up Form / Images --------------------------------------------------------------------

    
        
    function createPopUp()
    {
        document.querySelector('.bg-popup').style.display = 'flex';
    }

    function closePopUp(){
        document.querySelector('.bg-popup').style.display = 'none';
    }

// Challenge 4: Validating while typing --------------------------------------------------------------------

    const passwordRequirement = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const form = document.getElementById('loginForm');

    let username = document.getElementById('username');
    let password = document.getElementById('password');

    username.addEventListener('input', validate);
    password.addEventListener('input', validate);

    form.addEventListener('submit', function(v){
        v.preventDefault();
    });

    function validate(v){
        let target = v.target;

        if(target.id == "username"){
            if(target.value.length > 3){
                target.classList.add('valid');
                target.classList.remove('invalid');
            }else{
                target.classList.add('invalid');
                target.classList.remove('valid');
            }
        }

        if(target.id == "password"){
            if(passwordRequirement.test(target.value)){
                target.classList.add('valid');
                target.classList.remove('invalid');
            }else{
                target.classList.add('invalid');
                target.classList.remove('valid');
            }
        }
    }

// CHallenge 5: Drag and Drop ------------------------------------------------------------------------

    const lists = document.querySelectorAll('.list');
    const list_item = document.querySelectorAll('.list-item');

    let draggedItem = null;

    for(let i = 0; i < list_item.length; i++)
    {
        const item = list_item[i];

        item.addEventListener('dragstart', function(){
            draggedItem = item;
            setTimeout(function(){
                item.style.display = 'none';
            }, 0);
        });

        item.addEventListener('dragend', function(){
            setTimeout(function(){
                draggedItem.style.display = 'block';
                draggedItem = null;
            }, 0);
        });

        for(let j = 0; j < lists.length; j++)
        {
        const list = lists[j];

        list.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        list.addEventListener('dragenter', function(e){
            e.preventDefault();
        });

        list.addEventListener('drop', function(){
            this.append(draggedItem);
        })

        }
    }

// Challenge 6: Drop Down NavBar-------------------------------------------------------------------------------------------

    const navbarBtn = document.querySelector('.navbar-btn');
    const navbarLinks = document.querySelector('.navbar-links');

    navbarBtn.addEventListener('click', function(){
        let value = navbarLinks.classList.contains('navbar-collapse');

        if (value){
            navbarLinks.classList.remove('navbar-collapse');
            navbarBtn.classList.remove('change');
        }else{
            navbarLinks.classList.add('navbar-collapse');
            navbarBtn.classList.add('change');
        }

    });

// Challenge 7 : Video Project------------------------------------------------------------------------------------------------

    const videoContainer = document.querySelector('.video-container');
    const switchBtn = document.querySelector('.switch-btn');

    switchBtn.addEventListener('click', function(){
        if(!switchBtn.classList.contains('slide'))
        {
            switchBtn.classList.add('slide');
            videoContainer.pause();
        } else{
            switchBtn.classList.remove('slide');
            videoContainer.play();
        }
    });

// Challenge 8 : Speech Recognition ----------------------------------------------------------------------------------------------

    const speechContainer = document.querySelector('.speechContainer');
    const talk = document.querySelector('.talk');
    const robotAudio = document.querySelector('.robotAudio');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = function(){
        console.log('Hello Robot');        
    }

    recognition.onresult = function(event){
        const currentIndex = event.resultIndex;

        const transcriptMessage = event.results[currentIndex][0].transcript;
        readOutLoud(transcriptMessage);
    }

    var isStarted = false;
    talk.addEventListener('click', function(){
        
        talk.remove();
        if(!isStarted){
            recognition.start();
            isStarted = true;
        }
    }); 

    function openSpeech(Robotmessage){


        const speechDiv = document.createElement('div');
        speechDiv.classList.add('speechContent');

        const message = document.createElement('p');
        message.innerText = Robotmessage;
        message.classList.add('speechMessage');
        speechDiv.appendChild(message);

        speechContainer.appendChild(speechDiv);

        // message.innerText = "";

        robotAudio.play();
    }

    function readOutLoud(readText){
        const speech = new SpeechSynthesisUtterance();
        speech.text = readText;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);

        openSpeech(readText);
    }

// Challenge 9 : Fire Animation -------------------------------------------------------------------------------------------------------------------------------

    const createFire = document.querySelector('.createFire');
    const fireVideo = document.querySelector('.fire-container');
    const fireText = document.querySelector('.fireText');

    const strFireText = fireText.textContent;
    const splitFireText = strFireText.split("");

    fireText.textContent = "";


    for (let i = 0; i < splitFireText.length; i++)
    {
        fireText.innerHTML += "<span>" + splitFireText[i] + "</span>";
    }

    createFire.addEventListener('click', function(){
        createFire.remove();
        fireVideo.play();

    let char = 0;
    let timer = setInterval(onTick, 500);

    function onTick(){
        const span = fireText.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;

        if(char === splitFireText.length)
        {
            fireVideo.pause();
            completeInterval();
            return;
        }
    }

    function completeInterval(){
        clearInterval(timer);
        timer = null;
    }

    });

// Challenge 10: Speed Typing Game------------------------------------------------------------------------------------------------

    const startGame = document.querySelector('.startGame');
    const typingGame = document.querySelector('.typingGame');
    const startAudio = document.querySelector('.startAudio');

    startGame.addEventListener('click', enterIntoGame);

    function enterIntoGame(){

        startAudio.play();
        typingGame.classList.add('openGame');
        startGame.remove();

    const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteInput = document.getElementById('quoteInput');
    const gameTime = document.getElementById('timer');

    quoteInput.addEventListener('input', () => {
        const arrayQuote = quoteDisplay.querySelectorAll('span');
        const arrayValue = quoteInput.value.split('');

        let correct = true;

        arrayQuote.forEach((characterSpan, index) => {
            const character = arrayValue[index];
            if (character == null){
                characterSpan.classList.remove('correct');
                characterSpan.classList.remove('incorrect');
                correct = false;
            }
            else if (character === characterSpan.innerText){
                characterSpan.classList.add('correct');
                characterSpan.classList.remove('incorrect');
            }else{  
                characterSpan.classList.add('incorrect');
                characterSpan.classList.remove('correct');
                correct = false;
            }
        });

        if (correct) renderNewQuote();

    });

    function getRandomQuote() {
        return fetch(RANDOM_QUOTE_API_URL)
            .then(response => response.json())
            .then(data => data.content)
    }

    async function renderNewQuote(){
        const quote = await getRandomQuote();
        quoteDisplay.innerHTML = '';
        quote.split('').forEach(character => {
            const characterSpan = document.createElement('span');
            characterSpan.innerText = character;
            quoteDisplay.appendChild(characterSpan);
        });
        quoteInput.value = null;
        startTimer();
    }

    var timerInterval;
    function startTimer(){
        clearInterval(timerInterval);
        gameTime.innerText = 0; 
        timerInterval = setInterval(() => {
            gameTime.innerText++;
        }, 1000);
    }h

    renderNewQuote();
    }
    

    
    

// Pre-Loader---------------------------------------------------------------------------------------------------------------------

    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', function(){

        preloader.classList.add('hide-preloader');

    });






