
(function (window, undefined) {

    var ninjaPoker = function (/*customSettings*/) {

        var that = new ninjaPoker.fn.init(/*customSettings*/);


        return that;
    };

    ninjaPoker.fn = ninjaPoker.prototype = {

        constructor: ninjaPoker,

        init: function (/*customSettings*/) {
            //return a reference to itself so you can chain things later!
            return this;
        },

        version: "0.0.1",

        cards: ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"],

        suites: [{
            suite: "&spades;",
            action: "pushups"
        },{
            suite: "&hearts;",
            action: "burpee"
        },{
            suite: "&diams;",
            action: "situps"
        },{
            suite: "&clubs;",
            action: "squats"
        }],

        getSuite: function () {
            return Math.ceil((Math.random() * 4));
        },

        getCard: function () {
            return Math.ceil((Math.random() * 13));
        }

        ////yes you can create chile objects
        //settings: {
        //    prop1: "Sample Module"
        //}

    };

    ninjaPoker.fn.init.prototype = ninjaPoker.fn;

    return (window.ninjaPoker = ninjaPoker);


})(window);


