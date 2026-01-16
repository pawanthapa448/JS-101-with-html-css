const LetsLearnUser = {
    name:"pawan",
    "job work":"developer",
    age:22,
    email:"pawan@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Friday","Saturday"],
};
console.log(LetsLearnUser);
console.log(LetsLearnUser["job work"]);
console.log(typeof LetsLearnUser);
console.log(LetsLearnUser.email);
console.log(LetsLearnUser["email"]);
console.log(LetsLearnUser.lastLoginDays[1]);
LetsLearnUser.email = "pawan_new@gmail.com";
console.log(LetsLearnUser.email);
console.log(LetsLearnUser.isLoggedIn);
if(LetsLearnUser.isLoggedIn){
    console.log("User is logged in");
}
 LetsLearnUser.points = 45;
 console.log(LetsLearnUser);
 LetsLearnUser.lastLoginDays.push("Sunday");
 LetsLearnUser.greating = function(){
    console.log("Hello "+this.name+" , welcome back!");
 }
    LetsLearnUser.greating();


    const anotherUser = {};
    anotherUser.name = "saugat";
    anotherUser.age = 25;
    anotherUser.email = "saugat@gmail.com";
    anotherUser.isLoggedIn = false;
    anotherUser.lastLoginDays = ["Tuesday","Friday"]; 
    console.log(anotherUser);
    
