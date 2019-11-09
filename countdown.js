var checkDay = new Date().getDate();
var checkMonth = new Date().getMonth();
var checkYear = new Date().getFullYear();

document.getElementById("age").innerHTML = (checkYear - 1961);
document.getElementById("age2").innerHTML = (checkYear - 1961);

if ((checkDay !== 9 && checkDay !== 10) || checkMonth !== 10) {
    document.getElementById("day").innerHTML = "November 9th";
}

if (checkDay == 10 && checkMonth == 10) {
    document.getElementById("day").innerHTML = "Yesterday";
}

// Set the date we're counting down to
var countDownDate = new Date("Nov 9, " + checkYear + " 09:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

    document.getElementById("pasttense").innerHTML = "will be";

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, improvise
    if (distance < 0) {
        //Update h2 to make sense
        document.getElementById("untilafter").innerHTML = "Time since you turned";
        if ((checkDay !== 9 && checkDay !== 10) || checkMonth !== 10) {
            document.getElementById("pasttense").innerHTML = "was";
        } else {
            document.getElementById("pasttense").innerHTML = "is";
        }

        // Get today's date and time
        now = new Date().getTime();

        // Find the distance between the count down date and now
        distance = now - countDownDate;

        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}, 1000);
