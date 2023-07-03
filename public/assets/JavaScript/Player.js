var b = localStorage.getItem("myValue");
var myImg = localStorage.getItem("myImage");

const ex = ["Chest & Biceps", "Shoulder & Triceps", "Back & Biceps", "Legs", "Cardio", "Rest day", "Rest day"];

function showAbout() {
    document.getElementById("About").style.zIndex = "2000";
    document.getElementById("About").style.opacity = "1";
}

function hideAbout() {
    document.getElementById("About").style.zIndex = "-1";
    document.getElementById("About").style.opacity = "0";
}

function showSchedule() {
    document.getElementById("showScheduleId").innerHTML = "<table id='ScheduleId'><tr><th>Sunday : </th><td>" + ex[0] + "</td> </tr> <tr><th>Monday : </th><td>" + ex[1] + "</td> </tr>  </tr> <tr><th>Tuesday : </th><td>" + ex[2] + "</td> </tr>  <tr><th>Wednesday : </th><td>" + ex[3] + "</td> </tr> <tr><th>Thursday : </th><td>" + ex[4] + "</td> </tr> <tr><th>Friday : </th><td>" + ex[5] + "</td> </tr> <tr><th>Saturday : </th><td>" + ex[6] + "</td> </tr></table>   <button onclick='hideSchedule()' id='hideScheduleId'> close </button>";
    document.getElementById("showScheduleId").style.zIndex = "2000";
    document.getElementById("showScheduleId").style.opacity = "1";
}

function hideSchedule() {
    document.getElementById("showScheduleId").style.zIndex = "-1";
    document.getElementById("showScheduleId").style.opacity = "0";
}

function showSubscription() {
    document.getElementById("showScheduleId").innerHTML = "<table  id='ScheduleId'><tr> <th>ID</th><th>Subscription</th></tr><tr><td>" + b + "</td><td>30 Days</td> <button onclick='hideSchedule()' id='hideScheduleId'> close </button>";
    document.getElementById("showScheduleId").style.zIndex = "2000";
    document.getElementById("showScheduleId").style.opacity = "1";
}

function x() {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
    let c = ex[d.getDay()];
    document.getElementById("playerId").innerHTML = "Player ID : " + b;
    document.getElementById("imgId").innerHTML = '<img class="thumb" src="' + myImg + '"/>'
    document.getElementById("TodaySchedule").innerHTML = day + " : ";
    document.getElementById("TodayExercise").innerHTML = c;

}
x();