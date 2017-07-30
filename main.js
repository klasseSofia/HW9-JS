window.onload = function () {
    var Clock = function(tZone, elemId) {
        this.tZone = tZone;
        this.elem = document.getElementById(elemId);
        this.clockChange = true;
        this.elem.addEventListener('click', this.click.bind(this));
        setInterval(this.setTime.bind(this), 50);
    }

    Clock.prototype.setTime = function () {
        this.time = new Date();
        this.hours = this.time.getHours() - (-this.tZone);
        this.minutes = this.time.getMinutes();
        this.seconds = this.time.getSeconds();
        this.showTime();
    }

    Clock.prototype.showTime = function () {
        if (this.hours < 10) {
            this.hours = '0' + this.hours;
        }
        if (this.minutes < 10) {
            this.minutes = '0' + this.minutes;
        }
        if (this.seconds < 10) {
            this.seconds = '0' + this.seconds;
        }
        if (this.clockChange) {
            this.elem.innerHTML = this.hours + ':' + this.minutes + ':' + this.seconds;
        } else {
            this.elem.innerHTML = this.hours + ':' + this.minutes;
        }
    }

    Clock.prototype.click = function () {
        this.clockChange = !this.clockChange;
    }

    var clock1 = new Clock(' ', 'clock1');
    var clock2 = new Clock('+3', 'clock2');
}
