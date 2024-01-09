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

          let textCol = $("<textarea>").addclass("col-md-10");

        //   check the time block 
        if(hour < currentTime){
            textCol.addclass("past");
        }else if(hour === currentTime){
            textCol.addclass("present");
        }else{
            textCol.addclass("future")
        }
        }
    }

    displayCurrentDate();
})

