$(document).ready(function () {
    $('#headerTop').load("include/_shared/HeaderTop.html");
    $('#menu').load("include/_shared/menu.html");
    $('#menuLeft').load("include/_shared/MenuLeft.html");
    $('#footer').load("include/_shared/Footer.html");


    setTimeout(() => {
        $('#images').load("include/_shared/images.html");
        $('#plans').load("include/_shared/plans.html");
        $('#massShedule').load("include/_shared/MassSchedule.html");
        $('#links').load("include/_shared/Links.html");    
    }, 500);
  
 
    setTimeout(() => {
        $("#mnuTrangChu, #mnuTinTuc, #mnuHinhAnh, #mnuGioLe, #mnuLienLac").click(function () {
            ShowLoading();
        });      
        $("a").not("#mnuHoiDoan,#BacktoTop,#divContact a").click(function () {
            ShowLoading();        
        });
    }, 500);

});

function getQSValue( url) {
    key = 'p';
    query_string = url.split('?');
    string_values = query_string[1].split('&');
    for (i = 0; i < string_values.length; i++) {
        if (string_values[i].match(key))
            req_value = string_values[i].split('=');
    }
    var file = "include/" + req_value[1] + ".html";
    //return req_value[1];
    return file;
}


function ShowLoading() {
    $("#iconLoading").show();
}