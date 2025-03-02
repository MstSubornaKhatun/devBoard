// one notification
document.getElementById("sendN").addEventListener("click", function() {
    let notificationText = document.getElementById("nText");

    let currentTime = new Date().toLocaleTimeString();
    let newNotification = document.createElement("p");
    notificationText.innerText = "You have completed the task Fix Mobile Button Issue at " + currentTime;

    notificationText.classList.add("active"); 
    document.getElementById("sendN").setAttribute("disabled", "true");
});

document.getElementById("clearN").addEventListener("click", function() {
    let notificationText = document.getElementById("nText");
    notificationText.innerText = "";
    notificationText.classList.remove("active"); 
});

// two notification
document.getElementById("sendNtwo").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextTwo");

    let currentTime = new Date().toLocaleTimeString();
    let newNotification = document.createElement("p");
    notificationText.innerText = "You have completed the task Add Pay Success Modal at " + currentTime;

    notificationText.classList.add("active"); 
    document.getElementById("sendNtwo").setAttribute("disabled", "true");
});

document.getElementById("clearN").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextTwo");
    notificationText.innerText = "";
    notificationText.classList.remove("active"); 
});

// three notification
document.getElementById("sendNthree").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextThree");

    let currentTime = new Date().toLocaleTimeString();
    let newNotification = document.createElement("p");
    notificationText.innerText = "You have completed the task Add new reaction &#x1F932; at " + currentTime;

    notificationText.classList.add("active"); 
    document.getElementById("sendNthree").setAttribute("disabled", "true");
});

document.getElementById("clearN").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextThree");
    notificationText.innerText = "";
    notificationText.classList.remove("active"); 
});

// four notification
document.getElementById("sendNfour").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextFour");

    let currentTime = new Date().toLocaleTimeString();
    let newNotification = document.createElement("p");
    notificationText.innerText = "You have completed the task Fix Mobile Button Issue at " + currentTime;

    notificationText.classList.add("active"); 
    document.getElementById("sendNfour").setAttribute("disabled", "true");
});

document.getElementById("clearN").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextFour");
    notificationText.innerText = "";
    notificationText.classList.remove("active"); 
});

// five notification
document.getElementById("sendNfive").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextFive");

    let currentTime = new Date().toLocaleTimeString();
    let newNotification = document.createElement("p");
    notificationText.innerText = "You have completed the task Integrate AI search at " + currentTime;

    notificationText.classList.add("active"); 
    document.getElementById("sendNfive").setAttribute("disabled", "true");
});

document.getElementById("clearN").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextFive");
    notificationText.innerText = "";
    notificationText.classList.remove("active"); 
});

// six notification
document.getElementById("sendNsix").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextSix");

    let currentTime = new Date().toLocaleTimeString();
    let newNotification = document.createElement("p");
    notificationText.innerText = "You have completed the task Polygon Tech at " + currentTime;

    notificationText.classList.add("active"); 
    document.getElementById("sendNsix").setAttribute("disabled", "true");
});

document.getElementById("clearN").addEventListener("click", function() {
    let notificationText = document.getElementById("nTextSix");
    notificationText.innerText = "";
    notificationText.classList.remove("active"); 
});
