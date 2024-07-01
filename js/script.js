function userScroll() {
    const navbar = document.querySelector('.navbar');

    navbar.addEventListener('click', () => {
        navbar.classList.add('change-nav');
        navbar.classList.add('p-3');
    }
)
  
document.querySelectorAll('.navbar-collapse a').forEach(function(element){
    element.addEventListener('click', function(){
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('change-nav');
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('change-nav');
            navbar.classList.remove('navbar-sticky');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);