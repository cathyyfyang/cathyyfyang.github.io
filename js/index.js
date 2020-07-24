function OpenNav(event,navName) {
    var i, navcontent, navlinks;
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("navlinks")
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace("active");
    }
    document.getElementById(navName).style.display = "block";
    EventTarget.currentTarget.navName += "active";
}