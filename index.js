$(document).ready(()=>{
   console.log("ready");     
});


$("#addReminder").on("click", 
()=>{
    let detail = $("#reminderDetail").val();
    let dateAndTime = $("#reminderDate").val();
if(!detail || !dateAndTime){
    alert("pleasee fill all the required fields");
}
else{
    $("#reminderDetail").val("");
    $("#reminderDate").val("");

    $("#myreminders").append("<div class='d-flex gap-4'><button>  <input type='radio'> </button>   <p class='reminder'>"+detail+"</p> <p>requierd date: "+dateAndTime+"</p> </div>");
}
}

);
