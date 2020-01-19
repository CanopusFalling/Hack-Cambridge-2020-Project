var shopItems = [
    {
        name: "Hack",
        desc: "Hack an unsecured device",
        imgSrc: "pics/bot.png",

        reward: {
            physical: {
                COMPROMISED_DEVICE: 1
            }
        }
    },
    {
        name: "Create A Bot",
        desc: "Why hack yourself when a bot can do it for you?",
        imgSrc: "pics/bot.png",
        price: {
            COMPROMISED_DEVICE: 10
        },
        reward: {
            physical: {
                BOT: 1
            }
        }
    },
    {
        name: "Speed up your bots",
        desc: "You simply removed all the debugging stuff",
        imgSrc: "pics/bot.png",
        price: {
            BOT: 10
        },
        reward: {
            upgrade: {
                u1: {
                    factoryType: ResourceType.BOT,
                    produceType: ResourceType.COMPROMISED_DEVICE,
                    multiplierType: IncrementValueType.BASE,
                    value: 1
                }
            }
        }
    }
]