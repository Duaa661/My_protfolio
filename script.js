function myMenuFunction(){
    let menubtn=document.getElementById('mynavemenu');
    if(menubtn.className==='nav-menu'){
        menubtn.className="responsive"
    }
    else{
        menubtn.className="nav-menu"
    }
}

// dark mode
const body=document.querySelector("body"),
toogleSwitch=document.getElementById('toggle-switch');

toogleSwitch.addEventListener('click',()=>{
    const input_field=document.querySelector('.input-field');
    const input_subject=document.querySelector('.input-subject')
    input_subject.style.color="white";
    input_field.style.color="white";
    body.classList.toggle('dark')
})

// typing effexr
let typeeffect=new Typed('.typed-text',{
    strings:["Designer","Backend Developer","Frontend developer","Blockchain Devloper","App developer","Python developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,

})

const sr =scrollReveal({
origin:"top",
distance:"80px",
duration:2000,
reset:true,
});

sr.reveal(".featured-name",{delay:100});
sr.reveal(".text-info",{delay:200});
sr.reveal(".text-btn",{delay:200});
sr.reveal(".social_icons",{delay:200});
sr.reveal(".featured-image",{delay:320});

sr.reveal(".project-box",{interval:200});
sr.reveal(".top=header",{});

const srleft=scrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})
srleft.reveal(".about-info",{delay:100})
srleft.reveal(".contact-info",{delay:100})

const srRight=scrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})
srRight.reveal(".about-info",{delay:100})
srRight.reveal(".contact-info",{delay:100})

// active link
const section=document.querySelectorAll(".section[id]");
function scrollActive(){
    const scrollY=window.scrollY;
    section.forEach((current)=>{
        const sectionheight=current.offsetHeight,
        sectionTop=current.offsetTop-50,
        sectionid=current.getAttribute("id");
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionheight){
            document.querySelector(".nav-menu a[href*="+sectionid+"]")
            .classList.add("active-link")
        }
        else{
            document.querySelector(".nav-menu a[href*="+sectionid+"]")
            .classList.remove("active-link")
        }
    })
}
// send meassage information
function sendmeassage(){
    document.querySelectorAll('.input-field').value;
    fetch("http://localhost:3000/send-dushyantr737@gmail.com",{
        method:"Post",
        headers:{
            "Content-Type":"application/json",
        },
        body:json.stringify({message}),
    })
    .then(response=>response.json())
    .then(data=>alert(data.message))
    .catch(error=>console.error("Error",error));
}
btn.addEventListener("click",()=>{
btn.src="c:\Users\Admin\Desktop\myresume.docx"
})