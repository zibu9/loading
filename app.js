const handlePageLoad = () => {
    document.querySelectorAll(".content").forEach(function(element) {
        element.style.display = "block";
    });
    document.querySelector(".loader-wrapper").style.display = "none";
}


//window.addEventListener("load", handlePageLoad);

setTimeout(handlePageLoad, 3000);
