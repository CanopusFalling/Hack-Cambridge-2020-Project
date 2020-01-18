var shopItems;

var thingsToShow = 1;

function initShop(callback)
{
    shopItems = $.getJSON("example.json", function () { callback() })
        .done(function () { console.log("shop loaded succcessfully"); })
        .fail(function () { console.log("shop loading failed"); })
        .always(function () { console.log("complete"); });
}

function purchase(shopID)
{
    if (!can_purchase(shopID)) return false;

    for (let p in shopItems[shopID]["price"])
    {
        if (!validate_resource_type(p)) continue;
        wallet[p] -= shopItems[shopID]["price"][p];
    }

    if (shopItems[shopID]["reward"].hasOwnProperty("physical"))
    {
        for (let p in shopItems[shopID]["reward"]["physical"])
        {
            if (!validate_resource_type(p)) continue;
            wallet[p] += shopItems[shopID]["reward"]["physical"][p];
        }
    }

    if (shopItems[shopID]["reward"].hasOwnProperty("upgrade"))
    {
        let tempObj;
        for (let u in shopItems[shopID]["reward"]["upgrade"])
        {
            if (!shopItems[shopID]["reward"]["upgrade"].hasOwnProperty(u)) continue;
            tempObj = shopItems[shopID]["reward"]["upgrade"][u]; //if this is NOT an obj, swap the function below
            update_factories_attributes(tempObj["factoryType"], tempObj["produceType"], tempObj["multiplierType"], tempObj["value"]);
        }
    }


    return true;
}

function can_purchase(shopID)
{
    if (!validate_shop_id(shopID)) return false;
    if (!shopItems[shopID].hasOwnProperty("price")) return true;
    for (let p in shopItems[shopID]["price"])
    {
        if (!validate_resource_type(p)) continue;
        if (wallet[p] < shopItems[shopID]["price"][p]) return false;
    }
    return true;
}

function validate_shop_id(shopID)
{
    if (!shopItems.hasOwnProperty(shopID))
    {
        console.log(shopID + " is not a valid shop id!");
        return false;
    }
    return true;
}
