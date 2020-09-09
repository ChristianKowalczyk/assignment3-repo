//Christian Kowalczyk
//cjk2159
//reader.js - Screen Reader

//console.log("Accessibility Rocks!");

$(document).ready(function() {

    window.addEventListener('keydown', function(e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    });

    $("*:not(body)").hover(
        function(ev) {

            //EXECUTED WHEN MOUSE ENTERS AN ELEMENT

            $(this).addClass("highlight")

            $(document).keydown(function(e) {
                if (e.keyCode == 0 || e.keyCode == 32) {

                    if ($(".highlight").attr("alt")) {

                        console.log($(".highlight").attr("alt"));
                        speechSynthesis.speak(new SpeechSynthesisUtterance($(".highlight").attr("alt")));

                    } else if ($(".highlight").attr("src")) {

                        console.log($(".highlight").attr("src"));
                        speechSynthesis.speak(new SpeechSynthesisUtterance($(".highlight").attr("src")));

                    } else {
                        speechSynthesis.speak(new SpeechSynthesisUtterance($(".highlight").text()));
                    }

                }
            });

            ev.stopPropagation();

        },

        function(ev) {

            //EXECUTED WHEN MOUSE EXITS AN ELEMENT
            console.log("leving")

            $(".highlight").removeClass('highlight');

            //$(this).removeClass("highlight");

            speechSynthesis.cancel();

        })
})