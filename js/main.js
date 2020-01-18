const ResourceType = {
    BOT: 'BOT',
    SERVER: 'SERVER',
    MAINFRAME: 'MAINFRAME',
    CASH: 'CASH',
    SAM: "SAM"
}

var wallet = {}


add_resources(ResourceType.BOT, 1);
add_resources(ResourceType.SERVER, 1);
add_resources(ResourceType.BOT, 2);
add_resources(ResourceType.CASH, 1);
add_resources(ResourceType.SAM, 5);


function add_resources(resourceType, amount)
{
    if (!ResourceType.hasOwnProperty(resourceType))
    {
        console.log(resourceType + " is not a valid ResourceType! Please use `ResourceType.NAME`")
        return;
    }

    if (!wallet.hasOwnProperty(resourceType)) wallet[resourceType] = 0;

    wallet[resourceType] += amount;
    console.log(resourceType + " | " + wallet[resourceType]);
}