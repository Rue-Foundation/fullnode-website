var $form = $('form#join-form'),
    url = 'https://script.google.com/macros/u/1/s/AKfycbz7047E3ffAoXqc1M2soYf4Innqu57nadMxsx6iLwr5QfuFpwz4/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})