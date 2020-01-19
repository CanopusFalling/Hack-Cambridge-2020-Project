var shopItems = [

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
    },
    {
        name: "Take over server",
        desc: "You take over a low security Guugal server",
        imgSrc: "pics/server.png",
        price: {
            BOT: 30
        },
        reward: {
            physical: {
                SERVER: 1
            }
        }
    },
    {
        name: "Speed up overtaking of servers",
        desc: "Use bots to make your life easier; no pain, all gain.",
        imgSrc: "pics/server.png",
        price: {
            BOT: 40
        },
        reward: {
            upgrade: {
                u1: {
                    factoryType: ResourceType.BOT,
                    produceType: ResourceType.SERVER,
                    multiplierType: IncrementValueType.BASE,
                    value: 1
                }
            }
        }
    },
    {
        name: "Take over a satellite",
        desc: "Take over a junky not low satellite",
        imgSrc: "pics/satellitecol.png",
        price: {
            SERVER: 20
        },
        reward: {
            physical: {
                SATELLITE: 1
            }
        }
    },
    {
        name: "Utilise AI",
        desc: "Use big data collected from satellites to develop AI",
        imgSrc: "pics/ai.png",
        price: {
            SATELLITE: 3
        },
        reward: {
            physical: {
                AI: 1
            }
        }
    },
    {
        name: "Create A Cyborg",
        desc: "An adorable mini-you to do all your warfare for you! It's all you've ever wanted!",
        imgSrc: "pics/cyborg.png",
        price: {
            AI: 10
        },
        reward: {
            physical: {
                CYBORG: 1
            }
        }
    },
    {
        name: "Hack a missile",
        desc: "It's like a pet fish! With bonus damage!",
        imgSrc: "pics/missile.png",
        price: {
            CYBORG: 10
        },
        reward: {
            physical: {
                MISSILE: 1
            }
        }
    },
    {
        name: "Create a singularity",
        desc: "The student has become the master. You are now the inferior one. Don't take it too badly.",
        imgSrc: "pics/singularity.png",
        price: {
            CYBORG: 100,
            MISSILE: 30,
            AI: 200
        },
        reward: {
            physical: {
                SINGULARITY: 1
            }
        }
    }
]