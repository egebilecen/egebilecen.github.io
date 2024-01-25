let localizationUseHTML = true;
let localization = new EB_Localization("en", localizationUseHTML);

$(window).on("load", function () {
    localization.loadLocalizationFromURL("translations/tr.json", "tr");
    localization.localize();

    if (localization.selectedLanguage !== undefined) {
        $("#current-language").text(
            localization.selectedLanguage.toUpperCase()
        );
        $("input[name='language']").val(localization.selectedLanguage);
    }

    $(".loader").fadeOut("slow");
});

$(() => {
    let mixer = mixitup(document.querySelector(".portfolio-item-list"), {
        selectors: {
            target: ".portfolio-item",
        },
    });

    // Events
    $(document).on("keyup", (e) => {
        if (e.keyCode == 27 && $("#img_box").css("display") != "none")
            // ESC
            $("#img_box").click(); // close image box

        if (e.keyCode == 113)
            // F2
            $("input[name='language']").click();
    });

    $(".portfolio-filter > li").on("click", (e) => {
        let elem = e.currentTarget;

        $(".portfolio-filter > li.selected").removeClass("selected");
        $(elem).addClass("selected");
    });

    $(".portfolio-item > * img").on("click", (e) => {
        let $this = e.currentTarget;
        img_box($this);

        // let src = $($this).attr("src");
        // window.open(src, "_blank");
    });

    $("input[name='language']").on("change", (e) => {
        $this = e.currentTarget;

        if ($($this).val() == "tr") {
            $($this).val("en");
        } else $($this).val("tr");

        localization.changeLocalization($($this).val());
        $("#current-language").text(
            localization.selectedLanguage.toUpperCase()
        );
    });

    // Portfolio
    let portfolioItems = $(".portfolio-item");
    for (let i = 0; i < portfolioItems.length; i++) {
        let portfolioItem = $(portfolioItems[i]);
        let categoryList = portfolioItem.find(".portfolio-category-list");
        let filterClasses = portfolioItem.attr("class").split(" ");

        for (let j = 2; j < filterClasses.length; j++) {
            let filterClass = filterClasses[j];

            let portfolioFilter = $(
                ".portfolio-filter > li[data-filter='." +
                    filterClass +
                    "'] > span"
            );
            let classLabel = portfolioFilter.text();
            categoryList.append(
                '<li class="list-group-item"' +
                    (portfolioFilter.attr("eb-localization") !== undefined
                        ? ' eb-localization="' +
                          portfolioFilter.attr("eb-localization") +
                          '"'
                        : "") +
                    ">" +
                    classLabel +
                    "</li>"
            );
        }
    }

    $(".portfolio-filter > li[data-filter='all'] > span.item-total").text(
        "(" + document.querySelectorAll(".portfolio-item").length + ")"
    );

    let filters = $(".portfolio-filter > li");
    for (let i = 1; i < filters.length; i++) {
        let filterElem = $(filters[i]);
        let filter = filterElem.attr("data-filter");
        let filterSelector =
            ".portfolio-filter > li[data-filter='" +
            filter +
            "'] > .item-total";

        $(filterSelector).text(
            "(" +
                document.querySelectorAll(".portfolio-item" + filter).length +
                ")"
        );
    }

    $(".carousel").carousel({
        interval: false,
    });
});
