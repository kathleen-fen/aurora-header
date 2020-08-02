(function(){
    var nav = document.querySelector('.header__menu');
    var hamburger = document.querySelector('.hamburger');
    var menuItem = document.querySelectorAll('.header__menu-item');
    
    
    if(nav) {
            nav.addEventListener('click',function(e) {
            var target = e.target;
            if (!e.target.classList.contains('header__menu-item')) {
                return;
            }
            e.preventDefault();
            kathleenFen.navigation.toggleToActiveLink(target);
            });
    };

    if(hamburger) {
        hamburger.addEventListener('click', function(e) {
            hamburger.classList.toggle('hamburger_active');
            nav.classList.toggle('header__menu_active');
        })
    };
}())