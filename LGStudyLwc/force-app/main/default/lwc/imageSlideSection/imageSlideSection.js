import { LightningElement, track, api } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader'
import salesforceSlideImgUrl from '@salesforce/resourceUrl/LGSliderImage'
import swiperResource from '@salesforce/resourceUrl/swiper'

export default class ImageSlideSection extends LightningElement {

    @track
    imagesSlide = [
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

    imgUrl;

    connectedCallback() {
        this.imagesSlide.map(item => item.url = `${salesforceSlideImgUrl}/${item.imgId}th-image.png`);

        // loadScript(this, swiperResource + '/swiper-bundle.min.js').then(() => {
        //     return new Promise((resolve, reject) => {
        //         console.log("프로미스 개체 안에 들어옴")
        //         var swiper = new Swiper(".mySwiper", {
        //             slidesPerView: '3',
        //             spaceBetween: 20,
        //             loop: true,
        //             autoplay: {
        //               delay: 2000,
        //               disableOnInteraction: false
        //             },
        //             navigation: {
        //                 nextEl: ".right-button",
        //                 prevEl: ".left-button"
        //             },
        //             allowTouchMove: false,
        //         });

        //         resolve(swiper)
        //         console.log("일단 성공")
        //     })
        // })
        
    }

    renderedCallback() {
        Promise.all([
            loadScript(this, swiperResource + '/swiper-bundle.min.js'),
            loadStyle(this, swiperResource + '/swiper-bundle.min.css')
        ]).then((resolve) => {
            console.log("프로미스 개체 안에 들어옴")
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
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

            console.log("일단 성공")
        })
    }
} 