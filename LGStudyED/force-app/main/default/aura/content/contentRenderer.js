({

    render: function(component, helper) {
        var render = this.superRender();
        
        // var slideLeft = component.get("v.slideLeft");
        // var slide = component.find('slideAura').getElement();
        // var leftCmp = component.find("leftButton").getElement();
        // var rightCmp = component.find("rightButton").getElement();
        
        // var slideMove = (-1336/3 - 24);

        // var slideIndex = 0;
        // var slideAllCount = component.get("v.imageSlides").length;
        // var defaultLeft = slideMove * 3
        
        // for (var i = 0; i < slideAllCount/2; i++) {
        //     var cloneSlide = component.find('imgCard')[i].getElement().cloneNode(true);
        //     slide.appendChild(cloneSlide)
        // }

        // for (var i = 3; i < slideAllCount; i++) {
        //     var cloneSlide = component.find('imgCard')[i].getElement().cloneNode(true);
        //     slide.insertBefore(cloneSlide, component.find('imgCard')[0].getElement())
        // }

        // console.log(component.find('imgCard')[0].getElement(), " :: 0")

        // slide.style.left = defaultLeft + 'px';

        // window.setInterval(() => {
        //     slideIndex += 1;
        //     slide.style.transition = 'all 0.3s ease-in-out';
        //     slideLeft = slideMove * slideIndex;
        //     component.set("v.slideLeft", slideLeft)
        //     slide.style.left = defaultLeft + slideLeft + "px";
        //     if (slideIndex == slideAllCount) {
        //         setTimeout(function() {
        //             slide.style.left = slideMove * 3 + 'px';
        //             slide.style.transition = 'none';
        //             slideIndex = 0;
        //        }, 300)
        //     }
        // }, 2000);

        // leftCmp.addEventListener('click', function() {
        //     slideIndex -= 1;
        //     slide.style.transition = 'all 0.3s ease-in-out';
        //     slideLeft = slideMove * slideIndex;
        //     component.set("v.slideLeft", slideLeft)
        //     slide.style.left = defaultLeft + slideLeft + "px";
        //     if (slideIndex == -slideAllCount/2) {
        //         setTimeout(function() {
        //             slide.style.left = slideMove * 6 + 'px';
        //             slide.style.transition = 'none';
        //             slideIndex = 3;
        //         }, 300)
        //     }
        // })

        // rightCmp.addEventListener('click', function() {
        //     slideIndex += 1;
        //     slide.style.transition = 'all 0.3s ease-in-out';
        //     slideLeft = slideMove * slideIndex;
        //     component.set("v.slideLeft", slideLeft)
        //     slide.style.left = defaultLeft + slideLeft + "px";
        //     if (slideIndex == slideAllCount) {
        //         setTimeout(function() {
        //             slide.style.left = slideMove * 3 + 'px';
        //             slide.style.transition = 'none';
        //             slideIndex = 0;
        //        }, 300)
        //     }
        // })

        return render;
    },
    afterRender: function(component, helper) {
        window.addEventListener('scroll', function() {
            var scroll = window.scrollY;
            helper.fixedHeader(component, scroll)
        });
    }

})