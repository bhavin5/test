
//// new start
//function Login_passcode_check() {
//    try {
//        var mobile_no = $("#txt_mobile").val();
//        if (mobile_no == undefined || mobile_no == null || mobile_no == '') {
//            alert('Enter Mobile Number');
//        }
//        else {
//            var getdata = new Webservicecall('http://52.34.178.34/travel/public/user/mobile', Onsuccess_Login_passcode_check, Onfail_Login_passcode_check);
//            getdata.callOtherDomain();
//        }
//    } catch (e) {
//        alert(e + "_Login_passcode_check");
//    }
//}
//function Onsuccess_Login_passcode_check(e) {
//    try {
//        alert(e + "_temp");
//        var result = eval('(' + e.responseText + ')');

//    } catch (e) {
//        alert(e + "_Onsuccess_Login_passcode_check")
//    }
//}

//function Onfail_Login_passcode_check(e) {
//    try {
//        alert("On fail");

//    } catch (e) {
//        alert(e + "_Onfail_Login_passcode_check")
//    }
//}

//function Login_Passcode_And_Password_check() {
//    try {
//        var flag = 0;
//        var txt_passcode = $("#txt_passcode").val();
//        var mobile_no = $("#txt_mobile").val();
//        if (mobile_no == undefined || mobile_no == null || mobile_no == '') {
//            alert('Enter Mobile Number');
//            flag++;
//        }
//        if (txt_passcode == undefined || txt_passcode == null || txt_passcode == '') {
//            alert('Enter Passcode');
//            flag++;
//        }
//        if (flag == '0') {
//           
//        }
//    }
//    catch (e) {
//        alert(e + "_Login_Passcode_And_Password_check");
//    }
//}

function get_URL() {
    try {
        var mobile = getParameterByName('mobile');
        var token = getParameterByName('token');
        get_List_Of_Location_new(mobile, token);
    } catch (e) {
        alert(e + "_get_URL");
    }
}



function getParameterByName(name, url) {
    try {
      if (!url) url = window.location.href;

        ////var getdata = new Webservicecall('http://52.34.178.34/travel/public/user/?v1=' + foo+'&v2='+, Onsuccess_Login_Passcode_And_Password_check, Onfail_Login_Passcode_And_Password_check);
        //http://182.18.161.69:8080/api/v2/mysql/_table/log?api_key=9a014e1867ed2e47402272a8cfd0487fcb6f1208beb5d33b1256f375dfb37e82&filter=(coach_num=KA-25%20EQ-2066)

        //if (!url) url = "http://localhost:1810/link?mobile=9998037925&?token=Xmg1cZh";
     //if (!url) url = "http://admin.robopower.in/link?mobile=9879400004&?token=z7dbgri";
     //   if (!url) url = "http://182.18.181.202/EFS/Website1/link?mobile=9879400004&?token=z7dbgri";

        // if (!url) url = "http://mobiletracker.skyproductivity.com/?mobile=9998037925&?token=Xmg1cZh";
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    } catch (e) {
        alert(e + "_getParameterByName");
    }
}


function get_List_Of_Location_new(mobile, token) {
    try {

        //urlParams = parseURLParams(urlString);
        //var mob = '9998037925';
        //var token = 'Xmg1cZh';
        var temp_1 = 'http://admin.robopower.in/user/'
        var test = temp_1 + mobile + '/' + token;
        var getdata = new Webservicecall(test, Onsuccess_Login_Passcode_And_Password_check, Onfail_Login_Passcode_And_Password_check);
        getdata.callOtherDomain();

    } catch (e) {
        alert(e + "_get_List_Of_Location_new");
    }
}

