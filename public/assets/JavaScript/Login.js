function LoginB() {
    var a = document.getElementById("id1").value;
    localStorage.setItem("myValue", a);
    window.location.href = "Player.html";
    var x = Math.floor(document.getElementById("id1").value / 1000);
    if (x == 11)
        document.getElementById("formId").action = "Player.html";
    else if (x == 1)
        document.getElementById("formId").action = "Coach.html";
    else
        window.alert("Invalid ID");
}