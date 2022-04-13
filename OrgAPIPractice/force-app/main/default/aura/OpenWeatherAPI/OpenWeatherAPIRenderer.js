({
    afterRender: function(component, helper) {
        this.superAfterRender();
        var data = component.get("v.weatherDatta")
        // if (data) {
            console.log("여기를 안오는거 같은데")
            let scrollSlider = component.find("weatherCmp").getElement();
            let isMove;
            let startX;
            let scrollLeft;


            scrollSlider.addEventListener('mousedown', function(e) {
                isMove = true;
                startX = e.pageX - scrollSlider.offsetLeft;
                scrollLeft = scrollSlider.scrollLeft;
            })
        
            scrollSlider.addEventListener('mouseleave', function() {
                isMove = false;
            })

            scrollSlider.addEventListener('mouseup', function() {
                isMove = false;
            })

            scrollSlider.addEventListener('mousemove', function(e) {
                if(!isMove) return;
                e.preventDefault();
                const x = e.pageX - scrollSlider.offsetLeft;
                const walk = (x - startX) * 4; //scroll-fast
                scrollSlider.scrollLeft = scrollLeft - walk;
            })
            console.log("여기서 오류나냐? last")
        // } else {
        //     alert("dho")
        // }
    }
})
