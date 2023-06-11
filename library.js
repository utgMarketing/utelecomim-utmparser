(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.UtmParser = factory();
    }
}(window, function () {
    class UtmParser {

        static init() {
            const store = UtmParser.getAllStorage();

            const parsed = {
                utm_source: UtmParser.getParamFromUri("utm_source"),
                utm_campaign: UtmParser.getParamFromUri("utm_campaign"),
                utm_medium: UtmParser.getParamFromUri("utm_medium"),
                utm_term: UtmParser.getParamFromUri("utm_term"),
                utm_content: UtmParser.getParamFromUri("utm_content"),
            };

            if (parsed.utm_source) store.utm_source = parsed.utm_source;
            if (parsed.utm_campaign) store.utm_campaign = parsed.utm_campaign;
            if (parsed.utm_medium) store.utm_medium = parsed.utm_medium;
            if (parsed.utm_term) store.utm_term = parsed.utm_term;
            if (parsed.utm_content) store.utm_content = parsed.utm_content;

            if (parsed.utm_source === "") store.utm_source = null
            if (parsed.utm_campaign === "") store.utm_campaign = null;
            if (parsed.utm_medium === "") store.utm_medium = null;
            if (parsed.utm_term === "") store.utm_term = null;
            if (parsed.utm_content === "") store.utm_content = null;

            localStorage.setItem(UtmParser._storage_name, JSON.stringify(store));
        }

        static getUtmSource() {
            return UtmParser._get("utm_source");
        }

        static getUtmCampaign() {
            return UtmParser._get("utm_campaign");
        }

        static getUtmMedium() {
            return UtmParser._get("utm_medium");
        }

        static getUtmTerm() {
            return UtmParser._get("utm_term");
        }

        static getUtmContent() {
            return UtmParser._get("utm_content");
        }

        static _get(key) {
            return UtmParser.getParamFromStorage(key);
        }

        static getParamFromUri(key, fallback = null) {
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (let i = 0; i < vars.length; i++) {
                let pair = vars[i].split("=");
                if (pair[0] === key) {
                    return pair[1];
                }
            }

            return fallback;
        }

        static getParamFromStorage(key, fallback = null) {
            const store = UtmParser.getAllStorage();

            return store[key] || fallback
        }

        static getAllStorage() {
            try {
                return JSON.parse(localStorage.getItem(UtmParser._storage_name) || "{}")
            } catch (e) {
                return {};
            }
        }
    }

    UtmParser._storage_name = "__utm_storage";

    return UtmParser;
}));
