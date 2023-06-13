$(document).ready(function () {
	$(function () {
            $('.diseaseTest').on('click', function () {
                        $(".clue").hide();
                        $(".pmnl").hide();
                        $(".trich").hide();
                        $(".gram-intra").hide();
                        $(".gram-extra").hide();
                        $(".candida").hide();
                        $(".spermatazoites").hide();
                        $('.diseaseTest').css("background-color","") ;
                        $('.diseaseTest').css("color","") ;
                        var target = $( event.target );
                        target.css("background-color","#f8fafc") ;
                        target.css("color","#495057");
                        var index = $(this).index();
                        switch(index){
                            case 0:
                                $(".clue").show();
                            break;
                            case 1: 
                                $(".pmnl").show();
                            break;
                            case 2:
                                $(".trich").show();
                            break;
                            case 3:
                                $(".gram-intra").show();
                            break;
                            case 4:
                                $(".gram-extra").show();
                            break;
                            case 5:
                                $(".candida").show();
                            break;
                            case 6:
                                $(".spermatazoites").show();
                            break;
                            

                        }
                                            
                        $('#sti-diseaseTest').stop().animate({
                            left: -300,
                        }, 500);
                        $(".btn-stiList").removeClass('hb-open');
                                                    
                    });

                });

            });