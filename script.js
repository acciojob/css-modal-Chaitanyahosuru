//your JS code here. If required.
// Get the modal, button and close element
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModal");
var closeModalBtn = document.getElementsByClassName("close-modal")[0];

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
