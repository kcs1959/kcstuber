(function(){
    $('#scroll_top').click(function(){
        $('html').animate({
            scrollTop: 0
        }, 200);
        $('body').animate({
            scrollTop: 0
        }, 200);
        return false;
    });

    $('#top_content').addClass("fade");
})();