({
    fixedHeader : function(component, scroll) {
        var headerCmp = component.find("fixedHeader").getElement();

        // scrolly 850
        if (scroll > 50) {
            $A.util.addClass(headerCmp, 'fixed-first-header');
        } else {
            $A.util.removeClass(headerCmp, 'fixed-first-header');
        }
    }
})