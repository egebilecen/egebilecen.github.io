const _GENERATED_ID_LIST = {};

function addWorkItem(workItem) {
    function randomId() {
        const len = 6;

        const id =
            "_" +
            Math.random()
                .toString(36)
                .substring(2, len + 2);

        if (_GENERATED_ID_LIST[id]) return randomId();

        _GENERATED_ID_LIST[id] = true;
        return id;
    }

    let carouselId =
        workItem.media !== null && workItem.media.length > 1 ? randomId() : "";

    let imageHtml =
        workItem.media.length == 0
            ? ""
            : workItem.media.length === 1
            ? `
        <img
            alt="${workItem.media[0].alt}"
            class="card-img-top"
            height="255"
            loading="lazy"
            src="${workItem.media[0].url}"
            width="100%"
        />
    `
            : `
        <div class="carousel slide" data-bs-ride="carousel" id="${carouselId}">
            <div class="carousel-indicators">
                <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#${carouselId}" type="button" aria-current="true"></button>
                <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#${carouselId}" type="button" class=""></button>
            </div>
            <div class="carousel-inner">
                ${workItem.media
                    .map((e, i) => {
                        const elemHtml =
                            e.isVideo === false
                                ? `
                                <img alt="${e.alt}" height="255" loading="lazy" src="${e.url}" width="100%">
                            `
                                : `
                                <video class="card-img-top" controls="">
                                    <source
                                        src="${e.url}"
                                        type="video/mp4"
                                    />
                                </video>
                            `;

                        return `
                            <div class="carousel-item${
                                i === 0 ? " active" : ""
                            }">
                                ${elemHtml}
                            </div>
                        `;
                    })
                    .join("")}
            </div>
            <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#${carouselId}" type="button">
                <span aria-hidden="true" class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#${carouselId}" type="button">
                <span aria-hidden="true" class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;

    const footerHtml =
        workItem.footer.text !== null
            ? `
        <small class="text-muted" eb-localization="${workItem.footer.localizationKey}">
            ${workItem.footer.text}
        </small>
    `
            : "";

    const buttonHtml =
        workItem.buttons === null || workItem.buttons.length === 0
            ? ""
            : `
        <div style="position: relative; left: 15px; bottom: 12px">
            <div class="btn-group">
                ${workItem.buttons
                    .map((e) => {
                        return `<a class="btn btn-sm btn-outline-secondary btn-portfolio-view" href="${e.url}" target="_blank">
                                    <i class="${e.icon}"></i>
                                    ${e.text}
                                </a>`;
                    })
                    .join("")}
            </div>
        </div>
    `;

    const html = `
        <div class="col portfolio-item --EB-- ${workItem.tags.join(" ")}">
            <div class="card shadow-sm h-100">
                ${imageHtml}
                <div class="card-body">
                    <p
                        class="fw-bold mb-1"
                        eb-localization="${workItem.title.localizationKey}"
                    >
                        ${workItem.title.text}
                    </p>
                    <ul
                        class="list-group list-group-horizontal custom-list portfolio-category-list"
                    ></ul>
                    <p
                        class="card-text"
                        eb-localization="${workItem.desc.localizationKey}"
                    >
                        ${workItem.desc.text}
                    </p>
                    ${footerHtml}
                </div>
                ${buttonHtml}
            </div>
        </div>
    `;

    $(".portfolio-item-list").append(html);
}

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

$(() => {
    for (let i = 0; i < WORK_LIST.length; i++) {
        addWorkItem(WORK_LIST[i]);
    }

    let mixer = mixitup(document.querySelector(".portfolio-item-list"), {
        selectors: {
            target: ".portfolio-item",
        },
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
        let filterClasses = portfolioItem.attr("class").split("--EB--")[1].trim().split(" ");

        for (let j = 0; j < filterClasses.length; j++) {
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

    $(".loader").fadeOut("slow");
});
