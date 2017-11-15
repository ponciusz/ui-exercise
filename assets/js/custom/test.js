var valtechSidebar = (function ($) {
    var s;
    var sbWidth;
    return {
        settings: {
            $tsb:  $('.js-toggleSidebar'),
            $mainWrap:  $('#main-wrap'),
            $sidebar:  $('#main-sidebar'),
            $sidebarIns:  $('.sidebar-ins')
        },

        init: function () {
            s = this.settings;
            this.bindUIActions();
        },

        bindUIActions: function () {

            s.$tsb.click(function () {


                if(s.$mainWrap.hasClass('hide-sidebar')){
                    s.$sidebarIns.width('100%');
                }else{
                    sbWidth = s.$sidebar.width();
                    s.$sidebarIns.width(sbWidth);
                }




                s.$mainWrap.toggleClass('hide-sidebar');
            });

        }



    };
})(jQuery);
valtechSidebar.init();
