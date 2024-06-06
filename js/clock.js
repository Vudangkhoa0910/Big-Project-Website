function updateClocks() {
    var currentTime = moment();

    updateClock('uk', currentTime.tz('Europe/London'));
    updateClock('france', currentTime.tz('Europe/Paris'));
    updateClock('vietnam', currentTime.tz('Asia/Ho_Chi_Minh'));
    updateClock('usa', currentTime.tz('America/Los_Angeles'));
    updateClock('germany', currentTime.tz('Europe/Berlin'));

    setTimeout(updateClocks, 1000);
}

function updateClock(country, time) {
    var hours = time.hours();
    var minutes = time.minutes();
    var seconds = time.seconds();

    var hourAngle = (hours % 12) * 30 + (minutes / 2);
    var minuteAngle = minutes * 6;
    var secondAngle = seconds * 6;

    document.getElementById(country + '-hour').style.transform = 'rotate(' + hourAngle + 'deg)';
    document.getElementById(country + '-minute').style.transform = 'rotate(' + minuteAngle + 'deg)';
    document.getElementById(country + '-second').style.transform = 'rotate(' + secondAngle + 'deg)';
}

updateClocks();

