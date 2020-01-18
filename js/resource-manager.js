//JS to make the resources panel work
function updateResources(){
    //Get the resources panel as a variable.
    let resourcespanel = document.getElementById("resources-panel");

    //Make the compiled strings for each line.
    let text = "";

    for (let i = 0; i < ResourceType.length; i++) {
        const element = ResourceType[i];
        
        if(wallet[element] != 0){
            text = text + "<tr id='row" + i + "'><th>" + element.text + "</th><th>" + wallet[element] + "</th></tr>"
        }
    }

    resourcespanel.innerHTML = text;

    setTimeout(function() {
        updateResources();
    }, 1000);
}
document.addEventListener("DOMContentLoaded", function(){
    updateResources();
});