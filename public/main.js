"use strict";

$(document).ready(init);

function init(){
  $(".btn").click(convertToHTML);
}

function convertToHTML(e){
  e.preventDefault();
  // $("#html").empty();

  // var mdText = {mdText: $("#md").val()};
var mdText = $("#md").val();
  $.ajax({
    type: "POST",
    url: "/",
    data: {string : mdText},
  })

  // console.log(mdText)
  // $.post('/', mdText)
  .done(function(data){
    var htmlOutput = ($(`${data}`))
    $("#html").append(htmlOutput)
  })
  .fail(function(err){
    console.log(err)
  });

}


