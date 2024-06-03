function updateClock(timezone, hourEl, minuteEl, secondEl) {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    hourEl.style.transform = `rotate(${hourDegrees}deg)`;
    minuteEl.style.transform = `rotate(${minuteDegrees}deg)`;
    secondEl.style.transform = `rotate(${secondDegrees}deg)`;
}

function updateAllClocks() {
    updateClock('Europe/London', document.getElementById('uk-hour'), document.getElementById('uk-minute'), document.getElementById('uk-second'));
    updateClock('Europe/Paris', document.getElementById('france-hour'), document.getElementById('france-minute'), document.getElementById('france-second'));
    updateClock('America/New_York', document.getElementById('usa-hour'), document.getElementById('usa-minute'), document.getElementById('usa-second'));
    updateClock('Asia/Ho_Chi_Minh', document.getElementById('vietnam-hour'), document.getElementById('vietnam-minute'), document.getElementById('vietnam-second'));
    updateClock('Europe/Berlin', document.getElementById('germany-hour'), document.getElementById('germany-minute'), document.getElementById('germany-second'));
}

setInterval(updateAllClocks, 1000);
updateAllClocks();