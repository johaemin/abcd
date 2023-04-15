$( function() {
    $( "#datepicker1, #datepicker2").datepicker({
        numberOfMonths: 2,
        nextText: "다음",
        prevText: "이전",
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
        dateFormat: "yy.mm.dd",
        showOtherMonths: true,
        selectOtherMonths: true,
        // beforeShow: function(input) {
        //     let i_offset= $(input).offset(); //클릭된 input의 위치값 체크
        //     setTimeout(function(){
        //         $('#ui-datepicker-div').css({'top':'615px'});
        //         // fixed 됐을 때 149px
        //     });
        // }
    });

    // $( "#datepicker2").datepicker({
    //     numberOfMonths: 2,
    //     nextText: "다음",
    //     prevText: "이전",
    //     monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
    //     dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
    //     dateFormat: "yy.mm.dd",
    //     showOtherMonths: true,
    //     selectOtherMonths: true,
    //     beforeShow: function(input) {
    //         let i_offset= $(input).offset(); //클릭된 input의 위치값 체크
    //         setTimeout(function(){
    //             $('#ui-datepicker-div').css({'top':'615px'});
    //         });
    //     }
    // });
} );