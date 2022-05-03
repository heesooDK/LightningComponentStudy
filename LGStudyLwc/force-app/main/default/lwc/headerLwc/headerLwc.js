import { LightningElement } from 'lwc';
import LG_Image_Sample from '@salesforce/resourceUrl/LGImageSample'

export default class HeaderLwc extends LightningElement {
    LgLogo = LG_Image_Sample + '/images/logo-em.svg'

    searchImg = LG_Image_Sample + '/images/ico-search.svg'
    userImg = LG_Image_Sample + '/images/ico-user.svg'
    langImg = LG_Image_Sample + '/images/ico-lang.svg'
    otherImg  = LG_Image_Sample + '/images/ico-others.svg'

    productSearchAllImg = LG_Image_Sample + '/images/productSearchAll.svg'
    oemSearchAllImg = LG_Image_Sample + '/images/oemSearchAll.svg'
    contactUsImg = LG_Image_Sample + '/images/contactus-bk.svg'
}