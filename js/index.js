layui.use(['jquery', 'util'], function () {
    var $ = layui.jquery,
        util = layui.util;
    $(window).load(function () {
        $("#loading").fadeOut(500);
        new WOW().init();
    })
    util.fixbar();;
    $('.next').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').outerHeight() + 1
        }, 600);
    });
    $('#menu').on('click', function () {
        var mark = $(this).attr('data-mark');
        if (mark === 'false') {
            $(this).removeClass('menu_open').addClass('menu_close');
            //open
            $('#navgation').removeClass('navgation_close').addClass('navgation_open');
            $(this).attr({ 'data-mark': "true" });
        } else {
            $(this).removeClass('menu_close').addClass('menu_open');
            //close
            $('#navgation').removeClass('navgation_open').addClass('navgation_close');
            $(this).attr({ 'data-mark': "false" });
        }
    });
    var $wid=$(window).outerWidth(true);
	console.log($wid);
	var timer;
	var ps = 0;
	var ae = 0;
	var ai = 0;
	var pr = 0;
	var numadd = function() {
		if (ps < 95) {
			ps = ps+1;
		}
		if (ai < 100) {
			ai = ai+1;
			clearInterval(timer);
		}
		if (ae < 70) {
			ae = ae+1;
		}
		if (pr < 75) {
			pr = pr+1;
		}
		$("#ps").html(ps+"%");
		$("#ae").html(ae+"%");
		$("#ai").html(ai+"%");
		$("#pr").html(pr+"%");
		
	}
	$(window).scroll(function(){
		var $scr = $(window).scrollTop();
		console.log($scr);
		if ($scr >= 1000) {
			timer = setInterval(numadd,25);
		}
	})
});