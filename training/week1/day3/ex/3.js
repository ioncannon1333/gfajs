'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = "https//www.reddit.com/r/nevertellmethebots";
let x = "";

function repair(x) {
    x = x.replace("bots", "odds")
    x = x.replace("https//", "https://")
    return x;
}

url = repair(url)
console.log(url);