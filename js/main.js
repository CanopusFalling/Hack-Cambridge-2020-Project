const ResourceType = {
    COMPROMISED_DEVICE: 'COMPROMISED_DEVICE',
    BOT: 'BOT',
    SERVER: 'SERVER',
   // MAINFRAME: 'MAINFRAME',
    SATELLITE: 'SATELLITE',
    // NETWORK_INFRASTRUCTURE: "NETWORK_INFRASTRUCTURE",
    AI: 'AI',
    CYBORG: 'CYBORG',
    MISSILE: 'MISSILE',
    //POWERPLANT: 'POWERPLANT',
    // NUCLEAR_SILO: 'NUCLEAR_SILO',
    SINGULARITY: 'SIGULARITY'
}

const IncrementValueType = {
    BASE: 'BASE',
    BASE_MULTIPLIER: 'BASE_MULTIPLIER',
    MULTIPLIER_MULTIPLIER: 'MULTIPLIER_MULTIPLIER',
}
const GAME_LOOP_DELTA = 1000;

var GLOBAL_MULTIPLIER = 1;

var factories = {}

var wallet = {}

var rateOfGain = {};

/* init_wallet();
update_factories_attributes(ResourceType.BOT, ResourceType.COMPROMISED_DEVICE, IncrementValueType.BASE, 1337);
update_factories_attributes(ResourceType.MAINFRAME, ResourceType.BOT, IncrementValueType.BASE, 42);
update_factories_attributes(ResourceType.MAINFRAME, ResourceType.SERVER, IncrementValueType.BASE, 101);
update_factories_attributes(ResourceType.BOT, ResourceType.BOT, IncrementValueType.BASE, 3);
add_factories_produce_to_wallet(0.5);
console.log(wallet);
add_resources(ResourceType.BOT, 5);
add_factories_produce_to_wallet(0.5);
console.log(wallet); */

var test;

function start_game()
{
    init_wallet();
    init_rate_of_gain();
    init_purchase_count();
    parse_all_revealed_items(document.getElementById("shop-items"));
    setInterval(game_loop, GAME_LOOP_DELTA);
}

function game_loop()
{
    add_factories_produce_to_wallet(GAME_LOOP_DELTA / 1000);
}  


function init_wallet()
{
    for (let r in ResourceType)
    {
        if (ResourceType.hasOwnProperty(r)) wallet[r] = 0;
    }
}

function init_rate_of_gain()
{
    for (let r in ResourceType)
    {
        if (ResourceType.hasOwnProperty(r)) rateOfGain[r] = 0;
    }
}

/**
 * Add [amount] * GLOBAL_MULTIPLIER of [resourceType] to wallet 
 * @param {string} resourceType 
 * @param {num} amount 
 */
function add_resources(resourceType, amount)
{
    if (!validate_resource_type(resourceType)) return;
    wallet[resourceType] += amount * GLOBAL_MULTIPLIER;
}

/**
 * Updates how much a single [resourceFactoryType] would produce [resourceType] per second. 
 * @param {string} resourceFactoryType 
 * @param {string} resourceType 
 * @param {string} incrementValueType Where the amount should be applied to.
 * @param {num} amount 
 */
function update_factories_attributes(resourceFactoryType, resourceType, incrementValueType, amount)
{
    if (!validate_resource_type(resourceFactoryType)) return;
    if (!validate_resource_type(resourceType)) return;
    if (!validate_increment_value_type(incrementValueType)) return;

    if (!factories.hasOwnProperty(resourceFactoryType)) factories[resourceFactoryType] = new Object();
    if (!factories[resourceFactoryType].hasOwnProperty(resourceType)) factories[resourceFactoryType][resourceType] = create_blank_factory_produce_object();
    factories[resourceFactoryType][resourceType][incrementValueType] += amount;
    //console.log(factories[resourceFactoryType][resourceType][incrementValueType]);
}

/**
 * Automatically calculates how much resources all factories in wallet produces in [deltaTime] seconds and add it to wallet
 * @param {num} deltaTime 
 */
function add_factories_produce_to_wallet(deltaTime)//this is wrong
{
    init_rate_of_gain();
    for (let walletItem in wallet)
    {
        if (!wallet.hasOwnProperty(walletItem)) continue;
        if (!factories.hasOwnProperty(walletItem)) continue;

        for (let factoryProduce in factories[walletItem])
        {
            if (!factories[walletItem].hasOwnProperty(factoryProduce)) continue;
            rateOfGain[factoryProduce] += wallet[walletItem] * factories[walletItem][factoryProduce][IncrementValueType.BASE] * factories[walletItem][factoryProduce][IncrementValueType.BASE_MULTIPLIER] * factories[walletItem][factoryProduce][IncrementValueType.MULTIPLIER_MULTIPLIER];
            //console.log(wallet[walletItem] + "*" + factories[walletItem][factoryProduce][IncrementValueType.BASE] + "*" + factories[walletItem][factoryProduce][IncrementValueType.BASE_MULTIPLIER] * factories[walletItem][factoryProduce][IncrementValueType.MULTIPLIER_MULTIPLIER]);
        }
    }
    for (let resource in rateOfGain)
    {
        //console.log(amountToAdd[resource]);
        if (!rateOfGain.hasOwnProperty(resource)) continue;

        add_resources(resource, rateOfGain[resource] * deltaTime);
    }
}

/**
 * @returns {Object} a object with all default IncrementValueType attributes added
 */
function create_blank_factory_produce_object()
{
    let o = new Object();
    for (let key in IncrementValueType)
    {
        if (Object.prototype.hasOwnProperty.call(IncrementValueType, key))
        {
            o[key] = 1;
        }
    }
    o[IncrementValueType.BASE] = 0;
    return o;
}

/**
 * @param {string} resourceType 
 * @returns {boolean} if [resourceType] exist as an attribute in ResourceType "enum"
 */
function validate_resource_type(resourceType)
{
    if (!ResourceType.hasOwnProperty(resourceType))
    {
        console.log(resourceType + " is not a valid ResourceType! Please use `ResourceType.NAME`")
        return false;
    }
    return true;
}

/**
 * @param {string} incrementValueType 
 * @returns {boolean} if [incrementValueType] exist as an attribute in IncrementValueType "enum"
 */
function validate_increment_value_type(incrementValueType)
{
    if (!IncrementValueType.hasOwnProperty(incrementValueType))
    {
        console.log(incrementValueType + " is not a valid IncrementValueType! Please use `IncrementValueType.NAME`")
        return false;
    }
    return true;
}