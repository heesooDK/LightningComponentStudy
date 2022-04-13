({

    afterRender: function(component, helper) {
        this.superAfterRender();

        window.addEventListener('scroll', function() {
            var scroll = window.scrollY;
            helper.fixedHeader(component, scroll);
        }); 

    }

})