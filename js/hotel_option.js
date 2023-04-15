$(function() {

    let searchTop = $('#hotel_box').offset().top;

    console.log(searchTop);
    $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
            $('header').addClass('header_white');
        }
        else {
            $('header').removeClass('header_white');
        }
    });

    $(window).scroll(function() {
        if($(window).scrollTop() >= searchTop - 69) {
            $('#hotel_box').addClass('sec1_fixed');
        }
        else {
            $('#hotel_box').removeClass('sec1_fixed');
        }
    });




    $('#choose > .hotel_text > p:nth-child(2)').click(function() {
        $('.hotel_people').removeClass('on');
        $('.hotel_choose').toggleClass('on');
    });

    $('.hotel_choose').click(function() {
        $('.hotel_choose').toggleClass('on');
    });

    $('.hotel_choose > li').click(function() {
        let hotelText = $(this).find('.htl_name').text()
        $('.htl_p').text(hotelText);
    });

    $('#room_text > p:nth-child(2)').click(function() {
        $('.hotel_choose').removeClass('on');
        $('.hotel_people').addClass('on');
    });
    // 실행 x
    $('#people_close').click(function() {
        $('.hotel_people').removeClass('on');
    });
    
    let date1 = $('#date');
    let date2 = $('#datepicker');
    $('#date').click(function() {
        
    });
    $('#datepicker1, #datepicker2').click(function() {
        $('.hotel_people').removeClass('on');
        $('.hotel_choose').removeClass('on');
    });

    $('#search').click(function() {
        $('.hotel_people').removeClass('on');
        $('.hotel_choose').removeClass('on');
    });
    
    let count1 = 1;
    let count2 = 0;
    let count3 = 1;
    $('.btn_plus1').click(function() {
        if(count1 < 10) {
            count1 = count1 + 1;
            $('.number_01').text(count1);
        }
    });
    $('.btn_minus1').click(function() {
        if(count1 > 0) {
            count1 = count1 - 1;
            $('.number_01').text(count1);
        }
    });

    $('.btn_plus2').click(function() {
        if(count2 < 10) {
            count2 = count2 + 1;
            $('.number_02').text(count2);
        }
    });
    $('.btn_minus2').click(function() {
        if(count2 > 0) {
            count2 = count2 - 1;
            $('.number_02').text(count2);
        }
    });

    $('.btn_plus3').click(function() {
        if(count3 < 10) {
            count3 = count3 + 1;
            $('.number_03').text(count3);
        }
    });
    $('.btn_minus3').click(function() {
        if(count3 > 0) {
            count3 = count3 - 1;
            $('.number_03').text(count3);
        }
    });

    
    // $('.sec2_logo').click(function() {
    //     $('.sec2_logo').removeClass('open');
    //     $(this).addClass('open');
    // });

    $('.sec2_logo').each(function(index) {
        $(this).click(function() {
            console.log(index);
            $('.sec2_logo').removeClass('open');
            $(this).addClass('open');
            $('.sec2_background').removeClass('open');
            $('.sec2_background').eq(index).addClass('open');
            $('.sec2_text').removeClass('open');
            $('.sec2_text').eq(index).addClass('open');
        });
    });

    $('#m_burger').click(function() {
        $('#m_menu_con').css({
            top : '0',
        });
    });
    $('.m_close').click(function() {
        $('#m_menu_con').css({
            top : '-200%',
        });
    });
    $('#m_menu > li').click(function() {
        if($(this).hasClass('sub_open') == true) {
            $(this).removeClass('sub_open');
        }
        else {
            $('#m_menu > li').removeClass('sub_open');
            $(this).addClass('sub_open');
        }
    });

}); //end