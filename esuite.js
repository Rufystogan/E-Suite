//get & Display local time and day
        setInterval(()=>{
            const current_time = moment();
            const local_day = current_time.format('dddd'); 
            const local_time = current_time.format('LTS');
            document.getElementById("localTime").innerHTML = local_time;
            document.getElementById("localDay").innerHTML = local_day;
            //console.log(local_time);
            }), 1000;

//Get current date
        var currentDate = document.getElementById("currentDate");
        let today = new Date().toLocaleDateString();

//Display current date
        currentDate.innerHTML = (today);

//notification
var submitClick = function(){
  $.notify({
        // options
        title: '<strong>Your booking request has been sent</strong>',
        message: "<br>Please wait for confirmation email from LiveWIRE Admin<br>You will be redirected to homepage in 3 seconds",
        icon: 'glyphicon glyphicon-ok',
        target: '_blank'
        },{
        // settings
        element: 'body',
        //position: null,
        type: "success",
        //allow_dismiss: true,
        //newest_on_top: false,
        showProgressbar: false,
        placement: {
                from: "top",
                align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 3300,
        timer: 1000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutRight'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
});
  setTimeout(function () {
    window.location=("index.html")
  }, 3000);
}

//condition enabling Submit Button
var inputs = $("form input, form select");

var validateInputs = function validateInputs(inputs) {
  var validForm = true;
  inputs.each(function(index) {
    var input = $(this);
    if (!input.val() || !$("input:checkbox[name='termCheck']").is(':checked')){
      $("#bookSubmit").attr("disabled", "disabled");
      validForm = false;
    }
  });
  return validForm;
}

//disable submit button
inputs.change(function() {
  if (validateInputs(inputs)) {
    $("#bookSubmit").removeAttr("disabled");
  }
});

 //disable previous datepick
 $(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
    
    $('#date').attr('min', minDate);
});
