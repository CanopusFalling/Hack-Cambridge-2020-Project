//JS to make the resources panel work
function updateResources()
{
    //Get the resources panel as a variable.
    let resourcespanel = document.getElementById("resources-table");

    //Make the compiled strings for each line.
    let text = "<table>";

    for (let resource in ResourceType)
    {
        if (!ResourceType.hasOwnProperty(resource)) continue;

        //if(wallet[resource] != null && wallet[resource] != 0){
        text = text + "<tr><th>" + getNicerResourceName(resource, wallet[resource]);
        text = text + "</th><td> "
        /* if (rateOfGain[resource] != 0) */ text = text + rateOfGain[resource] + "/s";
        text = text + "</td></tr>";
        //}
    }

    text = text + "</text>";

    resourcespanel.innerHTML = text;

    setTimeout(function ()
    {
        updateResources();
    }, 100);
}

init_wallet();

document.addEventListener("DOMContentLoaded", function ()
{
    updateResources();
});

function getNicerResourceName(s, amount)
{
    let sa = s.replace("_", " ").toLowerCase();
    if (amount > 1 || amount < 1) sa = sa + "s";
    return amount + " " + sa;
}