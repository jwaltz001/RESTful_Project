$(document).ready(function(){
    $(".modal").modal();
});
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

const backgroundPicArr = ['https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80','https://images.unsplash.com/photo-1525576064846-083dce8b33ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80','https://images.unsplash.com/photo-1519671845924-1fd18db430b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1252&q=80','https://images.unsplash.com/photo-1520970894104-c336b2013a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80','https://images.unsplash.com/photo-1559374182-9bf5cad16851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80','https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'];
// for (let i = 0; i < backgroundPicArr.length; i++) {
//     backgroundPicArr[i]
// }
$("#home-background").append("<img src="+backgroundPicArr[0]+"</img>");
$("#wine-index-background").append("<img src="+backgroundPicArr[1]+"</img>");
