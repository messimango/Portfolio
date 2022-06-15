const projects = [
    {
        id: 1,
        name: 'Expense Tracker',
        image: './images/momoHut.PNG',
        link: 'https://silly-smakager-70077e.netlify.app',
        description: 'MERN app to track your expenses',
    },
    {
        id: 2,
        name: 'Momo Hut',
        image: './images/momoHut.PNG',
        link: 'https://rawcdn.githack.com/messimango/MomoHut/1bf8064120ae48703183738a01983befdbb8ef04/MomoHut.html',
        description: 'Resturant website with an interactive menu with a custom API. A reservation system that sends emails using backend code. A checkout system and dilevery fee calculator based on distance.',
    },

    {
        id: 3,
        name: 'Cottage',
        image: './images/cottage.png',
        link: 'https://github.com/messimango/cottage',
        description: 'A website for private owners to rent out their cottage. A booking system with backend that sends email and confirmation to owners. ',
    },

    {
        id: 4,
        name: 'Game Website',
        image: './images/game.png',
        link: 'https://rawcdn.githack.com/messimango/Game-website/fc573d86ad6075b49b40a97878e2f9637bdcf797/home.html',
        description: 'A game website with many games I created. The games include Momo clicker a idle clicker game as well as classics like Tetris, Pac-Man and Tic-Tac-Toe.',
    },

    {
        id: 5,
        name: 'Fan Wiki Website',
        image: './images/straw.png',
        link: 'https://rawcdn.githack.com/messimango/StrawHatPirates/129075a84fd3b3d0ee2357bb0ba132b92c74ef88/strawhats.html',
        description: 'A fan wiki website with a countdown to the release of the next chapter.',
    },
];
const projectContainer = document.querySelector('.projects');

function displayProjects(projectsProject) {
    let displayProjects = projectsProject.map(function (project) {
        return `<div class="project">
        <a href="${project.link}" target="_blank"><img src="${project.image}" alt="${project.name}"></a>
        <h2 class="name">${project.name}</h2>
        <p class="info">${project.description}</p>
        </div>`;
    });
    
    displayProjects = displayProjects.join('');
    projectContainer.innerHTML = displayProjects;

    // dark mode

    const toggleIcon = document.getElementById('toggle')
    const toggleButton = document.querySelector('.modes')
    const body = document.getElementById('body')
    const nav = document.getElementById('nav')
    const footer = document.getElementById('contact');
    const project = document.querySelectorAll('.project');
    const skills = document.querySelector('.skill-box')
    

    toggleButton.onclick = function() {
        if (toggleIcon.classList.contains("fa-moon-o")) {
            toggleIcon.className = "fa fa-sun-o";
            body.className = 'dark';
            nav.className = 'dark';
            footer.className = 'dark';
            project.forEach(element => {
                element.style.backgroundColor = "grey";
                element.style.color = 'white';
            });
            skills.style.backgroundColor = 'grey';
            skills.style.color = 'white';
            return
        } else if (toggleIcon.classList.contains("fa-sun-o")) {
            toggleIcon.className = "fa fa-moon-o";
            body.className = '';
            nav.className = '';
            footer.className = '';
            project.forEach(element => {
                element.style.backgroundColor = "white";
                element.style.color = 'black';
            });
            skills.style.backgroundColor = 'white';
            skills.style.color = 'black';
            return
        }
    }
}

window.addEventListener("DOMContentLoaded", function() {
    displayProjects(projects);
});



// Pronounce name

var sound = new Audio('umang.mp3');


function playSound() {
    sound.play();
    document.querySelector('.pronounce').classList.remove('hidden')
    setTimeout(function() { document.querySelector('.pronounce').classList.add('hidden'); }, 4000);
}


// scroll button
const nav = document.getElementById('nav')
const scrollButton = document.querySelector('.scrollup')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 0) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

scrollButton.onclick = function() {
    document.documentElement.scrollTop = 0;
}


// toggle menu

const menuToggle = document.querySelector('.toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', function () {
    menuLinks.classList.toggle('show-links');
});

const hyperlinks = document.querySelectorAll(".menu-links li a")

hyperlinks.forEach(element => {
    element.addEventListener('click', function () {
        if (menuLinks.classList.contains('show-links')) {
            menuLinks.classList.remove('show-links');
        }
    })
});


