if (support === "ie8") { // shows the alert msg in IE8, IE7, IE6

    if ($.browser.msie && parseInt($.browser.version, 10) < 9) {

        $obj.prepend(iepanel);
        $obj.prepend(overlay);

    }

    if ($.browser.msie && parseInt($.browser.version, 10) === 6) {


        $("#ie-alert-panel").css("background-position", "-626px -116px");
        $obj.css("margin", "0");

    }


} else if (support === "ie7") { // shows the alert msg in IE7, IE6

    if ($.browser.msie && parseInt($.browser.version, 10) < 8) {

        $obj.prepend(iepanel);
        $obj.prepend(overlay);
    }

    if ($.browser.msie && parseInt($.browser.version, 10) === 6) {

        $("#ie-alert-panel").css("background-position", "-626px -116px");
        $obj.css("margin", "0");

    }

} else if (support === "ie6") { // shows the alert msg only in IE6

    if ($.browser.msie && parseInt($.browser.version, 10) < 7) {

        $obj.prepend(iepanel);
        $obj.prepend(overlay);

        $("#ie-alert-panel").css("background-position", "-626px -116px");
        $obj.css("margin", "0");

    }
}
