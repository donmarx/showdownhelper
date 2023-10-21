document.addEventListener("DOMContentLoaded", function() {
var fieldConfig = 0;

console.log(document.getElementById("submitButton").textContent)

jQuery(function(){
    $("#submitButton").on("click",async function() {
        switch(fieldConfig){
            case (0):
                getInformationByName(document.querySelector(".statbar.rstatbar.leftstatbar").textContent);
                fieldConfig++;
                console.log(fieldConfig)
                break;
            case (1):
                getInformationByName(document.querySelector(".statbar.rstatbar.rightstatbar").textContent);
                fieldConfig++;
                console.log(fieldConfig)
                break;
            case (2):
                getInformationByName(document.querySelector(".statbar.lstatbar.leftstatbar").textContent);
                fieldConfig++;
                console.log(fieldConfig)
                break;
            case (3):
                getInformationByName(document.querySelector(".statbar.lstatbar.rightstatbar").textContent);
                fieldConfig = 0;
                console.log(fieldConfig)
                break;
            }
        });
    })
});