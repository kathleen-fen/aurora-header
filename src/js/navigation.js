(function() {
    var me = {};
    me.toggleToActiveLink = function(target) {
        var links = document.querySelectorAll('.header__menu-item');
        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('header__menu-item--active')) {
                links[i].classList.remove('header__menu-item--active')
            }
        }
        target.classList.add('header__menu-item--active');
    };
    kathleenFen.navigation = me;
}());