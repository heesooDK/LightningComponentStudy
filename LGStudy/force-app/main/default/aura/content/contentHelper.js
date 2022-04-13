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
        } else {
            $A.util.removeClass(headerCmp, 'slds-is-fixed');
            $A.util.removeClass(headerAnimation, 'slds-is-fixed');
        }
    }
})