

// show loading screen
function loading_show() {
    document.getElementById('light1_login').style.display = 'block';
    document.getElementById('fade1_login').style.display = 'block';
    document.getElementById('light1_login').style.zIndex = '6051';
    document.getElementById('fade1_login').style.zIndex = '6050';
    //  $('.row, .navbar-fixed-top, .side-nav').css('-webkit-filter', 'blur(1px)');
}

// hide loading screen
function loading_hide() {
    //    $('.row, .navbar-fixed-top, .side-nav').css('-webkit-filter', 'initial');
    $('#light1_login').fadeOut(1000);
    $('#fade1_login').fadeOut(1000);
}

// increase height of textbox automatically
function ResizeBox(e) {
    var ele = e.target;
    var t = ele.scrollTop;
    ele.scrollTop = 0
    if (t > 0) {
        ele.style.height = (ele.offsetHeight + t) + "px";
    }
}

// toggle main menu 
function toggle_menu(click_flag) {
    if (click_flag == 0) {
        var menu_left = $('#side-menu').css('left');
        if (menu_left == '0px') {
            $('#side-menu').animate({ 'left': '-38%' });
        }
        else {
            $('#side-menu').animate({ 'left': '0px' });
        }
    }
    else {
        $('#side-menu').animate({ 'left': '-38%' });
    }
}

// bind listview with sliding effect
function mk_listview_bind(listItem, i, listTable) {
    setTimeout(function () {
        $("#" + listTable + "").append(listItem);
        $("#" + listTable + " li:nth-child(" + (i + 1) + ")").addClass('mk-add-place');
        //        setTimeout(function () {
        //            $("#" + listTable + " li:nth-child(" + (i + 1) + ")").removeClass('mk-add-place');
        //        }, 600);
    }, 100 * i);
}

// animate number
function mk_animate_number(id, number) {
    var thisid = '#' + id;
    var $obj = $(thisid);
    $obj.css('opacity', '.3');
    var original = $obj.text();

    var spin = function () {
        return Math.floor(Math.random() * 10);
    };

    var spinning = setInterval(function () {
        $obj.text(function () {
            var result = '';
            for (var i = 0; i < original.length; i++) {
                result += spin().toString();
            }
            return result;
        });
    }, 50);

    var done = setTimeout(function () {
        clearInterval(spinning);
        $obj.text(number).css('opacity', '1');
    }, 1000);
}

// convert miliseconds to days, hours, minutes and seconds
function get_formated_time(ms) {
    try {
        var x = ms / 1000;
        var seconds = x % 60;
        x /= 60;
        var minutes = x % 60;
        x /= 60;
        var hours = x % 24;

        seconds = Math.floor(seconds);
        minutes = Math.floor(minutes);
        hours = Math.floor(hours);

        if (seconds < 10) { seconds = "0" + seconds };
        if (minutes < 10) { minutes = "0" + minutes };
        if (hours < 10) { hours = "0" + hours };

        var formated_Time = hours + ":" + minutes + ":" + seconds;
        return formated_Time;
    }
    catch (e) {
        alert(e + "_get_formated_time");
    }
}

// get datetime string
function getDateTime(ms) {
    var now = new Date(ms);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        var month = '0' + month;
    }
    if (day.toString().length == 1) {
        var day = '0' + day;
    }
    if (hour.toString().length == 1) {
        var hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        var minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        var second = '0' + second;
    }
    var dateTime = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}

// auto set page height
function auto_set_page_height() {
    var window_height = $(window).height();
    if (window_height > 525) {
        var set_height = window_height - 118;
        var set_height_str = set_height + "px";
        //  $(".panel-primary").css("height", set_height_str);
        var left_panel = document.getElementsByClassName("mkscroll");
        var left_div_maxheight = left_panel[0].style.maxHeight;
        var approx_maxheight = window_height - 266;
        if (approx_maxheight < parseInt(left_div_maxheight)) {
            var set_maxheight = parseInt(left_div_maxheight) - 50;
            var set_maxheight_str = set_maxheight + "px";
            left_panel[0].style.setProperty("max-height", set_maxheight_str, "important");
        }
     
        var element = document.getElementsByClassName("panel-primary");
        for (i = 0; i < element.length; i++) {
            element[i].style.setProperty("height", set_height_str, "important");
        }
    }
}