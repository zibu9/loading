const handlePageLoad = () => {
    document.querySelectorAll(".content").forEach(function(element) {
        element.style.display = "block";
    });
    document.querySelector(".loading-page").style.display = "none";
}

setTimeout(handlePageLoad, 3000);
