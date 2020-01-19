const itemCostMultiplierBase = 1.12;
var thingsToShow = 1;

var purchaseCount;

/* function initShop(s)
{
    console.log(s);
    //shopItems = JSON.parse(s.innerHTML).then((response) => { return response.json(); });
    //shopItems = $.getJSON("./json/shopItems.json", function () { callback() })
    //    .done(function () { console.log("shop loaded succcessfully"); })
    //    .fail(function () { console.log("shop loading failed"); })
    //    .always(function () { console.log("complete"); });
} */

function init_purchase_count()
{
    purchaseCount = [shopItems.length];
    for (let i = 0; i < shopItems.length; i++)
    {
        purchaseCount[i] = 0;
    }
}

function purchase(shopItemIndex)
{
    if (!can_purchase(shopItemIndex)) return false;

    for (let p in shopItems[shopItemIndex]["price"])
    {
        if (!validate_resource_type(p)) continue;
        wallet[p] -= get_price(shopItemIndex, p);
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
    purchaseCount[shopItemIndex]++;
    if (shopItemIndex == thingsToShow - 1) reveal_new_item();

    parse_all_revealed_items(document.getElementById("shop-items"));
    return true;
}

function can_purchase(shopItemIndex)
{
    if (!validate_shop_id(shopItemIndex))
    {
        console.log("Invalid Id!");
        return false;
    }
    if (!shopItems[shopItemIndex].hasOwnProperty("price")) return true;
    for (let p in shopItems[shopItemIndex]["price"])
    {
        if (!validate_resource_type(p)) continue;
        if (wallet[p] < get_price(shopItemIndex, p))
        {
            console.log(wallet[p] + "<" + get_price(shopItemIndex, p));
            return false;
        }
    }
    return true;
}

function get_price(shopItemIndex, type)
{
    return Math.ceil(shopItems[shopItemIndex]["price"][type] * Math.pow(itemCostMultiplierBase, purchaseCount[shopItemIndex]));
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
    return shopItems.slice(0, Math.min(thingsToShow, shopItems.length));
}

function parse_all_revealed_items(domLocation)
{
    domLocation.innerHTML = "";
    let revealedItems = get_revealed_items();
    for (let i = domLocation.childElementCount; i < revealedItems.length; i++)
    {
        parse_shop_item(i, domLocation).addEventListener("click", () => console.log(purchase(i)));//can add wrapper to add to DOM so color change on hover
    }
}

function parse_shop_item(index, domLocation)
{
    let item = shopItems[index];
    let a = document.createElement("div");
    a.setAttribute("class", "shop-item");
    domLocation.appendChild(a);

    let a0 = document.createElement("div");
    a0.setAttribute("class", "shop-item-title");
    let a1 = document.createElement("img")
    a1.setAttribute("src", item["imgSrc"]);
    a1.setAttribute("class", "shop-item-img");
    a0.appendChild(a1);

    a1 = document.createElement("div");
    a1.setAttribute("class", "shop-item-name");
    a1.append(document.createTextNode(item["name"]));
    a0.appendChild(a1);
    a.appendChild(a0);

    if (item.hasOwnProperty("price"))
    {
        a1 = document.createElement("div");
        a1.setAttribute("class", "shop-item-price");
        a.appendChild(a1);
        a1.appendChild(document.createTextNode("Cost:"));

        let a2 = document.createElement("ul");
        a1.appendChild(a2);

        let a3;
        for (let type in item["price"])
        {
            if (!item["price"].hasOwnProperty(type)) continue;
            a3 = document.createElement("li");
            a3.appendChild(document.createTextNode(getNicerResourceName(type, get_price(index, type))));
            a2.appendChild(a3);
        }
        if (item.hasOwnProperty("desc")) a1.appendChild(document.createElement("hr"));
    }

    if (item.hasOwnProperty("desc"))
    {
        a1 = document.createElement("div");
        a1.setAttribute("class", "shop-item-desc");
        a1.appendChild(document.createTextNode(item["desc"]));
        a.appendChild(a1);
    }
    return a;
}