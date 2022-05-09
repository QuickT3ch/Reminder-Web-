
$(document).ready(()=>{

//on page loading add already added reminders to the list of my reminders
if ($.cookie("reminders")) {
    let reminders = JSON.parse($.cookie("reminders"));
    console.log(reminders);
    reminders.forEach(reminder => {
        $("#myreminders").append("<div class='d-flex gap-4'>  <input type='radio'>  <p class='reminder'>"+reminder.detail+"</p> <p>requierd date: "+reminder.date+"</p> </div>");
    });
} 


});    
    

 


$("#addReminder").on("click", 
()=>{
    let detail = $("#reminderDetail").val();
    let date = $("#reminderDate").val();
    let time = $("#reminderTime").val();

 
if(!detail || !date ||!time){
    alert("pleasee fill all the required fields");
}
else{
       
       
        //add to myreminders list on the screen
        $("#reminderDetail").val("");
        $("#reminderDate").val("");
        $("#myreminders").append("<div class='d-flex gap-4'>  <input type='radio'>  <p class='reminder'>"+detail+"</p> <p>requierd date: "+date+time+"</p> </div>");
        // add to cookie
         addToCookie(detail,date,time);
}
}

);



// function of addToCookie

function addToCookie(detail,date,time){
    let check = $.cookie("reminders");
    //checking if its first time or not
    if(check != undefined){
        //not first time
        let reminders = JSON.parse($.cookie("reminders"));
        let newreminder = {"detail":detail, "date":date, "time":time ,"status":false};
        reminders.push(newreminder);
       $.cookie("reminders",JSON.stringify(reminders));
    }else{

        //first time
        let cookie = [{"detail":detail, "date":date, "time":time ,"status":false}];
        $.cookie("reminders",JSON.stringify(cookie));
    }

}