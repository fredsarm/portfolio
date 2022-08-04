function fade(id,interval) {
    let i = 0;
    let elem = document.getElementById(id);
    elem.style.opacity = 0;
    let k = window.setInterval(function() {
    if (i >= 10) {
        clearInterval(k);
    } else {
        elem.style.opacity = i / 10;
        i++;
    }
    }, interval);
};
window.onload = function () { 
/*    fade("tudo",20);*/

    let embedSources = {
        home: {
            id:"logo",
            src: "./articles/home.html"
        },
        projects: {
            id:"link-projects",
            src:"./articles/projects.html"
        },
        bio: {
            id:"link-bio",
            src: "./articles/bio.html"
        },
        contact: {
            id: "link-contact",
            src: "./articles/contact.html"
        },
        skills: {
            id: "link-skils",
            src:"./articles/skills.html"
        },
        technologies: {
            id: "link-technologies",
            src: "./articles/technologies.html"
        },
        report: {
            id: "link-report",
            src: "./articles/report.html"
        } 
    }
    for (let menu in embedSources) {
        let varId=embedSources[menu]["id"];
        let varSrc=embedSources[menu]["src"];
        let changeSrc = () => {
            document.getElementById("article-embeded").style.opacity=0;
            document.getElementById("article-embeded").setAttribute("src", varSrc);
            fade("article-embeded",30)
        }
        document.getElementById(varId).addEventListener("click", changeSrc);
    }
}
