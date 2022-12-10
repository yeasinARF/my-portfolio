
var openMenu=document.getElementById("Cross");
var closeMenu=document.getElementById("hamburg");
var changeHomeColor=document.getElementById("hM");
var changeAboutColor=document.getElementById("aB");
var changeSkillsColor=document.getElementById("sK");
var changeExperienceColor=document.getElementById("eX");
var changePortfolioColor=document.getElementById("portF");
var changeBlogColor=document.getElementById("bG");
var changeContactColor=document.getElementById("conT");
var loadingWebsite=document.getElementById("loading");
var loadingWebsite=document.getElementById("loading");

function Open() {
    openMenu.style.display="none";
    closeMenu.style.display="block";
    
}
function Close() {
    openMenu.style.display="block";
    closeMenu.style.display="none";

    
}
function changeColorHome(){
    changeHomeColor.style.color="rgb(145, 89, 197)";
    changeAboutColor.style.color="white";
    changeSkillsColor.style.color="white";
    changeExperienceColor.style.color="white";
    changePortfolioColor.style.color="white";
    changeBlogColor.style.color="white";
    changeContactColor.style.color="white";

}
function changeColorAbout(){
    changeAboutColor.style.color="rgb(145, 89, 197)";
    changeHomeColor.style.color="white";
    changeSkillsColor.style.color="white";
    changeExperienceColor.style.color="white";
    changePortfolioColor.style.color="white";
    changeBlogColor.style.color="white";
    changeContactColor.style.color="white";

}
function changeColorSkills(){
    changeSkillsColor.style.color="rgb(145, 89, 197)";
    changeAboutColor.style.color="white";
    changeHomeColor.style.color="white";
    changeExperienceColor.style.color="white";
    changePortfolioColor.style.color="white";
    changeBlogColor.style.color="white";
    changeContactColor.style.color="white";

}
function changeColorExperience(){
    changeExperienceColor.style.color="rgb(145, 89, 197)";
    changeAboutColor.style.color="white";
    changeSkillsColor.style.color="white";
    changeHomeColor.style.color="white";
    changePortfolioColor.style.color="white";
    changeBlogColor.style.color="white";
    changeContactColor.style.color="white";

}
function changeColorPortfolio(){
    changePortfolioColor.style.color="rgb(145, 89, 197)";
    changeAboutColor.style.color="white";
    changeSkillsColor.style.color="white";
    changeExperienceColor.style.color="white";
    changeHomeColor.style.color="white";
    changeBlogColor.style.color="white";
    changeContactColor.style.color="white";

}
function changeColorBlog(){
    changeBlogColor.style.color="rgb(145, 89, 197)";
    changeAboutColor.style.color="white";
    changeSkillsColor.style.color="white";
    changeExperienceColor.style.color="white";
    changePortfolioColor.style.color="white";
    changeHomeColor.style.color="white";
    changeContactColor.style.color="white";

}
function changeColorContact(){
    changeContactColor.style.color="rgb(145, 89, 197)";
    changeAboutColor.style.color="white";
    changeSkillsColor.style.color="white";
    changeExperienceColor.style.color="white";
    changePortfolioColor.style.color="white";
    changeBlogColor.style.color="white";
    changeHomeColor.style.color="white";

}
//Progress
function myLoader() {
    loadingWebsite.style.display='none';

    
}
function myloader() {
    loadingWebsite.style.display="none";

    
}
//Animation
AOS.init({
    duration: 2000,
   
}

);
//Email
// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "asifhossain953@gmail.com",
//         Password : "bjnabdvnacfqmvuu",
//         To : 'asifhossain953@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Contact Form",
//         Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " + document.getElementById("email").value
//             + "<br> Phone No: " + document.getElementById("phone").value
//             + "<br> Message: " + document.getElementById("message").value
//     }).then(
//         message => alert("Message Sent Successfully")
//     );
// }





                       