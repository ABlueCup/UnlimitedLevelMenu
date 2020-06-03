~function($){
    $(function(){
        var $nav = $('.nav');
        $nav.on('click', function(ev){
            var target = ev.target || ev.srcElement,
            $target = $(target);
            // 点击em的时候
            if (target.tagName === 'EM') {
                // 判断当前状态是否是fold,是展开
                if ($target.hasClass('fold')) {
                    $target.removeClass('fold').addClass('unfold');
                    $target.next().next().stop().slideDown();
                    return;
                }
                if ($target.hasClass('unfold')) {
                    //所有class为unfold的子元素都要修改class为fold,且子菜单要关闭
                    $target.removeClass('unfold').addClass('fold');
                    $target.next().next().stop().slideUp();
                    $('.unfold', $target.next().next()[0]).each(function(){
                       $(this).removeClass('unfold').addClass('fold');
                       $(this).next().next().css('display','none');
                    });
                }
            }            
        });
    });
}(jQuery);