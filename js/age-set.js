

$(function() {


  const birthdate = new Date(2005, 6, 16);
  var today = new Date();
  const diffTime = Math.abs(today - birthdate);
  const diffYear = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365)); 

  console.log(diffYear);

  $(".age").text("16");

});