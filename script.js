// GRAB THE BUTTON
const infoPage = document.getElementById('info-page');

//listen for the click event
infoPage.addEventListener('click', () => {
    //the browser looks inside the same folder for this file name 
    window.location.href = "nextpage.html";
});