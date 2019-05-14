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

    const effect_thresh = 0.1;  
    $(window).scroll(function(){
        $('.effect').each(function(){
            let elem_pos = $(this).offset().top;
            let scroll_pos = $(window).scrollTop();
            let window_height = $(window).height();
            if(elem_pos < scroll_pos + window_height * (1 - effect_thresh)){
                $(this).addClass('target');
            }
        });
    });
})();