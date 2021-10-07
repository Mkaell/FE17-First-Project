window.addEventListener('DOMContentLoaded', () => {
    //hamburger
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');
        // back = document.querySelector('.back');


    menuItem.forEach(item => {
        toggleMenu(item);
    });


    function toggleMenu(element){
        element.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list-active');
            document.body.classList.toggle('overflow');
            // back.classList.toggle('show');
        });
    }

    toggleMenu(hamburger);

    //tabs

    function tab () {
        const tabNav = document.querySelectorAll('.feautures__tab'),
            tabContent = document.querySelectorAll('.feautures__content');
        let tabName;
    
        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav);
        });
    
        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }
    
        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                if (item.classList.contains(tabName)) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    
    }
    
    
    tab();


});