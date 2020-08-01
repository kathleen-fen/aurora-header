(function(){
    var nav = document.querySelector('.header__menu');
    if(nav) {
            nav.addEventListener('click',function(e) {
            var target = e.target;
            if (!e.target.classList.contains('header__menu-item')) {
                return;
            }
            e.preventDefault();
            kathleenFen.navigation.toggleToActiveLink(target);
        });
    }
}())