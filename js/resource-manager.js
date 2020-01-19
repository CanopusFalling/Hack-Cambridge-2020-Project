//JS to make the resources panel work
function updateResources(){
    //Get the resources panel as a variable.
    let resourcespanel = document.getElementById("resources-panel");

    //Make the compiled strings for each line.
    let text = "<table>";

    for (let resource in ResourceType)
    {
        if (!ResourceType.hasOwnProperty(resource)) continue;
        
        if(wallet[resource] != null && wallet[resource] != 0){
            text = text + "<tr><th>" + resource;

            if(wallet[resource] > 1){
                text = text + "S"
            }
            text = text + "</th><th>" + wallet[resource] + "</th></tr>"
        }
    }

    text = text + "</text>";

    resourcespanel.innerHTML = text;

    setTimeout(function() {
        updateResources();
    }, 1000);
}

init_wallet();

document.addEventListener("DOMContentLoaded", function(){
    updateResources();
});