$(document).ready(function () {
    // Function to display current date
    function displayCurrentDate() {
        let now = dayjs().format("dddd, MMMM D");
        // console.log(now);
        $("#currentDay").text(now);
    }
    
    // function to create Time blocks
    function createTimeBlocks(){
        let currentTime = dayjs().hour() // gets current hour

        //loop for hours
        for(let hour = 9; hour <= 17; hour ++){
          let timeBlock = $("<div>").addclass("row time-block");
          let hourCol = $("<div>").addclass("col-md-1 hour").text(dayjs().hour(hour).format("h A"));

          let textCol = $("<textarea>").addclass("col-md-10 description");

        //   check the time block 
        if(hour < currentTime){
            textCol.addclass("past");
        }else if(hour === currentTime){
            textCol.addclass("present");
        }else{
            textCol.addclass("future")
        }
        //get save event from local storage
        let saveEvent = localStorage.getItem();

        let saveBtnCol = $("<button>").addclass("col-md-1 saveBtn").html('<i class="fas fa-save"></i>');
        //save button
        saveBtnCol.on("click", function(){


            //save event to local storage
            localStorage.setItem();
        });

        timeBlock.append(hourCol, textCol, saveBtnCol);
        $(".container").append(timeBlock);
        }
    }

    //call functions
    displayCurrentDate();
    createTimeBlocks();
})

