import { LightningElement, track, api } from 'lwc';
import searchIconUrl from '@salesforce/resourceUrl/LGImageSample'
import imagesCardUrl from '@salesforce/resourceUrl/LGSliderImage'

export default class SecondSection extends LightningElement {
    @track
    categoryList = [
        '전체', '제품/시장 뉴스', '프로모션', '카탈로그', '전문자료'
    ];
    searchIcon = searchIconUrl + '/images/ico-search.svg';
    imagesCard = [
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
        {
            imgId: 7,
            content: '친환경 자동차 소재로 지구를 지키다',
            badge: [
                '프로모션'
            ]
        },
        {
            imgId: 8,
            content: 'EM 공장 제조 공정',
            badge: [
                '프로모션'
            ]
        },
    ];
    
    categoryClick(event) {
        [...this.template.querySelectorAll('.abc')].map((item) => {
            item.classList.remove('is-active');
        })

        event.currentTarget.classList.add('is-active');
    }

    connectedCallback() {
        this.imagesCard.map(item => {
            item.url = `${imagesCardUrl}/${item.imgId}th-image.png`
        })
    }

    renderedCallback() {
        this.template.querySelector('li:first-child').classList.add('is-active');
    }
}