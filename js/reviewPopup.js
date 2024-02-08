document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    showReviewPopup();
  }, 4000);

  document.getElementById("close-reviewPopup").addEventListener("click", function () {
    hideReviewPopup();
  });
});

function showReviewPopup() {
  var reviewPopup = document.getElementById("reviewPopup");
  reviewPopup.classList.add("show");
}

function hideReviewPopup() {
  var reviewPopup = document.getElementById("reviewPopup");
  reviewPopup.style.right = "-400px";
}
