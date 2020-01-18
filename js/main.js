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

update_factories_attributes(ResourceType.SAM, ResourceType.CASH, 1337);
update_factories_attributes(ResourceType.MAINFRAME, ResourceType.BOT, 42);
update_factories_attributes(ResourceType.MAINFRAME, ResourceType.SERVER, 101);
update_factories_attributes(ResourceType.SAM, ResourceType.BOT, 3);


function add_resources(resourceType, amount)
{
    if (!validate_resource_type(resourceType)) return;

    if (!wallet.hasOwnProperty(resourceType)) wallet[resourceType] = 0;

    wallet[resourceType] += amount * GLOBAL_MULTIPLIER;
}

function update_factories_attributes(resourceFactoryType, resourceType, incrementValueType, amount)
{
    if (!validate_resource_type(resourceFactoryType)) return;
    if (!validate_resource_type(resourceType)) return;
    if (!validate_incremental_value_type(incrementValueType)) return;

    if (!factories.hasOwnProperty(resourceFactoryType)) factories[resourceFactoryType] = new Object();
    if (!factories[resourceFactoryType].hasOwnProperty(resourceType)) factories[resourceFactoryType][resourceType] = create_blank_factory_produce_object();
    factories[resourceFactoryType][resourceType][incrementValueType] += amount;
}

function add_factories_produce_to_wallet(deltaTime)
{
    for (let factory in factories)
    {
        if (!Object.prototype.hasOwnProperty.call(factories, factory)) continue;
        for (let produceType in factories[factory])
        {
            add_resources(produceType, produceType[IncrementValueType.BASE] * produceType[IncrementValueType.BASE_MULTIPLIER] * produceType[IncrementValueType.MULTIPLIER_MULTIPLIER] * deltaTime);
        }
    }
}

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

function validate_resource_type(resourceType)
{
    if (!ResourceType.hasOwnProperty(resourceType))
    {
        console.log(resourceType + " is not a valid ResourceType! Please use `ResourceType.NAME`")
        return false;
    }
    return true;
}

function validate_increment_value_type(incrementValueType)
{
    if (!IncrementValueType.hasOwnProperty(incrementValueType))
    {
        console.log(incrementValueType + " is not a valid IncrementValueType! Please use `IncrementValueType.NAME`")
        return false;
    }
    return true;
}