function Onsuccess_Login_Passcode_And_Password_check(e) {
    try {
        var result = eval('(' + e.responseText + ')');

        if (result.userdata.length > 0) {
            bus_origin_late = result.latitude;
            bus_origin_long = result.longitude;
            var userdata = result.userdata;
            data_json = userdata;

            $("#Bus_Login").css("display", "none");
            $("#Num_Bus_List").css("display", "block");
            speed = 0;
            var listItem = '';
            listItem += "<ul class='list-unstyled gl_ul' style='background-color: #ffffff; height: auto; overflow-x: hidden; overflow-y: auto;'>";
            //   for (var j = 0; j < userdata.length; j++) {
            for (var i = 0; i < userdata[0].passenger_details.length; i++) {
                var pnr_number = userdata[0].passenger_details[i].pnr_number;
                var origin = userdata[0].passenger_details[i].origin;
                var destination = userdata[0].passenger_details[i].destination;
                var captain1_details = userdata[0].captain1_details;
                var coach_num = userdata[0].coach_num;

                if (captain1_details == undefined || captain1_details == null) {
                    captain1_details = '';
                }
                if (coach_num == undefined || coach_num == null) {
                    coach_num = '';
                }
                var param = "\"Get_Map_ON_click('" + captain1_details
                        + "' , '" + coach_num + "','" + i + "')\"";
                //var listItem = "<li onclick='Get_Map_ON_click('" + userdata[0].captain1_details + "'," + userdata[0].coach_num + ")'>Coach_No:" + userdata[0].coach_num + "<br>pnr_number:" + pnr_number + "<br>origin:" + origin + "<br>destination:" + destination + "</li>";
                //   listItem += "<li class='list-unstyled gl_ul' style='padding: 2%; background-color: #ffffff; border-bottom: 1px solid #3cb371; padding: 10px;padding-left: 10%; ' onclick=" + param + "><img src='Images/ic_map_marker_radius.png' /><label style='font-size: 100%;'>Coach_no : " + userdata[0].coach_num + "</label><br>Pnr_no : " + pnr_number + "<br>Origin : " + origin + "<br>Destination : " + destination + "</li>";

                listItem += "<li class='list-unstyled gl_ul' style='padding: 2%; background-color: #ffffff; border-bottom: 1px solid #3cb371; padding: 10px;padding-left: 10%; ' onclick=" + param + "><table><tr><td rowspan='4'><img src='../assets/Images/ic_map_marker_radius.png' style='width:150px; height:150px' /></td><td><label style='font-size: 100%;'>Coach_no : " + userdata[0].coach_num + "</label></td></tr><tr><td>Pnr_no : " + pnr_number + "</td></tr><tr><td>Origin : " + origin + "</td></tr><tr><td>Destination : " + destination + "</td></tr></table></li>";
            }
            //     }
            listItem += "</ul>";
            $("#Num_Bus_List_inner").append(listItem);
        }
    } catch (e) {
        alert(e + "_Onsuccess_Login_token_passcode_check");
    }
}

function Onfail_Login_Passcode_And_Password_check(e) {
    alert(e + "_Onfail_Login_token_passcode_check");
}

// new end

function Get_Map_ON_click(captain1_details_new, coach_num_new, index_no) {
    if (coach_num_new == undefined || coach_num_new == null || coach_num_new == '') {
        alert("Your Bus is not decided yet! Plese try again later!");
    }
    else {
        $("#Num_Bus_List").css("display", "none");
        $("#Div_Map_Bus").css("display", "block");
        get_latlong(captain1_details_new, coach_num_new, index_no);
    }
}

function get_latlong(captain1_details_new, coach_num_new, index_no) {
    try {
        caption_detail_map = captain1_details_new;
        coach_no_map = coach_num_new;
        index_map = index_no;
        index = index_no;
        $("#lbl_caption_detail").text(captain1_details_new);
        $("#lbl_coatch_no").text(coach_num_new);

        //var coach_num_new = 'KA-25 EQ-2066';
        if (coach_num_new == undefined || coach_num_new == null || coach_num_new == '') {
            alert("Your Bus is not decided yet! Plese try again later!");
        }
        else {
            coach_num = encodeURI(coach_num_new);
            //  var test = "http://182.18.161.69:8080/api/v2/mysql/_table/log?api_key=9a014e1867ed2e47402272a8cfd0487fcb6f1208beb5d33b1256f375dfb37e82&filter=(coach_num=";
            var test = "http://robopower.in/api/v2/get_location?api_key=15e43176b20e89da95a6d5ea34601814a3493128171eefa0647890a6928955dc&coach_num=";

            //var temp_1 = ')';
            // var final_url = test + coach_num + temp_1;
            var final_url = test + coach_num;
            var param_obj = [];
            var getdata = new Webservicecall(final_url, Onsuccess_getlatlong_, Onfail_getlatelong);
            getdata.callOtherDomain();
        }

    } catch (e) {
        alert(e + "_Get_Map_ON_click");
    }
}


