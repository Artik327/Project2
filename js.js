$(document).ready(function(){
    $(".modal-window2").hide();

    // MODAL-WINDOW1
    $("#cross").click(function(){
        $(".modal-window").hide();
    });

    $(".save").click(function(){
        var val = $(".modal-input").val();
        $(".user").html(val);
        $(".modal-window").hide();
    });
    // MODAL-WINDOW1

    // MODAL-WINDOW2
    $(".subscribe").click(function(){
        $(".modal-window2").show();
    });

    $("#cross2").click(function(){
        $(".modal-window2").hide();
    });
    // MODAL-WINDOW2
});

// TASK1
let yearBtn = document.getElementById("year-btn");
let yearInput = document.getElementById("year-input");
let yearText = document.getElementById("year-text");

yearBtn.addEventListener("click", function(){
    if(yearInput.value % 4 == 0){
        yearText.style.color = "green";
        yearText.innerHTML = "Ви народилися у високосний рік!";
    }else{
        yearText.style.color = "red";
        yearText.innerHTML = "Ви народилися не у високосний рік!";
    }
    if(yearInput.value == "" && yearBtn){
        yearText.innerHTML = "Введіть рік!";
        yearText.style.color = "red";
    }
});
// TASK1