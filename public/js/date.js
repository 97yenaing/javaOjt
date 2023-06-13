$(document).ready(function(){

    var dateInput;
    var count=0;
    var input_date=$("input[type='date']").length;


      $(".reception-serach").each(function(index) {
        $(this).addClass( "dateText" + (index + 1));
         count=count+1;
      });
      console.log (count);

      $(".appointment-serach").each(function(index) {
        $(this).addClass( "dateText" + (count + 1));
      });

    $("input[type='date']").each(function(index) {
      $(this).addClass( "date" + (index + 1));
    });


        $("input[type='date']").on('focus', function() {
          dateInput =event.target.id;
          $("#"+dateInput).blur(function(){
              $("#"+dateInput).attr("type", "text");
              var dateData = $("#"+dateInput).val();
              console.log(dateData);
              var dateSplit= dateData.split('-');
              if(dateSplit[0].length>3){
                var date_yy=dateSplit[0];
              var date_mm=dateSplit[1];
              var date_dd=dateSplit[2];
              $("#"+dateInput).val(date_dd+"-"+date_mm+"-"+date_yy)
              }
          });
          $('#'+dateInput).on('focus', function() {
            $('#'+dateInput).attr('type', 'date');
          });

        });


        function DateTo_text() {
          console.log("date function");
        $("input[type='date']").each(function(index) {
         if($( ".date" + (index + 1)).val()!="") {
          console.log("hello")
          $( ".date" + (index + 1)).attr('type','text')
          var dateData =$( ".date" + (index + 1)).val();
          var dateSplit= dateData.split(/[-\/]/);
          // var dateSplit= dateData.split('/');

          console.log(dateSplit[0].length)
          if(dateSplit[0].length>3){
          var date_yy=dateSplit[0];
          var date_mm=dateSplit[1];
          var date_dd=dateSplit[2];
          $( ".date" + (index + 1)).val(date_dd+"-"+date_mm+"-"+date_yy);
          }
         }
        });
        }

        $("#from_export,to_export").click(function() {
          console.log("click reception")

          setTimeout(function() {
            DateTo_text();
        }, 50);
        });


        $(".reception-serach,.s-t-update").click(function() {
          console.log("click reception")

          setTimeout(function() {
            DateTo_text();
        }, 50);
        });

        $("#nextID").click(function() {
          console.log("click reception")

          setTimeout(function() {
            DateTo_text();
        }, 50);
        });

        $("#pid-search").click(function() {  //sti_search
          console.log("click reception")

          setTimeout(function() {
            DateTo_text();
        }, 50);
        });

        $(".counGeneral div:nth-child(2)").click(function() { //counselling
          setTimeout(function() {
            DateTo_text();
        }, 5);
        });

        $("#cid").blur(function() {     // For lab date
          setTimeout(function() {
            DateTo_text();
        }, 50);
        });
        $("#fuchiaID").blur(function() {     // For lab date
          setTimeout(function() {
            DateTo_text();
        }, 50);
        });

        $('table tbody').on('click', 'tr td a', function() {
          console.log("click reception")

          setTimeout(function() {
            DateTo_text();
        }, 50);
        });

  });
  // function formatDate(dateStr){
  //     var dateObj = $.datepicker.parseDate("dd-mm-yy", dateStr);
  //     var formattedDate = $.datepicker.formatDate("yy-mm-dd",dateObj);
  //     return formattedDate;
  // }
