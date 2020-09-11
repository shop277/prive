$(document).ready(function () {
  var date = moment();
      today = $(".date");
      format = date.locale('fr').format("dddd, MMM Do YYYY");

  today.text(format)
});