function Onsuccess_getlatlong_(e) {
    try {
        var result = eval('(' + e.responseText + ')');
        //if (result.resource.length > 0) {
        //    var lon = result.resource[0].lon;
        //    var lat = result.resource[0].lat;
        //    speed = result.resource[0].speed;
        //    //  localStorage.setItem("Bus_Speed", result.resource[0].speed);
        //    Get_Map_ON_click_repersent_MAP(lat, lon);
        //}



        // if (result.length > 0) {
        var lon = result.lon;
        var lat = result.lat;
        speed = result.speed;
        //  localStorage.setItem("Bus_Speed", result.resource[0].speed);
        Get_Map_ON_click_repersent_MAP(lat, lon);
        //}
    } catch (e) {
        alert(e + "_Onsuccess_get_latlong_");
    }
}
function Onfail_getlatelong(e) {
    alert("_onfail");
}

//function Get_Map_ON_click_repersent_MAP(lat1, long1) {
//    try {
//        multitime_get_lat_long(caption_detail_map, coach_no_map, index_map);

//        var map = new google.maps.Map(
//             document.getElementById("map_canvas"), {
//                 center: new google.maps.LatLng(23.0225, 72.5714),
//                 zoom: 6,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             });
//        var directionsService = new google.maps.DirectionsService();
//        var directionsDisplay = new google.maps.DirectionsRenderer({
//            map: map,
//            preserveViewport: true
//        });
//        directionsService.route({
//            // origin: new google.maps.LatLng(26.9124, 75.7873),
//            origin: new google.maps.LatLng(23.0225, 72.5714),
//            destination: new google.maps.LatLng(28.6139, 77.2090),
//            waypoints: [{
//                stopover: false,
//                location: new google.maps.LatLng(23.0225, 72.5714)
//            }],
//            travelMode: google.maps.TravelMode.DRIVING
//        }, function (response, status) {
//            if (status === google.maps.DirectionsStatus.OK) {
//                // directionsDisplay.setDirections(response);
//                var polyline = new google.maps.Polyline({
//                    path: [],
//                    strokeColor: '#0000FF',
//                    strokeWeight: 3
//                });
//                var bounds = new google.maps.LatLngBounds();

//                var legs = response.routes[0].legs;
//                for (i = 0; i < legs.length; i++) {
//                    var steps = legs[i].steps;
//                    for (j = 0; j < steps.length; j++) {
//                        var nextSegment = steps[j].path;
//                        for (k = 0; k < nextSegment.length; k++) {
//                            polyline.getPath().push(nextSegment[k]);
//                            bounds.extend(nextSegment[k]);
//                        }
//                    }
//                }
//                polyline.setMap(map);
//            } else {
//                window.alert('Directions request failed due to ' + status);
//            }
//        });

//        //var new_Location = new google.maps.LatLng(lat1, long1);
//        //var mapOptions = {
//        //    zoom: 14,
//        //    center: new_Location,
//        //    mapTypeControl: false,
//        //    streetViewControl: false
//        //}
//        //var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

//        //var image = new google.maps.MarkerImage(
//        //                        'Images/marker_blue_circle.png',
//        //                        null, // size
//        //                        null, // origin
//        //                        new google.maps.Point(8, 8), // anchor (move to center of marker)
//        //                        new google.maps.Size(17, 17) // scaled size (required for Retina display icon)
//        //                    );
//        //var marker = new google.maps.Marker({
//        //    flat: true,
//        //    icon: image,
//        //    map: map,
//        //    optimized: false,
//        //    position: new_Location,
//        //    title: 'I am here',
//        //    visible: true
//        //});

//        //marker.setAnimation(google.maps.Animation.BOUNCE);
//        //var infowindow = new google.maps.InfoWindow({
//        //   // content: "I'm here!"
//        //});
//        // infowindow.open(map, marker);
//    } catch (e) {
//        alert(e + "_Get_Map_ON_click_repersent_MAP");
//    }
//}

function close_MAP() {
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    return false;
}

function Display_list() {
    try {

        $("#Num_Bus_List").css("display", "none");
        $("#Div_Map_Bus").css("display", "none");
        $("#Bus_info").css("display", "block");

        Display_Listview_Info();
        return false;

    }
    catch (e) {
        alert(e + "_Display_list");
    }
}

