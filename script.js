/*====================================
        MOBILE MENU
====================================*/

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}

/*====================================
        DARK MODE
====================================*/

const themeBtn = document.getElementById("themeBtn");

let theme = localStorage.getItem("theme");

if(theme=="dark"){

    document.body.classList.add("dark");

    if(themeBtn){

        themeBtn.innerHTML="☀";

    }

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML="☀";

}

else{

localStorage.setItem("theme","light");

themeBtn.innerHTML="🌙";

}

});

}

/*====================================
        LANGUAGE
====================================*/

const langBtn=document.getElementById("langBtn");

let language=localStorage.getItem("language") || "en";

const text={

en:{

home:"Home",

login:"Login",

contact:"Contact Us",

title:"Welcome to StudyHub",

subtitle:"Organize Your Study Easily",

description:"A simple platform that helps students organize their study schedule and communicate with the administration.",

start:"Get Started",

about:"About StudyHub",

aboutText:"StudyHub is a simple educational website created to help students organize their study life easily.",

services:"Our Services",

plan:"Study Planning",

planText:"Organize your study schedule.",

student:"Student Login",

studentText:"Secure login for students.",

admin:"Contact Administration",

adminText:"Send your questions and suggestions.",

footer:"© 2026 StudyHub. All Rights Reserved.",

contactTitle:"Contact Us",

contactSub:"We'd love to hear from you.",

info:"Contact Information",

send:"Send Message",

remember:"Remember Me",

loginTitle:"Student Login",

account:"Don't have an account?"

},

ar:{

home:"الرئيسية",

login:"تسجيل الدخول",

contact:"تواصل معنا",

title:"مرحباً بك في StudyHub",

subtitle:"نظم دراستك بسهولة",

description:"منصة تساعد الطلاب على تنظيم الدراسة والتواصل مع الإدارة.",

start:"ابدأ الآن",

about:"عن StudyHub",

aboutText:"موقع تعليمي بسيط يساعد الطلاب على تنظيم الدراسة والتواصل مع الإدارة.",

services:"خدماتنا",

plan:"تنظيم الدراسة",

planText:"رتب جدولك الدراسي.",

student:"دخول الطلاب",

studentText:"تسجيل دخول آمن.",

admin:"التواصل مع الإدارة",

adminText:"أرسل استفساراتك بسهولة.",

footer:"© 2026 جميع الحقوق محفوظة.",

contactTitle:"تواصل معنا",

contactSub:"يسعدنا التواصل معك.",

info:"بيانات التواصل",

send:"إرسال الرسالة",

remember:"تذكرني",

loginTitle:"تسجيل دخول الطالب",

account:"ليس لديك حساب؟"

}

};

