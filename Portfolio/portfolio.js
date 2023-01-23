var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");
var skilllinks =document.getElementsByClassName("skill-links");
var skillcontents =document.getElementsByClassName("skill-contents");
var prolinks =document.getElementsByClassName("pro-links");
var procontents =document.getElementsByClassName("pro-contents")

function opentab(tabname){

    for(tablink of tablinks){

        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){

        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openskilltab(tabname){

    for(skilllink of skilllinks){

        skilllink.classList.remove("active-skilllink");
    }

    for(skillcontent of skillcontents){

        skillcontent.classList.remove("active-skilltab");
    }

    event.currentTarget.classList.add("active-skilllink");
    document.getElementById(tabname).classList.add("active-skilltab");
}

function openprotab(tabname){

    for(prolink of prolinks){

        prolink.classList.remove("active-prolink");
    }

    for(procontent of procontents){

        procontent.classList.remove("active-protab");
    }

    event.currentTarget.classList.add("active-prolink");
    document.getElementById(tabname).classList.add("active-protab");
}