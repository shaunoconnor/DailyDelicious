/**
 * This does everything, i.e. load Delicious daily feed
 */
$(document).ready(function () {

    var username = localStorage["delicousDailyUsername"];
    var tag = localStorage["delicousDailyTag"];

    //var username = 'shaunoconnor';
    //var tag = 'daily';

    if (!username || !tag || username === '' || tag === '') {
        $("#output").html('<strong/><i><p>You need to set your delicious username and tag first!</p></i></strong>');
    } else {

        $("#output").html('<strong/><i><p>Loading...</p></i></strong>');

        var url = "https://feeds.delicious.com/v2/json/" + username + "/" + tag + "?count=20&callback=?";

        console.log( 'url', url );

        var jqxhr = $.getJSON(url, function () {
            $("#output").html('<strong/><i><p>Callback...</p></i></strong>');
        });

        jqxhr.error(function () {
            $("#output").html('<strong/><i><p>Error</p></i></strong>');
        });

        jqxhr.complete(function (data) {
            $("#output").html('<strong/><i><p>Complete</p></i></strong>');
        });

       jqxhr.success(function (data) {

            $("#output").html('<strong/><i><p>Success!</p></i></strong>');

            $.each(data, function (i, item) {

                console.log( 'item.u : ', item.u );

                chrome.tabs.create({
                    active:false,
                    url: item.u
                },

                function () {});
            });

            //window.close();
        });
    }
});