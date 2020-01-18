//JS to make the resources panel work
function updateResources(){
    //Get the resources panel as a variable.
    let resourcespanel = document.getElementById("resources-panel");

    //Make the compiled strings for each line.
    let text = "";

    for (let resource in ResourceType)
    {
        if (!ResourceType.hasOwnProperty(resource)) continue;
        
        if(wallet[resource] != null){
            text = text + "<tr><th>" + resource + "</th><th>" + wallet[resource] + "</th></tr>"
        }
        console.log(wallet[resource]); 
    }

    resourcespanel.innerHTML = text;

    setTimeout(function() {
        updateResources();
    }, 1000);
}
document.addEventListener("DOMContentLoaded", function(){
    updateResources();
});