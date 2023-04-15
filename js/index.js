document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');
    let menuList = document.querySelectorAll('#menu > li');
    let subMenuList =document.querySelectorAll('.sub_menu_box');
    
    for(i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('mouseenter', function() {
            header.style.height = '354px';
            for(i = 0; i < subMenuList.length; i++) {
                subMenuList[i].animate([
                    {
                        opacity: 0,
                    }, {
                        opacity: 1,
                    }
                ], {
                    duration : 700,
                });
            }
        });
        menuList[i].addEventListener('mouseleave', function() {
            header.style.height = 'auto';
            for(i = 0; i < subMenuList.length; i++) {
                subMenuList[i].animate([
                    {
                        opacity: 1,
                    }, {
                        opacity: 0,
                    }
                ], {
                    duration : 700,
                });
            }
        });
    }

}); // end