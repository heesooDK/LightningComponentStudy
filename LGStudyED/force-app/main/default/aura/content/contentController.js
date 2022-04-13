({
    doInit : function(component, event, helper) {
        var categoryList = [
            '전체', '제품/시장 뉴스', '프로모션', '카탈로그', '전문자료'
        ];

        component.set("v.categoryList", categoryList);

        var imageSlides = [
            {
                imgId: 1,
                content: '퀴즈로 풀어보는 소재 이야기_EM편',
                badge: [
                    '프로모션', '카탈로그', '전문자료'
                ]
            },
            {
                imgId: 2,
                content: '친환경 자동차 소재로 지구를 지키다',
                badge: [
                    '프로모션', '카탈로그'
                ]
            },
            {
                imgId: 3,
                content: 'EM 공장 제조 공정',
                badge: [
                    '프로모션'
                ]
            },
            {
                imgId: 4,
                content: '[LUMID] 엔진의 열을 알맞게 유지..',
                badge: [
                    '프로모션'
                ]
            },
            {
                imgId: 5,
                content: '[ABS, PC, LUMID] 바람을 조절해..',
                badge: [
                    '프로모션'
                ]
            },
            {
                imgId: 6,
                content: '[LUPOX] 전기와 전장폼의 커플매..',
                badge: [
                    '프로모션'
                ]
            },
        ];


        component.set("v.imageSlides", imageSlides);
    },
    categoryClick: function(component, event, helper) {
        component.set("v.selectedCategory", event.target.name);
    },
    swiperSlide: function(component, event, helper) {
        return new Promise((resolve, reject) => {
            // slidesPerView: 'auto',
            // centeredSlides: true,
            var swiper = new Swiper("#swiper", {
                slidesPerView: '3',
                spaceBetween: 20,
                loop: true,
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
            console.log("swiper active")
        })
    }
})