// CLOCK

    function showTime(){
         
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let formatHours = convertFormat(hours);

        hours = checkTime(hours);

        hours = addZero(hours);
        minutes = addZero(minutes);
        seconds = addZero(seconds);

        document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + formatHours;

    }

    function convertFormat(time){
        let format = 'AM';

        if (time >= 12){
            format = 'PM';
        }
        return format;
    }

    function checkTime(time){
        if(time > 12){
            time = time -12;
        }

        if (time === 0){
            time = 12;
        }
        return time;
    }

    function addZero(time){
        if (time < 10)
        {
            time = "0" + time;
        }
        return time;
    }

    setInterval(showTime, 1000);


    

// Challenge - 1 --> Age In Days

    function cal(){
        var age = prompt('What is your birth year?');
        var total = 2020 - age;
        var result = total * 365;
        var h8 = document.createElement('h8');
        var textAnswer = document.createTextNode("You are " + result + " days old");
        h8.setAttribute('id', 'answer');
        h8.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h8);

    }

    function reset(){
        document.getElementById('answer').remove();
    }

// Challenge - 2 --> Cat generator

    function genCat(){
        var image = document.createElement('img');
        var div = document.getElementById('flex-cat-gen');
        image.src = "https://gallery.yopriceville.com/var/resizes/Animated-Gif-Images/Animated_Cat_on_PC.gif?m=1369605600";
        div.appendChild(image);
    }

// Challenge - 3 --> RPS

    function rpsGame(yourChoice){
        console.log(yourChoice);
        var humanChoice, botChoice;
        humanChoice = yourChoice.id;

        botChoice = numberToChoice(ranRps());
        console.log("computer choice :" + botChoice);

        result = decideWinner(humanChoice, botChoice);
        console.log(result);
         
        message = finalMessage(result);
        console.log(message);

        rpsFrontEnd(yourChoice.id, botChoice, message);
    }

    function ranRps(){
        return Math.floor(Math.random() * 3);
    }

    function numberToChoice(number){
        return ['rock', 'paper', 'scissor'] [number]; 
    }

    function decideWinner(yourChoice, computerChoice){
        var rpsDatabase = {
            'rock' : {'scissor' : 1, 'rock' : 0.5, 'paper' : 0},
            'paper' : {'rock' : 1, 'paper' : 0.5, 'scissor' : 0},
            'scissor' : {'paper' : 1, 'scissor' : 0.5, 'rock' : 0}
        };

        var yourScore = rpsDatabase[yourChoice][computerChoice];
        var computerScore = rpsDatabase[computerChoice][yourChoice];

        return [yourScore, computerScore];
    }

    function finalMessage([yourScore, computerScore]){
        if (yourScore === 0) {
            return {'message' : 'You Lost!', 'color' : 'red'};
        }else if (yourScore === 0.5) {
            return {'message' : 'You Tied!', 'color' : 'yellow'};
        } else {
            return {'message' : 'You Won!', 'color' : 'green'};
        }
    }

    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
        var imageDatabase = {
            'rock' : document.getElementById('rock').src,
            'paper' : document.getElementById('paper').src,
            'scissor' : document.getElementById('scissor').src
        }

        // lets remove all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        var humanDiv = document.createElement('div');
        var messageDiv = document.createElement('div');
        var botDiv = document.createElement('div');

        humanDiv.innerHTML = "<img src =' " + imageDatabase[humanImageChoice] + "' style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
        messageDiv.innerHTML = "<h1 style = 'color : " + finalMessage['color'] + "; font-size : 60px; padding : 30px; '>" + finalMessage['message'] + "</h1>"; 
        botDiv.innerHTML = "<img src =' " + imageDatabase[botImageChoice] + "' style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);

    }

//Challenge 4: Change the colors of all button

        var all_buttons = document.getElementsByTagName('button');
        
        var copyAllButtons = [];
        for (let i = 0; i < all_buttons.length; i++){
            copyAllButtons.push(all_buttons[i].classList[1]);
        }

        function buttonColorChange(buttonThingy){
            if (buttonThingy.value === 'red') {
                buttonRed();
            } else if (buttonThingy.value === 'green') {
                buttonGreen();
            } else if (buttonThingy.value === 'reset'){
                buttonReset();
            } else if (buttonThingy.value === 'random'){
                randomColors();
            }
        }

        function buttonRed(){
            for (let i = 0; i < all_buttons.length; i++){
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add('btn-danger');
            }
        }

        function buttonGreen(){
            for (let i = 0; i < all_buttons.length; i++){
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                console.log(all_buttons[i]);
                all_buttons[i].classList.add('btn-success');
            }

        }
        
        function buttonReset(){
            for (let i = 0; i < all_buttons.length; i++){
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add(copyAllButtons[i]);
            }
        }

        function randomColors(){
            var choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success']

            for (let i = 0; i < all_buttons.length; i++){
                var randomNumber = Math.floor(Math.random() * 4);
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add(choices[randomNumber]);
            }
        }


