/**
 * This does everything, i.e. load Delicious daily feed
 */

$(document).ready(function() {

    var username = 'shaunoconnor';//localStorage["delicousDailyUsername"];
    var tag = 'daily'//localStorage["delicousDailyTag"];

    if (!username || !tag || username == '' || tag == '') {
        $("#output").html('<strong/><i><p>You need to set your delicious username and tag first!</p></i></strong>');
    }

    else {

        $("#output").html('<strong/><i><p>Loading...</p></i></strong>');

        var jqxhr = $.getJSON("http://feeds.delicious.com/v2/json/" + username + "/" + tag + "?callback=?",

        function() {});

        jqxhr.error(function() {
            $("#output").html('<strong/><i><p>Error</p></i></strong>');
        });

        jqxhr.complete(function(data) {
            $("#output").html('<strong/><i><p>Complete</p></i></strong>');
        });

        jqxhr.success(function(data) {

            $.each(data,
            function(i, item) {

                chrome.tabs.create({
                    url: item.u
                },
                function() {});

            });

            window.close();
        });
    }
}
);