const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');
const links = document.querySelectorAll('#menu a');
const darkButton = document.querySelector('#darkButton');
const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');
const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link1');


menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
  menuButtonSpans.forEach((span) => {
    span.classList.toggle('animado');
  });
});


links.forEach((link)=> {
  link.addEventListener('click',()=>{
    menuItems.classList.add('hidden');
    menuButtonSpans.forEach((span)=>{
      span.classList.remove('animado');
    }); 
  });  
});


//cierra cuando maximizo 

window.onresize = function () {
  let w = window.outerWidth;
  if(w>768){
    menuItems.classList.add('hidden');
    menuButtonSpans.forEach((span)=>{
      span.classList.remove('animado');
    });
  }  
};


/**DARK MODE*/

darkButton.addEventListener('click', function () {
  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});


//Job Section

jobSection.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    articles.forEach((article) => {
      article.classList.add('hidden');
    });
    const element = document.getElementById(id);
    element.classList.remove('hidden');
  }
});


jobLinks.forEach((link) => {
  link.addEventListener('click', () => {
    firstLink.classList.remove(
      'border-sky-500',
      'bg-white',
      'dark:bg-slate-700'
    );
  });
});