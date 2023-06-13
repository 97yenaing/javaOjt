$(document).ready(function () {
	$(function () {
        $('#ucler_li').on('click', function () {
            $('#ucler_li').css("background-color","#1C82AD");
            $('#other_li').css("background-color","#dc3545");
            $('#disharge_li').css("background-color","#dc3545");

			$(".ucler-list").toggle();
            $(".disharge-list").hide();
            $(".otherStd-list").hide();
            

		});
        $('#disharge_li').on('click', function () {
            $('#disharge_li').css("background-color","#1C82AD");
            $('#ucler_li').css("background-color","#dc3545");
            $('#other_li').css("background-color","#dc3545")

			$(".disharge-list").toggle();
            $(".ucler-list").hide();
            $(".otherStd-list").hide();
            
		});
        $('#other_li').on('click', function () {
            $('#other_li').css("background-color","#1C82AD")
            $('#disharge_li').css("background-color","#dc3545");
            $('#ucler_li').css("background-color","#dc3545");
            
			$(".otherStd-list").toggle();
            $(".ucler-list").hide();
            $(".disharge-list").hide();
            
		});
        $('.btn-stiList').on('click', function () {
			var leftVal = 0;
			if ($(this).hasClass('hb-open')) {
				leftVal = -300;
				$(this).removeClass('hb-open');
			} else {
				$(this).addClass('hb-open');
			}

			$('#sti-diseaseTest').stop().animate({
				left: leftVal
			}, 500);
		});
		

	});

});