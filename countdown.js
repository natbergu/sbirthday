//Set the variables to compare against today to determine what to write
var checkDay = new Date().getDate();
var checkMonth = new Date().getMonth();
var checkYear = new Date().getFullYear();

//Set the age numbers on the website to his age (born in 1961)
document.getElementById("age").innerHTML = (checkYear - 1961);
document.getElementById("age2").innerHTML = (checkYear - 1961);

//If today isn't November 9th or November 10th, change the [day] in "[day] (to be) your birthday" to November 9th
if ((checkDay !== 9 && checkDay !== 10) || checkMonth !== 10) {
    document.getElementById("day").innerHTML = "November 9th";
}

//If today is the day after November 9th, change the [day] in "[day] (to be) your birthday" to Yesterday
if (checkDay == 10 && checkMonth == 10) {
    document.getElementById("day").innerHTML = "Yesterday";
}

// Set the date we're counting down to
var countDownDate = new Date("Nov 9, " + checkYear + " 09:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
    //If it is currently counting down, change the tense of (to be) in "[day] (to be) your birthday" to future
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

    // If the count down is over, start counting up
    if (distance < 0) {
        //If it is counting up, change the title of the countdown to reflect the change
        document.getElementById("untilafter").innerHTML = "Time since you turned";

        //If it is currently counting up, check for day of and change tense
        if ((checkDay !== 9) || checkMonth !== 10) {
            //If it isn't the day of, change the tense of (to be) in "[day] (to be) your birthday" to past
            document.getElementById("pasttense").innerHTML = "was";
        } else {
            //If it is the day of, change the tense of (to be) in "[day] (to be) your birthday" to present
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
