﻿

var // http = rqHTTP(),
	lsCache = l2Storeagecache(),
	ve = ({
		"appName": "Ninja-Poker",
		"appPrefix": "Ninja-Poker-"
	}),
	pm = SPAPM({
		viewEngine: ve,
		cache: lsCache,
		"appPrefix": "Ninja-Poker-"
	}),

	http = rqHTTP(),

	ninjaPokerData = new NinjaPokerData(/* http, */ lsCache),

	// the analytics global is assumed to be instantiated via Segment.io snippet

	ninjaPoker = NinjaPoker({
	    services: {
	        "viewEngine": ve,
	        "Ninja-PokerData": ninjaPokerData
	}
	});

pm.setupAssets();


_spa = SPA({
    "AppContext": ninjaPoker,
	"viewEngine": ve,
	"pm": pm,
	"viewSelector": "[type='text/x--template']",
	"defaultPage": "index",
	"viewWrapper": "#main",
	"viewTransition": "slide",
	"defaultTitle": "Ninja Poker"
});

//pm.loadImport("home/deferred", "deferred");