function translate(){

if(language=="ar"){

document.documentElement.lang="ar";

document.documentElement.dir="rtl";

document.body.classList.add("rtl");

if(langBtn){

langBtn.innerHTML="English";

}

}

else{

document.documentElement.lang="en";

document.documentElement.dir="ltr";

document.body.classList.remove("rtl");

if(langBtn){

langBtn.innerHTML="العربية";

}

}

/* Home */

if(document.getElementById("title"))

document.getElementById("title").innerHTML=text[language].title;

if(document.getElementById("subtitle"))

document.getElementById("subtitle").innerHTML=text[language].subtitle;

if(document.getElementById("description"))

document.getElementById("description").innerHTML=text[language].description;

if(document.getElementById("startBtn"))

document.getElementById("startBtn").innerHTML=text[language].start;

if(document.getElementById("aboutTitle"))

document.getElementById("aboutTitle").innerHTML=text[language].about;

if(document.getElementById("aboutText"))

document.getElementById("aboutText").innerHTML=text[language].aboutText;

if(document.getElementById("serviceTitle"))

document.getElementById("serviceTitle").innerHTML=text[language].services;

if(document.getElementById("card1Title"))

document.getElementById("card1Title").innerHTML=text[language].plan;

if(document.getElementById("card1Text"))

document.getElementById("card1Text").innerHTML=text[language].planText;

if(document.getElementById("card2Title"))

document.getElementById("card2Title").innerHTML=text[language].student;

if(document.getElementById("card2Text"))

document.getElementById("card2Text").innerHTML=text[language].studentText;

if(document.getElementById("card3Title"))

document.getElementById("card3Title").innerHTML=text[language].admin;

if(document.getElementById("card3Text"))

document.getElementById("card3Text").innerHTML=text[language].adminText;

/* Login */

if(document.getElementById("loginTitle"))

document.getElementById("loginTitle").innerHTML=text[language].loginTitle;

if(document.getElementById("rememberText"))

document.getElementById("rememberText").innerHTML=text[language].remember;

if(document.getElementById("accountText"))

document.getElementById("accountText").innerHTML=text[language].account;

/* Contact */

if(document.getElementById("contactTitle"))

document.getElementById("contactTitle").innerHTML=text[language].contactTitle;

if(document.getElementById("contactSubtitle"))

document.getElementById("contactSubtitle").innerHTML=text[language].contactSub;

if(document.getElementById("infoTitle"))

document.getElementById("infoTitle").innerHTML=text[language].info;

if(document.getElementById("sendBtn"))

document.getElementById("sendBtn").innerHTML=text[language].send;

/* Navbar */

const home=document.getElementById("homeLink");

const login=document.getElementById("loginLink");

const contact=document.getElementById("contactLink");

if(home) home.innerHTML=text[language].home;

if(login) login.innerHTML=text[language].login;

if(contact) contact.innerHTML=text[language].contact;

if(document.getElementById("footerText"))

document.getElementById("footerText").innerHTML=text[language].footer;

localStorage.setItem("language",language);

}

translate();

if(langBtn){

langBtn.addEventListener("click",()=>{

language=(language=="en")?"ar":"en";

translate();

});

}
/*====================================
        LOGIN VALIDATION
====================================*/

const loginForm = document.querySelector(".login-form");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value.trim();

if(email==""){

alert(language=="ar" ? "الرجاء إدخال البريد الإلكتروني." : "Please enter your email.");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert(language=="ar" ? "البريد الإلكتروني غير صحيح." : "Invalid email address.");

return;

}

if(password==""){

alert(language=="ar" ? "الرجاء إدخال كلمة المرور." : "Please enter your password.");

return;

}

if(password.length<6){

alert(language=="ar" ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل." : "Password must be at least 6 characters.");

return;

}

alert(language=="ar" ? "تم تسجيل الدخول بنجاح." : "Login Successful.");

});

}

/*====================================
        CONTACT VALIDATION
====================================*/

const contactForm=document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const subject=document.getElementById("subject").value.trim();

const message=document.getElementById("message").value.trim();

if(name==""){

alert(language=="ar" ? "أدخل الاسم." : "Please enter your name.");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert(language=="ar" ? "البريد الإلكتروني غير صحيح." : "Invalid email address.");

return;

}

if(subject==""){

alert(language=="ar" ? "أدخل الموضوع." : "Please enter the subject.");

return;

}

if(message.length<10){

alert(language=="ar" ? "الرسالة قصيرة جداً." : "Message is too short.");

return;

}

alert(language=="ar" ? "تم إرسال الرسالة بنجاح." : "Message sent successfully.");

contactForm.reset();

});

}

// /*====================================
//         SHOW PASSWORD
// ====================================*/

// const passwordInput=document.getElementById("password");

// if(passwordInput){

// const toggle=document.createElement("button");

// toggle.type="button";

// toggle.innerHTML="👁";

// toggle.style.marginTop="10px";

// toggle.style.width="100%";

// toggle.style.padding="12px";

// toggle.style.border="none";

// toggle.style.borderRadius="8px";

// toggle.style.cursor="pointer";

// toggle.style.background="#64748b";

// toggle.style.color="white";

// passwordInput.after(toggle);

// toggle.addEventListener("click",()=>{

// if(passwordInput.type==="password"){

// passwordInput.type="text";

// toggle.innerHTML="🙈";

// }else{

// passwordInput.type="password";

// toggle.innerHTML="👁";

// }

// });

// }