const ResourceType = {
    BOT: 'BOT',
    SERVER: 'SERVER',
    MAINFRAME: 'MAINFRAME',
    CASH: 'CASH',
    SAM: "SAM"
}

const IncrementValueType = {
    BASE: 'BASE',
    BASE_MULTIPLIER: 'BASE_MULTIPLIER',
    MULTIPLIER_MULTIPLIER: 'MULTIPLIER_MULTIPLIER',
}
var GLOBAL_MULTIPLIER = 1;

var factories = {}

var wallet = {}

update_factories_attributes(ResourceType.SAM, ResourceType.CASH, IncrementValueType.BASE, 1337);
update_factories_attributes(ResourceType.MAINFRAME, ResourceType.BOT, IncrementValueType.BASE, 42);
update_factories_attributes(ResourceType.MAINFRAME, ResourceType.SERVER, IncrementValueType.BASE, 101);
update_factories_attributes(ResourceType.SAM, ResourceType.BOT, IncrementValueType.BASE, 3);
add_factories_produce_to_wallet(0.5);
console.log(wallet);

/**
 * Add [amount] * GLOBAL_MULTIPLIER of [resourceType] to wallet 
 * @param {string} resourceType 
 * @param {num} amount 
 */
function add_resources(resourceType, amount)
{
    if (!validate_resource_type(resourceType)) return;

    if (!wallet.hasOwnProperty(resourceType)) wallet[resourceType] = 0;

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
 * Automatically calculates how much resources all factories produce in [deltaTime] seconds and add it to wallet
 * @param {num} deltaTime 
 */
function add_factories_produce_to_wallet(deltaTime)
{
    for (let factory in factories)
    {
        if (!Object.prototype.hasOwnProperty.call(factories, factory)) continue;
        for (let produceType in factories[factory])
        {
            if (!Object.prototype.hasOwnProperty.call(factories[factory], produceType)) continue;
            //console.log(produceType + "|" + factories[factory][produceType][IncrementValueType.BASE] + "*" + produceType[IncrementValueType.BASE_MULTIPLIER] + "*" + produceType[IncrementValueType.MULTIPLIER_MULTIPLIER]);
            add_resources(produceType, factories[factory][produceType][IncrementValueType.BASE] * factories[factory][produceType][IncrementValueType.BASE_MULTIPLIER] * factories[factory][produceType][IncrementValueType.MULTIPLIER_MULTIPLIER] * deltaTime);
        }
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