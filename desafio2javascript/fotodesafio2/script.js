function toggleBorder() {
    var imageContainer = document.querySelector(".image-container");
    imageContainer.classList.toggle("bordered");

    var hasBorder = imageContainer.classList.contains("bordered");

    if (hasBorder) {
        imageContainer.querySelector("img").style.border = "2px solid red";
    } else {
        imageContainer.querySelector("img").style.border = "none";
    }
}
