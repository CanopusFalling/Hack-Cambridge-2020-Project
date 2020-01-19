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
        text = text + "<tr><td>" + getNicerResourceName(resource, wallet[resource]);
        text = text + "</td><td> "
        /* if (rateOfGain[resource] != 0) */ text = text + rateOfGain[resource] + "/s";
        text = text + "</td></tr>";
        //}
    }

    text = text + "</text>";

    resourcespanel.innerHTML = text;

    setTimeout(function ()
    {
        updateResources();
        checkShop();
    }, 100);
}

function checkShop(){
    let shop = document.getElementById("shop-items");

    let items = shop.children;

    for (let i = 0; i < items.length; i++) {
        if(can_purchase(i)){
            items[i].className = "shop-item-valid shop-item ";
        }
    }
}

init_wallet();

document.addEventListener("DOMContentLoaded", function ()
{
    updateResources();
});

function getNicerResourceName(s, amount)
{
    let sa = s.replace("_", " ").toLowerCase();
    if ((amount > 1) || amount < -1) sa = sa + "s";
    return amount + " " + sa;
    
}