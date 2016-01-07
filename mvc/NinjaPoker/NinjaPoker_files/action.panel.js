
;

(function (window, undefined) {

    /*

    button = {
        Text: "",
        callback: function(){},
        btnClass: "orange btn myButton",
        selector: ".myButton"
    };

    */


    var ActionPanel = function (panelSelector) {

        var that = new ActionPanel.fn.init();

        if (!panelSelector) {
            return;
        }

        that.panelSelector = panelSelector;
        that.panel = document.querySelector(that.panelSelector);

        if (!that.panel) {
            return;
        }

        return that;
    };

    ActionPanel.fn = ActionPanel.prototype = {

        constructor: ActionPanel,

        init: function () {

            return this;
        },

        version: "0.0.1",

        buttons: [],
        panel: undefined,
        panelSelector: undefined,
        
        setButtons: function (buttons) {

            var that = this,
                i = 0,
                btn = "",
                callback = {},
                button;

            if (buttons.length === undefined) {
                buttons = [buttons];
            }

            that.buttons = buttons;

            //create button elements and add them to the panel
            for (var i = 0; i < buttons.length; i++) {

                btn += "<div class='"+ buttons[i].btnClass
                                    + "'>" + buttons[i].Text + "</div>";

            }

            that.panel.innerHTML = btn;

            for (var i = 0; i < buttons.length; i++) {

                btn = buttons[i];

                button = document.querySelector(btn.selector);

                if (typeof btn.callback === "string") {
                    callback = that.getCallback(btn.callback);
                } else if (typeof btn.callback === "function") {
                    callback.callback = btn.callback;
                }

                if (typeof callback.callback === "function") {

                    button.addEventListener("click", function (e) {

                        if (callback.callback) {
                            callback.callback.call(callback.ctx || this, e);
                        }

                    }); //this will not work because I need a function to parse the obj.func syntax

                }

            }

        },

        getCallback: function (cbPaths, params) {

            var callback, a, ctx;

            cbPaths = cbPaths.split(".");

            callback = window[cbPaths[0]];
            ctx = window;

            for (a = 1; a < cbPaths.length; a++) {

                if (a === 1) {
                    ctx = callback;
                }

                callback = callback[cbPaths[a]];
            }

            return {
                callback: callback,
                ctx: ctx
            };
        },

        getButtons: function (buttons) {

            var that = this;

            return that.buttons;

        },

        clearButtons: function () {

            var that = this;

            if (that.panel) {
                that.panel.innerHTML = "";
            }

            that.buttons = [];

        }


    };


    // Give the init function the ActionPanel prototype for later instantiation
    ActionPanel.fn.init.prototype = ActionPanel.fn;


    //create the global object used to create new instances of ActionPanel
    return (window.ActionPanel = ActionPanel);


})(window);


