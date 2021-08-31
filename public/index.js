$(document).ready(function(){
  console.log("ready");

  $( "#accordion" ).accordion({
    heightStyle: "fill",
    collapsible: "true"
  });

  $( "#tabs" ).tabs({
    heightStyle: "fill"
  });

  $( "#tabs2" ).tabs({
    heightStyle: "content"
  });
})