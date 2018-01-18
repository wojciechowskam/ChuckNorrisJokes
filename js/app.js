const urlApi = 'https://api.chucknorris.io/jokes/random';

$(function() {

    function jokes() {
        $.ajax
        ({
            url: urlApi
        }).done(function(r) {
            let joke = r.value;
            $(".jokeContent").text(joke);

        });
    };

    $(".jokeContent").hide();

    $("img").on("click", function() {
        $(".jokeContent").show();
        jokes();
    })
});
