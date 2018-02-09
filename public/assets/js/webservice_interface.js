

// middle funcation to call webservice
function webservice_inner_call(jsonobj, sucesscallback, failcallback) {

    // alert(JSON.stringify(jsonobj));
    var getdata = new Webservicecall_POST(global_url + 'PortAppWebService.asmx/ComanWebservice',
					'data=' + encodeURIComponent(JSON.stringify(jsonobj)),
					localsuccess, localfail);
    getdata.callOtherDomain();

    function localsuccess(e) {
        var myArray = JSON.parse(e.responseText);
        var status = myArray[0].status;
        var message = myArray[0].message;
        if (status == "1") {
            if (jsonobj[0].sp_name == "GetLogData_Port") {
                var myArray = JSON.parse(e.responseText);
                sucesscallback(myArray[0].f_data);
            }
            else {
                sucesscallback(e.responseText);
            }
        }
        else {
            failcallback(message);
        }
    }

    function localfail(e) {
        var myArray = JSON.parse(e.responseText);
        var message = myArray[0].message;
        failcallback(message);
    }

}
