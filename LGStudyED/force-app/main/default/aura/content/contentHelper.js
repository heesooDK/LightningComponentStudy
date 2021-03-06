({
    fixedHeader : function(component, scroll) {
        var headerCmp = component.find("secondFixedHeader").getElement();
        var headerAnimation = component.find("fixedHeaderAnimation").getElement();
        
        if (scroll > 564) {
            // console.log(window.pageYOffset, headerCmp.getBoundingClientRect().top , "offsettop");
            var a = window.pageYOffset + headerCmp.getBoundingClientRect().top;
            console.log(window.pageYOffset - 564)
            
            headerAnimation.style.height = 64 - (window.pageYOffset - 564) + "px";
            headerAnimation.style.border = '1px solid #FFF';
            $A.util.addClass(headerCmp, 'slds-is-fixed');
            $A.util.addClass(headerAnimation, 'slds-is-fixed');
            if (scroll > 627) {
                headerAnimation.style.height = 0;
            }
        } else {
            $A.util.removeClass(headerCmp, 'slds-is-fixed');
            $A.util.removeClass(headerAnimation, 'slds-is-fixed');
        }
    },
    setSwiper: function () {
        return new Promise((resolve, reject) => {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: '3',
                spaceBetween: 20,
                loop: true,
                observer: true,
                observeParents: true,
                autoplay: {
                  delay: 2000,
                  disableOnInteraction: false
                },
                navigation: {
                  nextEl: ".right-button",
                  prevEl: ".left-button"
                },
                allowTouchMove: false,
            });

            resolve(swiper)
        })
    }
})