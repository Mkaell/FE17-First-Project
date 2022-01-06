//hamburger
const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');
    // back = document.querySelector('.back');


menuItem.forEach(item => {
    toggleMenu(item);
});


function checkDisplay() {
    if(window.getComputedStyle(hamburger, null).getPropertyValue("display") == 'block') {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list-active');
        document.body.classList.toggle('overflow');
        // back.classList.toggle('show');
    }
}

function toggleMenu(element){
    element.addEventListener('click', () => {
        checkDisplay();
    });

}
toggleMenu(hamburger);

//tabs
const tabsBtn   = document.querySelectorAll(".feautures__tab");
const tabsItems = document.querySelectorAll(".feautures__content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.feautures__tab').click();


