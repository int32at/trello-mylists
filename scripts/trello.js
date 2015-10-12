$("body").keyup(function(e){
    if(e.which == 81) {
        var noFilter = $(".board-header-btn-filter-indicator").hasClass("hide");

        if(noFilter === true) {
            $(".js-list").each(function() {
                $(this).removeClass("hide");
            });
        }
        else {
            $(".js-list").each(function() {
                if($(".list-card", this).size() - $(".list-card.hide", this).size() === 0)
                    $(this).addClass("hide");
            });
        }
    }
});
