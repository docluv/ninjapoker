
;

(function (window, undefined) {

    "use strict";

    var NinjaPoker = function (customSettings) {

        return new NinjaPoker.fn.init(customSettings);

    };

    NinjaPoker.fn = NinjaPoker.prototype = {

        constructor: NinjaPoker,

        init: function (config) {

            var app = this;

            app.parseServices(config.services);

            if (!app.viewEngine) {
                throw {
                    "name": "SPA Exception",
                    "message": "You must designate a viewEngine"
                };
            }


            return app;
        },

        parseServices: function (services) {

            for (var service in services) {

                if (typeof services[service] === "function") {
                    this[service] = new services[service]();
                } else {
                    this[service] = services[service];
                }

            }

        },


        version: "0.0.1"
    };


    // Give the init function the NinjaPoker prototype for later instantiation
    NinjaPoker.fn.init.prototype = NinjaPoker.fn;

    return (window.NinjaPoker = NinjaPoker);

}(window));






