jQuery.fn.serializeObject = function () {
  var formData = {};
  var formArray = this.serializeArray();

  for(var i = 0, n = formArray.length; i < n; ++i)
    formData[formArray[i].name] = formArray[i].value;

  return formData;
};

var $form = $('form#join-form'),
    url = 'https://script.google.com/macros/s/AKfycbzqGTEhx9uyFubEhy4atY_2a3BePE9Zv1yyymA1A0owavypTM73/exec'

//     url = 'https://script.google.com/macros/u/1/s/AKfycbzqGTEhx9uyFubEhy4atY_2a3BePE9Zv1yyymA1A0owavypTM73/exec'

// https://docs.google.com/AKfycbzqGTEhx9uyFubEhy4atY_2a3BePE9Zv1yyymA1A0owavypTM73/formResponse'; //'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
    $form.reset();
  );
})



$('.carousel').carousel({
    interval: false
}); 