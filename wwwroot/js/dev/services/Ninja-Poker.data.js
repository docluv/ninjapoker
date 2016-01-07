
;

(function (undefined) {

    "use strict";

    var NinjaPokerData = DataService.extend({

        init: function (cache) {

            this.cache = cache;

            this._super();

        },

        version: "0.0.1",

        cache: undefined,

        API_ROOT: "api/",

        ttl: 30000, //30 seconds, for development purposes

        appKey: "ninja-poker-",

        getCachedData: function (options) {

            var appData = this,
                cachedData = appData.cache.getObject(appData.appKey + options.cacheKey);

            if (cachedData) {

                if (options.callback) {
                    options.callback(cachedData);
                    return;
                }
            }

            return this.getData({
                url: options.url,
                callback: options.callback
            });

        },


        FORM_ENCODED: "application/x-www-form-urlencoded",
        JSON_ENCODED: "application/x-json",

        buildAjaxDataQueryString: function (data) {
            var name, qs = "";

            for (name in data) {

                if (qs === "") {
                    qs += name + "=" + data[name];
                } else {
                    qs += "&" + name + "=" + data[name];
                }

            }

            return qs;

        },

        defaultHeaders: {
            contentType: 'application/x-www-form-urlencoded',
            accept: {
                '*': 'text/javascript, text/html, application/json, text/xml, */*'
               , xml: 'application/xml, text/xml'
               , html: 'text/html'
               , text: 'text/plain'
               , json: 'application/json, text/javascript'
               , js: 'application/javascript, text/javascript'
            }
        },

        getAcceptHeader: function (type) {

            if (!type || type === "") {
                return this.defaultHeaders.accept["*"];
            }

            return this.defaultHeaders.accept[type];

        },

        errorCallback: function (err) {

            err = JSON.parse(err.response);

            console.error(err.message);


        },

        serialize: function (obj, join) {
            var str = [], p;

            if (join === undefined) {
                join = true;
            }

            for (p in obj) {

                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }

            if (join) {

                return str.join("&");

            }

            return str;
        },
       
        ajaxSettings: {
            cache: false,
            dataType: "json",
            method: 'get',
            type: 'json',
            contentType: 'application/json',
            success: function (d) { }
        },

        failCallback: function (data) {

            if (data.responseText) {
                console.error(JSON.stringify(data.responseText));
            }

        },
          
        doAJAX: function (options) {

            var that = this,
                xhr = new XMLHttpRequest();

            options = $.extend({},
                    this.ajaxSettings,
                    options);

            if (options.data) {
                options.url += ("?" + this.buildAjaxDataQueryString(options.data));
            }

            options.url = this.API_ROOT + options.url;

            xhr.open(options.method, options.url);
            xhr.setRequestHeader("Content-Type", options.contentType);
            xhr.setRequestHeader("Accept", this.getAcceptHeader(options.type));

            //xhr.addEventListener("progress", function () { console.info("progress"); }, false);
            //xhr.addEventListener("load", function () { console.info("load"); }, false);
            //xhr.addEventListener("error", function () { console.info("error"); }, false);
            //xhr.addEventListener("abort", function () { console.info("abort"); }, false);

            xhr.onreadystatechange = function (e) {
                if (xhr.readyState === 4 && xhr.status == 200 && options.success) {
                    options.success.call(that, JSON.parse(this.responseText));
                }
            }

            xhr.send();

        },

        getData: function (options) {

            var ajaxOptions = $.extend({},
                                this.ajaxSettings,
                                options);

            if (options.type === "jsonp") {
                delete ajaxOptions.contentType;
                delete ajaxOptions.dataType;
            }

            this.doAJAX(ajaxOptions);

        },

        postData: function (options) {

            options.method = "POST";

            this.doAJAX(options);

        },

        putData: function (options) {
            
            options.method = "PUT";

            this.doAJAX(options);

        },

        deleteData: function (options) {
            
            options.method = "DELETE";

            this.doAJAX(options);

        }


        /*
         * 
         * Add Application specific CRUD methods here
         * 
         */


            getworkouts: function (callback) {
            
                return this.getCachedData({
                    url: "workout",
                    cacheKey: "workouts-",
                    callback: callback
                });

            },

            getworkout: function (workoutId, callback) {
            
                return this.getCachedData({
                    url: "workout/" + workoutId,
                    cacheKey: "workout-" + workoutId,
                    callback: callback
                });

            },

            addworkout: function (workoutId, workout, callback) {
            
                return this.postData({
                    url: "workout/" + workoutId,
                    callback: callback
                });
            
            },

            udpateworkout: function (workout, callback) {
            
                return this.putData({
                    url: "workout/" + workout.workoutId,
                    callback: callback
                });
            
            },

            deleteworkout: function (workoutId, callback) {
            
                return this.deleteData({
                    url: "workout/" + workoutId,
                    callback: callback
                });
            
            },



            getexercises: function (callback) {
            
                return this.getCachedData({
                    url: "exercise",
                    cacheKey: "exercises-",
                    callback: callback
                });

            },

            getexercise: function (exerciseId, callback) {
            
                return this.getCachedData({
                    url: "exercise/" + exerciseId,
                    cacheKey: "exercise-" + exerciseId,
                    callback: callback
                });

            },

            addexercise: function (exerciseId, exercise, callback) {
            
                return this.postData({
                    url: "exercise/" + exerciseId,
                    callback: callback
                });
            
            },

            udpateexercise: function (exercise, callback) {
            
                return this.putData({
                    url: "exercise/" + exercise.exerciseId,
                    callback: callback
                });
            
            },

            deleteexercise: function (exerciseId, callback) {
            
                return this.deleteData({
                    url: "exercise/" + exerciseId,
                    callback: callback
                });
            
            },



            gethistorys: function (callback) {
            
                return this.getCachedData({
                    url: "history",
                    cacheKey: "historys-",
                    callback: callback
                });

            },

            gethistory: function (historyId, callback) {
            
                return this.getCachedData({
                    url: "history/" + historyId,
                    cacheKey: "history-" + historyId,
                    callback: callback
                });

            },

            addhistory: function (historyId, history, callback) {
            
                return this.postData({
                    url: "history/" + historyId,
                    callback: callback
                });
            
            },

            udpatehistory: function (history, callback) {
            
                return this.putData({
                    url: "history/" + history.historyId,
                    callback: callback
                });
            
            },

            deletehistory: function (historyId, callback) {
            
                return this.deleteData({
                    url: "history/" + historyId,
                    callback: callback
                });
            
            },



    });

    return (window.EventsNearMeData = EventsNearMeData);

}());