function Display_Listview_Info() {
    try {

        $("#Bus_info_inner").empty();
        for (var i = 0; i < data_json[0].passenger_details.length; i++) {
            if (i == index) {
                var pnr_number = data_json[0].passenger_details[i].pnr_number;
                var Pick_Up_Location = data_json[0].passenger_details[i].origin;
                var Time_Up_Pick_Up = data_json[0].passenger_details[i].boarding_at;
                var Bas_Rute = data_json[0].coach_num;
                var Driver_Info = data_json[0].captain1_details;

                if (Bas_Rute == undefined || Bas_Rute == null) {
                    Bas_Rute = '';
                }
                if (Pick_Up_Location == undefined || Pick_Up_Location == null) {
                    Pick_Up_Location = '';
                }
                if (Time_Up_Pick_Up == undefined || Time_Up_Pick_Up == null) {
                    Time_Up_Pick_Up = '';
                }
                if (Driver_Info == undefined || Driver_Info == null) {
                    Driver_Info = '';
                }

                var speed_temp = speed;
                speed = '';

                var div_list = '';
                div_list += "<ul class='list-unstyled gl_ul' style='background-color: #ffffff; max-height: 100%; height: auto; overflow: scroll;'>";
                div_list += "<li class='list-unstyled gl_ul' style=' padding: 2%; background-color: #ffffff; border-bottom: 1px solid #3cb371; padding: 10px;padding-left: 10%;  '> Bus Route : " + Bas_Rute + "</li>";
                div_list += "<li class='list-unstyled gl_ul' style=' padding:2%; background-color: #ffffff; border-bottom: 1px solid #3cb371; padding: 10px;padding-left: 10%; '> Pick Up Location : " + Pick_Up_Location + "</li>";
                div_list += "<li class='list-unstyled gl_ul' style=' padding: 2%; background-color: #ffffff; border-bottom: 1px solid #3cb371; padding: 10px;padding-left: 10%; '> Time Up Pick Up : " + Time_Up_Pick_Up + "</li>";
                div_list += "<li class='list-unstyled gl_ul' style=' padding: 2%; background-color: #ffffff; border-bottom: 1px solid #3cb371; padding: 10px;padding-left: 10%; '> Speed : " + speed_temp + "</li>";
                div_list += "<li class='list-unstyled gl_ul' style=' padding: 2%; background-color: #ffffff; border-bottom: 1px solid #3cb371; padding: 10px;padding-left: 10%; '> Driver Information : " + Driver_Info + "</li>";
                div_list += "</ul>";
                // div_list += "<input type='button' value='Back' onclick='Display_Main_Div_again()'/>";
                $("#Bus_info_inner").append(div_list);
                break;
            }
        }

    }
    catch (e) {
        alert(e + "_Display_Listview_Info");
    }
}

function Display_Main_Div_again() {
    $("#Num_Bus_List").css("display", "block");
    $("#Div_Map_Bus").css("display", "none");
    $("#Bus_info").css("display", "none");
}


function multitime_get_lat_long(captain1_details_new, coach_num_new, index_no) {
    try {
        if ($("#Num_Bus_List").css('display') == 'block' || $("#Bus_info").css('display') == 'block') {
        }
        else {
            //do something
            setTimeout(function () {
                abc();
            }, 10000);
        }
    } catch (e) {
        alert(e + "_multitime_get_lat_long");
    }
}

function abc() {
    get_latlong(caption_detail_map, coach_no_map, index_map);
}

// before change in path disply

