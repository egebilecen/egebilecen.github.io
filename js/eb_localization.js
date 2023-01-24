// Be sure to load JQuery before this class.
class EB_Localization
{
    constructor(initialLanguage, enableHtmlTags)
    {
        this.localizationKeyAttribute = "eb-localization";

        this.initialLanguage    = initialLanguage;
        this.enableHtmlTags     = enableHtmlTags;

        this.selectedLanguage   = undefined;
        this.localizationObject = {};
    }

    _setLocalization(language, localizationObject)
    {
        this.localizationObject[language] = localizationObject;
    }

    _getLocalization(language)
    {
        return this.localizationObject[language];
    }

    _getLocalizationText(language, localizationKey)
    {
        return this.localizationObject[language][localizationKey];
    }

    _getSelectedLocalizationText(localizationKey)
    {
        return this.localizationObject[this.selectedLanguage][localizationKey];
    }

    _useAvailableLocalization()
    {
        let preferredLanguages = navigator.languages;

        for(let i=0; i < preferredLanguages.length; i++)
        {
            var language = preferredLanguages[i].split("-")[0];
            if(language == this.initialLanguage) return;

            if(this._getLocalization(language) === undefined)
                continue;
            else
            {
                this.selectedLanguage = language;
                break;
            }
        }
    }

    loadLocalizationFromURL(url, language)
    {
        $.ajax({
            url: url,
            type: "GET",
            dataType : "JSON",
            async : false,
            success : (res) => {
                if(typeof(res) !== "object")
                {
                    console.error("EB_Localization.loadLocalizationFromURL() - Expected response to be object. Got "+typeof(res));
                    return;
                }

                this._setLocalization(language, res);
            },
            error : (res) => {
                console.error("EB_Localization.loadLocalizationFromURL() - Loading localization file failed. Status code: "+res.status+".");
            }
        });
    }

    changeLocalization(language, updateTranslations=true)
    {
        if(this._getLocalization(language) === undefined)
            return false;

        this.selectedLanguage = language;

        if(updateTranslations)
            this.localize();

        return true;
    }

    localize()
    {
        if(this.selectedLanguage === undefined)
            this._useAvailableLocalization();

        if(this._getLocalization(this.selectedLanguage) === undefined)
        {
            if(this.selectedLanguage !== undefined)
                console.error("EB_Localization.localize() - No localization found for \""+this.selectedLanguage+"\"!");
            
            return;
        }

        let elements = $("["+this.localizationKeyAttribute+"]");

        elements.each((i, elem) => {
            let localizationKey  = $(elem).attr(this.localizationKeyAttribute);
            let localizationText = this._getSelectedLocalizationText(localizationKey);

            if(localizationText === undefined) return;
            
            if(typeof(this.initialLanguage) === "string")
            {
                if(this._getLocalization(this.initialLanguage) === undefined)
                    this._setLocalization(this.initialLanguage, {});

                if(this._getLocalizationText(this.initialLanguage, localizationKey) === undefined)
                    this._getLocalization(this.initialLanguage)[localizationKey] = elem.innerHTML;
            }

            if(!this.enableHtmlTags)
                $(elem).text(localizationText);
            else
                $(elem).html(localizationText);
        });

        $(document).trigger("eb_localization:localize");
    }
}
