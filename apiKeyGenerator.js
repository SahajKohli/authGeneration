

function getAPIKey() {

    var currentDate = new Date().getTime();

    var APIKEY = 'xxxxxx-xxxxxx-xxxx-xxxxxx'.replace(/[xy]/g, function(c){
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    })

    return APIKEY

}