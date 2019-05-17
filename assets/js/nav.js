window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 60) {
        document.querySelector(".companylogo").style.height = "62px";
        document.querySelector(".navbar-brand").style.padding = "0px";
    } else {
        document.querySelector(".companylogo").style.height = "85px";
        document.querySelector(".navbar-brand").style.padding = "15px 0px 15px 0px";
    }
}