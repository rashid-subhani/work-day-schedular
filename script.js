$(document).ready(function () {
    // Function to display current date
    function displayCurrentDate() {
        let now = dayjs().format("dddd, MMMM D");
        // console.log(now);
        $("#currentDay").text(now);
    }
    
    function createTimeBlocks(){
        let currentTime = dayjs().hour(); // gets current hour

        //loop for hours
        for(let hour = 9; hour <= 17; hour ++){
          let timeBlock = $("<div>").addClass("row time-block");
          let hourCol = $("<div>").addClass("col-md-1 hour").text(dayjs().hour(hour).format("h A"));

          let textCol = $("<textarea>").addClass("col-md-10 description");

        //   check the time block 
        if(hour < currentTime){
            textCol.addClass("past");
        }else if(hour === currentTime){
            textCol.addClass("present");
        }else{
            textCol.addClass("future")
        }

        //get save event from local storage
        let saveEvent = localStorage.getItem("event_" + hour);
        if(saveEvent){   //mean true
            textCol.val(saveEvent); 
        }

        let saveBtnCol = $("<button>").addClass("col-md-1 saveBtn").html('<i class="fas fa-save"></i>');
        //save button
        saveBtnCol.on("click", function(){
        let eventText = $(this).siblings(".description").val();
        let eventHour = $(this).siblings(".hour").text().trim();

        //save event to local storage
        localStorage.setItem("event_" + dayjs(eventHour, "h A").hour(), eventText);
           
        });

        timeBlock.append(hourCol, textCol, saveBtnCol);
        $(".container").append(timeBlock);
        }
    }

    //call functions
    displayCurrentDate();
    createTimeBlocks();
});

