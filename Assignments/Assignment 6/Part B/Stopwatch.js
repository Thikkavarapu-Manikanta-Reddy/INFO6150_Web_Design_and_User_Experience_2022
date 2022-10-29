window.onload = () => {
    let hr = 0;
    let min = 0;
    let sec = 0;
    let totalSec = 0;

    let setIntervalId = null;

    function startStopWatch() {
        ++totalSec;
        hr = Math.floor(totalSec / 3600);
        min = Math.floor((totalSec - hr * 3600) / 60);
        sec = totalSec - (hr * 3600 + min * 60);

        hr = hr < 10 ? '0' + hr : hr;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;

        document.getElementById("hr").innerHTML = hr + ":";
        document.getElementById("min").innerHTML = min + ":";
        document.getElementById("sec").innerHTML = sec;
    }

    document.getElementById('btn-start').addEventListener('click', () => {
        setIntervalId = setInterval(startStopWatch, 1000);
    })

    document.getElementById('btn-stop').addEventListener('click', () => {
        if (setIntervalId)
            clearInterval(setIntervalId);
    });


    document.getElementById('btn-reset').addEventListener('click', () => {
        totalSec = 0;
        document.getElementById("hr").innerHTML = '00:';
        document.getElementById("min").innerHTML = '00:';
        document.getElementById("sec").innerHTML = '00';
        if (setIntervalId)
            clearInterval(setIntervalId);
    });
}