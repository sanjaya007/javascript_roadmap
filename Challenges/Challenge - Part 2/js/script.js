// Challenge 1: Create Hex COlor code -----------------------------------------------------------------------------

const createHex = document.querySelector("#createHex");
const hex = document.querySelector("#hex");
const hexLetter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const main1 = document.querySelector(".main-1");

createHex.addEventListener("click", getHex);

function getHex() {
  let hexStart = "#";

  for (let i = 0; i < 6; i++) {
    let randomHex = Math.floor(Math.random() * hexLetter.length);
    hexStart += hexLetter[randomHex];

    hex.innerHTML = hexStart;

    main1.style.backgroundColor = hexStart;
  }
}

// Challenge 2 : Counter ------------------------------------------------------------------------------------------

const value = document.querySelector("#countValue");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let target = e.target.classList;

    if (target.contains("decrease")) {
      count--;
    } else if (target.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    }

    if (count > 0) {
      value.style.color = "green";
    }

    if (count == 0) {
      value.style.color = "black";
    }
    value.innerHTML = count;
  });
});

// Challenge 3: Reviews ---------------------------------------------------------------------------------------------

const reviews = [
  {
    id: 1,
    name: "sanjaya paudel",
    job: "web developer",
    img: "images/review/sanjaya.jpeg",
    desc:
      "'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.'",
  },

  {
    id: 2,
    name: "elisha paudel",
    job: "dancer",
    img: "images/review/elisha.jpg",
    desc:
      "'Dancers don’t need wings to fly. I do not try to dance better than anyone else. I only try to dance better than myself. I dance because there’s no greater feeling in the world than moving a piece of music and letting the rest of the world disappear.'",
  },

  {
    id: 3,
    name: "kushal neupane",
    job: "music composer",
    img: "images/review/kushal.jpg",
    desc:
      "'Music is at once the product of feeling and knowledge, for it requires from its disciples, composers and performers alike, not only talent and enthusiasm, but also that knowledge and perception which are the result of protracted study and reflection.'",
  },

  {
    id: 4,
    name: "sakar regmi",
    job: "web designer",
    img: "images/review/sakar.jpg",
    desc:
      "'The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design.'",
  },

  {
    id: 5,
    name: "sara jones",
    job: "ux designer",
    img: "images/review/sara.jpeg",
    desc:
      "'Good UX design is all about putting the user first. Any aspect of a website, app or software that doesn’t consider the user’s needs is ultimately doomed to fail.'",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// intial person

let currentItem = 0;

//load windows with initial person

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//Function to show persoon

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.desc;
}

//show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show previous person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show randomly

randomBtn.addEventListener("click", function () {
  let randomPerson = Math.floor(Math.random() * reviews.length);
  showPerson(randomPerson);
});

// Challenge 4: Toggle NavBar-------------------------------------------------------------------------------------------------------------------

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

//side bar

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

window.addEventListener("DOMContentLoaded", function () {
  sidebar.classList.add("show-sidebar");
});

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// Challenge 5: Questions and Answers-----------------------------------------------------------------------------------------------

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// Challenge 6: Tabs-----------------------------------------------------------------------------------------------------------------

const tabBtn = document.querySelectorAll(".tab-btn");
const aboutDesc = document.querySelector(".aboutDesc");
const articles = document.querySelectorAll(".content");

aboutDesc.addEventListener("click", function (e) {
  const btnId = e.target.dataset.id;

  if (btnId) {
    tabBtn.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(btnId);
    element.classList.add("active");
  }
});

// Challenge 7: Bulb -----------------------------------------------------------------------------------------------------------------------

const switchBtn = document.querySelectorAll(".switch a");
const bulbImg = document.querySelector(".bulb-container img");

const toggleBulb = (e) => {
  e.preventDefault();
  let target = e.target;
  console.log(target.classList.contains("switch-on"));
  if (target.classList.contains("switch-on")) {
    const nonTarget = target.parentNode.children[1];
    bulbImg.src = "./images/bulbon.png";
    target.classList.add("green");
    nonTarget.classList.remove("red");
  } else {
    const nonTarget = target.parentNode.children[0];
    bulbImg.src = "./images/bulboff.png";
    target.classList.add("red");
    nonTarget.classList.remove("green");
  }
};

switchBtn.forEach((btn) => {
  btn.addEventListener("click", toggleBulb);
});

// Challenge 8: Thermometer ------------------------------------------------------------------------------------------------------------

const animateThermo = () => {
  const thermometer = document.querySelector(".thermo span");
  thermometer.innerHTML = "&#xf2cb";

  setTimeout(() => {
    thermometer.innerHTML = "&#xf2ca";
    thermometer.style.color = "rgb(185, 185, 131)";
  }, 1000);

  setTimeout(() => {
    thermometer.innerHTML = "&#xf2c9";
    thermometer.style.color = "yellow";
  }, 2000);

  setTimeout(() => {
    thermometer.innerHTML = "&#xf2c8";
    thermometer.style.color = "orange";
  }, 3000);

  setTimeout(() => {
    thermometer.innerHTML = "&#xf2c7";
    thermometer.style.color = "red";
  }, 4000);
};

animateThermo();

setInterval(animateThermo, 5000);

//Challenge 9: Keyboard Listener--------------------------------------------------------------------------------------------------------------

const keyBtn = document.querySelectorAll(".key-box button");
const keySpan = document.querySelector(".key-span");

keyBtn.forEach((btn) => {
  const keyText = btn.innerText.toLowerCase();
  btn.setAttribute("id", keyText);

  if (keyText === "space") {
    btn.setAttribute("id", " ");
  }
});

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  keyBtn.forEach((btn) => {
    if (btn.id === e.key) {
      btn.classList.add("press");
      keySpan.innerText += e.key;
      if (btn.id === " ") {
        keySpan.innerText += "-";
      }
    }
  });
});

window.addEventListener("keyup", function () {
  keyBtn.forEach((btn) => {
    btn.classList.remove("press");
  });
});

//Challenge 10: Counter banner----------------------------------------------------------------------------------------------------------------

const counterBanner = () => {
  const counters = document.querySelectorAll(".counter-banner .counter");

  counters.forEach((counter) => {
    counter.innerHTML = 0;

    const finalCounter = () => {
      const target = +counter.getAttribute("data-target");
      const start = Number(counter.innerHTML);

      const increase = target / 100;

      if (start < target) {
        if (start === target) {
          clearTimeout(timeOut);
        }
        counter.innerHTML = `${start + increase}`;
        setTimeout(finalCounter, 20);
      } else {
        counter.innerHTML = target;
      }
    };

    finalCounter();
  });
};

counterBanner();
