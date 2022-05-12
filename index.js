var reminders;

$(document).ready(()=>{
//on page loading add already added reminders to the list of my reminders
if ($.cookie("reminders")) {
    loadContent();
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
        // add to cookie
         addToCookie(detail,date,time);
         $("#myreminders").empty();
            loadContent();
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


$(document).on('click', '.ss', function (e) {
    // your function here
    reminders[this.id].status = true;   
    $.cookie("reminders",JSON.stringify(reminders));
    $("#myreminders").empty();
    loadContent();
});



// loading content

var loadContent = ()=>{
 reminders = JSON.parse($.cookie("reminders"));

    reminders.forEach((reminder,index) => {
        if (reminder.status == false) {
            $("#myreminders").append("<div class='reminders d-flex  flex-column align-items-center justify-content-center'> <p class='reminder'>"+reminder.detail+"</p> <p>requierd date: "+reminder.date+"</p> <p> required time: "+reminder.time+"</p> <div class='d-flex actions'><i class='ss bi bi-check2' id='"+index+"'></i><i class='bi bi-pencil'></i> <i class='bi bi-trash'></i></div> </div>");
        }else{
            $("#myreminders").append("<div class='reminders done d-flex  flex-column align-items-center justify-content-center'> <p class='reminder'>"+reminder.detail+"</p> <p>requierd date: "+reminder.date+"</p> <p> required time: "+reminder.time+"</p> <div class='d-flex actions'> <i class='bi bi-trash'></i></div> </div>"); 
        }
      
    });
}