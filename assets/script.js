$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$('.saveBtn').on('click', function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val()
    localStorage.setItem(key, value);
})

$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))
$("#6 .description").val(localStorage.getItem("6"))
$("#7 .description").val(localStorage.getItem("7"))
$("#8 .description").val(localStorage.getItem("8"))
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
$("#18 .description").val(localStorage.getItem("18"))
$("#19 .description").val(localStorage.getItem("19"))
$("#20 .description").val(localStorage.getItem("20"))
$("#21 .description").val(localStorage.getItem("21"))
$("#22 .description").val(localStorage.getItem("22"))
$("#23 .description").val(localStorage.getItem("23"))
$("#24 .description").val(localStorage.getItem("24"))

function formatTime() {
    var momentHour = moment().hour()

    $('.time-block').each(function () {
        var rowHour = parseInt($(this).attr('id'))

        if (rowHour < momentHour) {
            $(this).addClass('future')
        } else if (rowHour > momentHour) {
            $(this).addClass('past')
        } else (rowHour === momentHour)
        $(this).addClass('present')

    })
}

formatTime();