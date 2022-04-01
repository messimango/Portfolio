const projects = [
    {
        id: 1,
        name: 'Momo Hut',
        image: './images/momoHut.PNG',
        link: '',
        description: 'Resturant website with an interactive menu, and a fully functional checkout.',
    },

    {
        id: 2,
        name: 'Cottage',
        image: './images/cottage.png',
        link: '',
        description: 'A website for private owners to rent out their cottage.',
    },

    {
        id: 3,
        name: 'Game Website',
        image: './images/game.png',
        link: '',
        description: 'A game website with many games I created. The games include Momo clicker a idle clicker game as well as classics like Tetris, Pac-Man and Tic-Tac-Toe.',
    },

    {
        id: 4,
        name: 'Fan Wiki Website',
        image: './images/straw.png',
        link: 'https://rawcdn.githack.com/messimango/StrawHatPirates/129075a84fd3b3d0ee2357bb0ba132b92c74ef88/strawhats.html',
        description: 'A fan wiki website with an interactive menu and a countdown to the release of the next chapter',
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
    const skills = document.querySelector('.skills-container')
    

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

const scrollButton = document.querySelector('.scrollup')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

scrollButton.onclick = function() {
    document.documentElement.scrollTop = 0;
}


