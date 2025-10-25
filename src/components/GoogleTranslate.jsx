import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    async function detectUserLanguage() {
      let userLang = navigator.language.split("-")[0] || "en";

      try {
        if (userLang === "en") {
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();

          if (data && data.country) {
            const countryToLangMap = {
              FR: "fr",
              DE: "de",
              IT: "it",
              ES: "es",
              PT: "pt",
              RO: "ro",
              PL: "pl",
              NL: "nl",
              RU: "ru",
              AR: "ar",
              TR: "tr",
              UA: "uk",
              BG: "bg",
              EL: "el",
              HU: "hu",
              LT: "lt",
              LV: "lv",
              SK: "sk",
              SL: "sl",
              CS: "cs",
              SV: "sv",
              FI: "fi",
              NO: "no",
              DA: "da",
              HR: "hr",
              ZH: "zh-CN",
              JA: "ja",
              KO: "ko",
              HI: "hi",
              BN: "bn",
              TH: "th",
              VI: "vi",
            };

            if (countryToLangMap[data.country]) {
              userLang = countryToLangMap[data.country];
            }
          }
        }
      } catch (err) {
        console.warn("IP language detection failed:", err);
      }

      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "af,ar,bn,bg,ca,cs,da,de,el,en,es,fr,hi,it,ja,ko,nl,pl,pt,ro,ru,sv,th,tr,uk,vi,zh-CN,zh-TW",
            autoDisplay: true,
          },
          "google_translate_element"
        );

        if (userLang !== "en") {
          const interval = setInterval(() => {
            const combo = document.querySelector(".goog-te-combo");
            if (combo) {
              combo.value = userLang;
              combo.dispatchEvent(new Event("change"));
              clearInterval(interval);
            }
          }, 400);
        }
      };

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    detectUserLanguage();
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }}></div>;
}
