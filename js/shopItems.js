var shopItems = [
    {
        name: "Hack",
        desc: "Hack an unsecured device",
        imgScr: "",

        reward: {
            physical: {
                COMPROMISED_DEVICE: 1
            }
        }
    },
    {
        name: "Create A Bot",
        desc: "Why hack yourself when a bot can do it for you?",
        imgScr: "",
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
        imgScr: "",
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