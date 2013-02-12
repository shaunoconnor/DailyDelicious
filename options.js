$(document).ready(function() {

    $('#saveButton').click( function(){

        saveOptions();
     } );
    
    loadOptions();
});

function loadOptions() {

    var delicousDailyUsername = localStorage["delicousDailyUsername"];
    var delicousDailyTag = localStorage["delicousDailyTag"];

    $("#current").html("Current username : " + delicousDailyUsername + "<br />" + "Current tag : " + delicousDailyTag);
}

function saveOptions() {

    var usernameInput = document.getElementById("username").value;
    var tagInput = document.getElementById("tag").value;

    localStorage["delicousDailyUsername"] = usernameInput;
    localStorage["delicousDailyTag"] = tagInput;

    $("#current").html("Current username : " + usernameInput + "<br />" + "Current tag : " + tagInput);
}