const itemCostMultiplierBase = 1.15;
//const jQuery = require('./lib/jquery-3.4.1.min.js');
var shopItems;

var thingsToShow = 1;

const fileUrl = './json/shopItems.json' // provide file location


//initShop(() => console.log("callback"));

function initShop()
{
    //shopItems = JSON.parse(fetch(new Request(fileUrl)).then((response) => { return response.json(); }));
    shopItems = $.parse("./json/shopItems.json", function () { callback() })
        .done(function () { console.log("shop loaded succcessfully"); })
        .fail(function () { console.log("shop loading failed"); })
        .always(function () { console.log("complete"); });
}

function purchase(shopItemIndex)
{
    if (!can_purchase(shopItemIndex)) return false;

    for (let p in shopItems[shopItemIndex]["price"])
    {
        if (!validate_resource_type(p)) continue;
        wallet[p] -= Math.ceil(shopItems[shopItemIndex]["price"][p] * Math.pow(itemCostMultiplierBase, wallet[p]));
    }

    if (shopItems[shopItemIndex]["reward"].hasOwnProperty("physical"))
    {
        for (let p in shopItems[shopItemIndex]["reward"]["physical"])
        {
            if (!validate_resource_type(p)) continue;
            wallet[p] += shopItems[shopItemIndex]["reward"]["physical"][p];
        }
    }

    if (shopItems[shopItemIndex]["reward"].hasOwnProperty("upgrade"))
    {
        let tempObj;
        for (let u in shopItems[shopItemIndex]["reward"]["upgrade"])
        {
            if (!shopItems[shopItemIndex]["reward"]["upgrade"].hasOwnProperty(u)) continue;
            tempObj = shopItems[shopItemIndex]["reward"]["upgrade"][u]; //if this is NOT an obj, swap the function below
            update_factories_attributes(tempObj["factoryType"], tempObj["produceType"], tempObj["multiplierType"], tempObj["value"]);
        }
    }
    reveal_new_item();
    return true;
}

function can_purchase(shopItemIndex)
{
    if (!validate_shop_id(shopItemIndex)) return false;
    if (!shopItems[shopItemIndex].hasOwnProperty("price")) return true;
    for (let p in shopItems[shopItemIndex]["price"])
    {
        if (!validate_resource_type(p)) continue;
        if (wallet[p] < Math.ceil(shopItems[shopItemIndex]["price"][p] * Math.pow(itemCostMultiplierBase, wallet[p]))) return false;
    }
    return true;
}

function validate_shop_id(shopItemIndex)
{
    if (shopItemIndex < 0 || shopItemIndex >= shopItems.length)
    {
        console.log(shopItemIndex + " is not a valid shop id!");
        return false;
    }
    return true;
}

function reveal_new_item()
{
    thingsToShow++;
}

function get_revealed_items()
{
    return shopItems.slice(0, Math.max(thingsToShow, shopItems.length));
}