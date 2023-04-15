exports.getDate = function(){
    const today = new Date();
    const options = {
    weekday:"long",
    day : "numeric",
    month : "long"
    }
    const date = today.toLocaleDateString("en-us", options);
    return date;
}

exports.getDay = function(){
    const today = new Date();
    const options = {
    weekday:"long",
    }
    const day = today.toLocaleDateString("en-us", options);
    return day;
}

/*module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate(){
    let today = new Date();
    let options = {
    weekday:"long",
    day : "numeric",
    month : "long"
    }
    let date = today.toLocaleDateString("en-us", options);
    return date;
}

function getDay(){
    let today = new Date();
    let options = {
    weekday:"long",
    }
    let day = today.toLocaleDateString("en-us", options);
    return day;
}
*/