// Challenge 5 : Calculete +-/*

        function calculate(){
            var num1 = parseFloat(document.getElementById('fnumber').value);
            var num2 = parseFloat(document.getElementById('snumber').value);

            var choose = document.getElementById('operations').value;

          

            if (choose === 'add')
            {
                calAdd(num1, num2);
                
            }

            if (choose === 'substract')
            {
                calSubstract(num1, num2);
                
            }

            if (choose === 'divide')
            {
                calDivide(num1, num2);
                
            }

            if (choose === 'multiply')
            {
                calMultiply(num1, num2);
                
            }
        }

        function calAdd(a, b){
            var result = a + b;
            document.getElementById('flex-cal-result').innerHTML =  "Your answer is" + "'" + result + "'" + "!" ;
        }

        function calSubstract(a, b){
            var result = a - b;
            document.getElementById('flex-cal-result').innerHTML =  "Your answer is" + "'" + result + "'" + "!" ;
        }

        function calDivide(a, b){
            var result = a / b;
            document.getElementById('flex-cal-result').innerHTML =  "Your answer is" + "'" + result + "'" + "!" ;
        }

        function calMultiply(a, b){
            var result = a * b;
            document.getElementById('flex-cal-result').innerHTML =  "Your answer is" + "'" + result + "'" + "!" ;
        }

      
// Change Background Color

        const bodyColor = document.querySelector('body');
        const backColors = ['linear-gradient(to right, black, red)', 'linear-gradient(to right, black, #8a89dc)', 'linear-gradient(to right, pink, yellow)', 'linear-gradient(to right, black, white)', 'linear-gradient(to right, green, red)', 'linear-gradient(to right, brown, grey)', 'linear-gradient(to right, blue, grey)'];

        
        function changeBC(){
            var randomBack = Math.floor(Math.random() * 7);
            bodyColor.style.background = backColors[randomBack];

        }

        function resetBack(){
            bodyColor.style.background = 'linear-gradient(to right, #6194c1, #a93434)';

        }

// Challenge 6: Form Validation

        function validation(){
            var name = document.getElementById('name').value;
            var address = document.getElementById('address').value;
            var age = document.getElementById('age').value;
            var email = document.getElementById('email').value;
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var cpassword = document.getElementById('cpassword').value;
            var contact = document.getElementById('contact').value;
//-------------------------------------------------------------------------------------------------------//                
            if (name === ""){
                document.getElementById('spnName').innerHTML = " * * Please fill up the field ! "
                return false;
            }
            if ((name.length <=2) || (name.length > 20)){
                document.getElementById('spnName').innerHTML = " * * The letter should be 2 to 20 !"
                return false;
            }
            if(!isNaN(name)){
                document.getElementById('spnName').innerHTML = " * * Only Characters are allowed!"
                return false;
            }
// -------------------------------------------------------------------------------------------------------//
            if (address === ""){
                document.getElementById('spnAddress').innerHTML = " * * Please fill up the field ! "
                return false;
            }
            
//-------------------------------------------------------------------------------------------------------//
            if (age === ""){
                document.getElementById('spnAge').innerHTML = " * * Please fill up the field ! "
                return false;
            }
            if (age < 20){
                document.getElementById('spnAge').innerHTML = " * * You are child !"
            }
//---------------------------------------------------------------------------------------------------------//
            if (email === ""){
                document.getElementById('spnEmail').innerHTML = " * * Please fill up the field ! "
                return false;
            }
//---------------------------------------------------------------------------------------------------------//
            if (username === ""){
                document.getElementById('spnUsername').innerHTML = " * * Please fill up the field ! "
                return false;
            }

            if (username.length >= 10){
                document.getElementById('spnUsername').innerHTML = " * * Letters should be upto 10 !"
                return false;
            }
//----------------------------------------------------------------------------------------------------------//
            if (password === ""){
                document.getElementById('spnPassword').innerHTML = " * * Please fill up the field ! "
                return false;
            }

            if (cpassword === ""){
                document.getElementById('spnCpassword').innerHTML = " * * Please fill up the field ! "
                return false;
            }

            if (password.length <8){
                document.getElementById('spnPassword').innerHTML = " * * Password must be at least 8 characters !"
                return false;
            }

            if (password != cpassword){
                document.getElementById('spnCpassword').innerHTML = " * * Passwords are not matched ! Try again !"
                return false;
            }
//-----------------------------------------------------------------------------------------------------------//
            if (contact === ""){    
                document.getElementById('spnContact').innerHTML = " * * Please fill up the field ! "
                return false;
            }
            if (contact.length != 10){
                document.getElementById('spnContact').innerHTML = " * * Contact number is of 10 digits !"
                return false;
            }
   
            
        }

