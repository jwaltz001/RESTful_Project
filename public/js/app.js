$(document).ready(function(){
    $(".modal").modal();
});
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
 $(document).ready(function() {
      $('textarea#tasting-comments').characterCounter();
    });

const backgroundPicArr = [
'https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
'https://images.unsplash.com/photo-1525576064846-083dce8b33ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
"https://images.unsplash.com/photo-1534655882117-f9eff36a1574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
"https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1478427707912-74c995887fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
'https://images.unsplash.com/photo-1519671845924-1fd18db430b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1252&q=80',
'https://images.unsplash.com/photo-1520970894104-c336b2013a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
'https://images.unsplash.com/photo-1559374182-9bf5cad16851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80',
'https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'];
//Rotating home background?
// for (let i = 0; i < backgroundPicArr.length; i++) {
//     backgroundPicArr[i]
// }
$("#home-background").append("<img src="+backgroundPicArr[0]+"</img>");
$("#wine-index-background").append("<img src="+backgroundPicArr[1]+"</img>");
$("#new-wine-background").append("<img src="+backgroundPicArr[3]+"</img>");
$("#show-wine-background").append("<img src="+backgroundPicArr[4]+"</img>");
$("#edit-wine-background").append("<img src="+backgroundPicArr[2]+"</img>");