function Get_Map_ON_click_repersent_MAP(lat1, long1) {
    try {             
        var distance_temp;
        var duration_temp;

        var map = new google.maps.Map(
                                      document.getElementById("googleMap"), {
                                            center: new google.maps.LatLng(lat1, long1), // current bus late long
                                            zoom: 8,
                                            mapTypeId: google.maps.MapTypeId.ROADMAP
                                        });
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({
            map: map,
            preserveViewport: true
        });

        /*----here start----*/

        //marker_destion.setMap(map);

        var image = new google.maps.MarkerImage(
                              'assets/Images/bus (1).png',
                              null, // size
                              null, // origin
                              new google.maps.Point(8, 8), // anchor (move to center of marker)
                              new google.maps.Size(30, 30) // scaled size (required for Retina display icon)
                          );
        var marker = new google.maps.Marker({
            flat: true,
            icon: image,
            map: map,
            optimized: false,
            position: new google.maps.LatLng(lat1, long1),  // current bus late long
            title: "I Am Here!",
            visible: true
        });


        var image_destion = new google.maps.MarkerImage(
                    'Images/landmark.png',
                    null, // size
                    null, // origin
                    new google.maps.Point(8, 8), // anchor (move to center of marker)
                    new google.maps.Size(30, 30) // scaled size (required for Retina display icon)
                );
        var marker_destion = new google.maps.Marker({
            flat: true,
            icon: image_destion,
            map: map,
            optimized: false,
            position: new google.maps.LatLng(bus_origin_late, bus_origin_long),  // current bus late long
            title: "Destination",
            visible: true
        });

        var image_Source = new google.maps.MarkerImage(
                  'Images/landmark.png',
                  null, // size
                  null, // origin
                  new google.maps.Point(8, 8), // anchor (move to center of marker)
                  new google.maps.Size(30, 30) // scaled size (required for Retina display icon)
              );
        var marker_Source = new google.maps.Marker({
            flat: true,
            icon: image_Source,
            map: map,
            optimized: false,
            position: new google.maps.LatLng(lat1, long1),  // current bus late long
            title: "Origin",
            visible: true
        });
        //marker.setAnimation(google.maps.Animation.BOUNCE);
        //infowindow.open(map, marker);

        /*----here end----*/

        directionsService.route({
            //origin: new google.maps.LatLng(26.9124, 75.7873), //  jaipur // origin late long
            //origin: new google.maps.LatLng(19.0760, 72.8777),// mumbai
            origin: new google.maps.LatLng(lat1, long1),// ahmedabad
            destination: new google.maps.LatLng(bus_origin_late, bus_origin_long),// delhi
            //destination: new google.maps.LatLng(19.0760, 72.8777),// delhi // destition late long
            waypoints: [{
                stopover: false,
                location: new google.maps.LatLng(lat1, long1)
            }],
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                // directionsDisplay.setDirections(response);
                var polyline = new google.maps.Polyline({
                    path: [],
                    strokeColor: '#ef0089',
                    strokeWeight: 3
                });
                var bounds = new google.maps.LatLngBounds();

                var legs = response.routes[0].legs;
                for (i = 0; i < legs.length; i++) {
                    var steps = legs[i].steps;
                    for (j = 0; j < steps.length; j++) {
                        var nextSegment = steps[j].path;
                        for (k = 0; k < nextSegment.length; k++) {
                            polyline.getPath().push(nextSegment[k]);
                            bounds.extend(nextSegment[k]);
                        }
                    }
                }
                polyline.setMap(map);
                //var marker = new google.maps.Marker({
                //    position: location,
                //    map: map,
                //});
                source = new google.maps.LatLng(lat1, long1);
                destination = new google.maps.LatLng(bus_origin_late, bus_origin_long);

                var service = new google.maps.DistanceMatrixService();
                service.getDistanceMatrix({
                    origins: [source],
                    destinations: [destination],
                    travelMode: google.maps.TravelMode.DRIVING,
                    unitSystem: google.maps.UnitSystem.METRIC,
                    avoidHighways: false,
                    avoidTolls: false
                }, function (response, status) {
                    // if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {

                    var distance = response.rows[0].elements[0].distance.text;
                    var duration = response.rows[0].elements[0].duration.text;

                    distance_temp = distance;
                    duration_temp = duration;
                    //  alert("distance : distance : " + distance_temp + " duration : duration : " + duration_temp);
                    var infowindow_new = new google.maps.InfoWindow({
                        content: "distance :" + distance_temp + " <br>duration :" + duration_temp + ""
                    });
                    infowindow_new.open(map, marker, marker_destion, marker_Source);

                });
                // alert(" distance :" + distance_temp + " : duration : " + duration_temp);

            } else {
                // window.alert('Directions request failed due to ' + status);
            }
        });

        //multitime_get_lat_long(caption_detail_map, coach_no_map, index_map);
        //var new_Location = new google.maps.LatLng(lat1, long1);
        //var mapOptions = {
        //    zoom: 14,
        //    center: new_Location,
        //    mapTypeControl: false,
        //    streetViewControl: false
        //}
        //var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

        //var image = new google.maps.MarkerImage(
        //                      'Images/marker_blue_circle.png',
        //                      null, // size
        //                      null, // origin
        //                      new google.maps.Point(8, 8), // anchor (move to center of marker)
        //                      new google.maps.Size(17, 17) // scaled size (required for Retina display icon)
        //                  );
        //var marker = new google.maps.Marker({
        //    flat: true,
        //    icon: image,
        //    map: map,
        //    optimized: false,
        //    position: new_Location,
        //    title: 'I am here',
        //    visible: true
        //});

        //marker.setAnimation(google.maps.Animation.BOUNCE);
        //var infowindow = new google.maps.InfoWindow({
        //   // content: "I'm here!"
        //});
        // infowindow.open(map, marker);
    } catch (e) {
        alert(e + "_Get_Map_ON_click_repersent_MAP");
    }
}