// Challenge 7 : Quotes of famous people

        const quotes = [
            {
                name : 'Abraham Lincon',
                quote : 'Character is like a tree and reputation its shadow. The shadow is what we think it is and the tree is the real thing.'
            },

            {
                name : 'William Shakespeare',
                quote : 'Some are born great, some achieve greatness, and some have greatness thrust upon them.'
            },

            {
                name : 'Albert Einstein',
                quote : 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
            },

            {
                name : 'Leonardo Da Vinci',
                quote : 'The painter who draws merely by practice and by eye, without any reason, is like a mirror which copies every thing placed in front of it without being conscious of their existence.'
            },

            {
                name : 'Charles Babbage',
                quote : 'A tool is usually more simple than a machine; it is generally used with the hand, whilst a machine is frequently moved by animal or steam power. '
            },

            {
                name : 'Barack Obama',
                quote : 'Change will not come if we wait for some other person or some other time. We are the ones we have been waiting for. We are the change that we seek.'
            },

            {
                name : 'Queen Elizabeth',
                quote : 'The lessons from the peace process are clear; whatever life throws at us, our individual responses will be all the stronger for working together and sharing the load.'
            },

            {
                name : 'Bob Marley',
                quote : 'She may not be the most popular, or prettiest, but if you love her and she makes you smile... What else matters?'
            },

            {
                name : 'Cristiano Ronaldo',
                quote : 'I am not a perfectionist, but I like to feel that things are done well. More important than that, I feel an endless need to learn, to improve, to evolve, not only to please the coach and the fans, but also to feel satisfied with myself. It is my conviction that here are no limits to learning, and that it can never stop, no matter what our age.'
                
            },

            {
                name : 'Sanjaya Paudel',
                quote : 'All good writing is swimming under the water and holding your breathe.'
            }
        ]

        const quote = document.querySelector('#quote');
        const quoteAuthor = document.querySelector('#quoteAuthor');

        function displayQuote(){

            let randomQuotes = Math.floor(Math.random() * quotes.length);
            quoteAuthor.innerHTML = quotes[randomQuotes].name;
            quote.innerHTML = quotes[randomQuotes].quote;
        }

// Challenge 8 : Instagram Image Slider

        const instagram = document.querySelector('.flex-slider');

        let counter = 0;

        function nextSlide(){
            counter++;
            instagram.animate([{opacity:'0.1'},{opacity:'1'}], {duration:1000, fill:'forwards'});

            if (counter === 21){
                counter = 1;
            }


           instagram.style.backgroundImage = `url(static/slider/insta${counter}.jpg`;

        }

        function previousSlide(){
            counter--;
            instagram.animate([{opacity:'0.1'},{opacity:'1'}], {duration:1000, fill:'backwards'});

            if (counter === -1 ){
                counter = 20;
            }

           instagram.style.backgroundImage = `url(static/slider/insta${counter}.jpg`;

        }

// Challenge 9 : Calculator  

        const btns = document.querySelectorAll('.btn');
        const screen = document.querySelector('.screen')
        
        for (i = 0; i < btns.length; i++){
            btns[i].addEventListener('click', function(){
            let keys = this.getAttribute('data-key');
            screen.value += keys;
            })
        }

        function equals(){

            if (screen.value === '')
            {
                alert('Input is empty');
                return false;
            }
            let value = eval(screen.value);
            screen.value = value;
        }

        function clearScrn(){
            screen.value = '';
        }

// Challenge 10 : Cat walk
        
        const walkingCat = document.querySelector('#walkingCat');
        let walk = 0;

         function catWalk()
        {
            walk+=1;
            walkingCat.style.marginLeft = walk +"px";

            if (walk == 1250){
                walk = 0;
            }
            console.log(walk);



        }

        setInterval(catWalk, 40);




        





       
   