let clockUpdate = setInterval(function() {

    
    var nowSeconds = new Date().getSeconds();
    var nowMinutes = new Date().getMinutes();
    var nowHours = new Date().getHours();

    if (nowSeconds < 10) {
        nowSeconds = "0" + nowSeconds;
    };

    if (nowMinutes < 10) {
        nowMinutes = "0" + nowMinutes;
    };

    if (nowHours > 12) {
        nowHours = nowHours - 12;
    };
    
    if (nowHours < 10) {
        nowHours = "0" + nowHours;
    };

    var date = `${nowHours}:${nowMinutes}:${nowSeconds}`
    document.getElementById("date").textContent = date;

    var nowSecondsDeg = (nowSeconds / 60) * 360;
    var nowMinutesDeg = (nowMinutes / 60) * 360;
    var nowHoursDeg = (nowHours / 60) * 360;
    
    let secondRotation = function() {
        var sec = document.getElementById("second");
        sec.style.transform = `rotate(${nowSecondsDeg}deg)`;
    };
    
    let minuteRotation = function() {
        var min = document.getElementById("minute");
        min.style.transform = `rotate(${nowMinutesDeg}deg)`;
    };
    
    let hourRotation = function() {
        var hour = document.getElementById("hour");
        hour.style.transform = `rotate(${nowHoursDeg}deg)`;
    };
    secondRotation();
    minuteRotation();
    hourRotation();
}, 1000);

document.addEventListener("DOMContentLoaded", function(){
    
    let clockUpdateStart = function() {
        var nowSecondsStart = new Date().getSeconds();
        var nowMinutesStart = new Date().getMinutes();
        var nowHoursStart = new Date().getHours();

        if (nowSecondsStart < 10) {
            nowSecondsStart = "0" + nowSecondsStart;
        };

        if (nowMinutesStart < 10) {
            nowMinutesStart = "0" + nowMinutesStart;
        };

        if (nowHoursStart > 12) {
            nowHoursStart = nowHoursStart - 12;
        };
        
        if (nowHoursStart < 10) {
            nowHoursStart = "0" + nowHoursStart;
        };

        console.log(nowHoursStart)

        var date = `${nowHoursStart}:${nowMinutesStart}:${nowSecondsStart}`
        // console.log(date);
        document.getElementById("date").textContent = date;

        var nowSecondsDegStart = (nowSecondsStart / 60) * 360;
        var nowMinutesDegStart = (nowMinutesStart / 60) * 360;
        var nowHoursDegStart = (nowHoursStart / 60) * 360;
        
        let secondRotationStart = function() {
            var sec = document.getElementById("second");
            sec.style.transform = `rotate(${nowSecondsDegStart}deg)`;
        };
        
        let minuteRotationStart = function() {
            var min = document.getElementById("minute");
            min.style.transform = `rotate(${nowMinutesDegStart}deg)`;
        };
        
        let hourRotationStart = function() {
            var hour = document.getElementById("hour");
            hour.style.transform = `rotate(${nowHoursDegStart}deg)`;
        };
        secondRotationStart();
        minuteRotationStart();
        hourRotationStart();
        document.getElementById("second").hidden = false;
        document.getElementById("minute").hidden = false;
        document.getElementById("hour").hidden = false;

    };

    clockUpdateStart();
});