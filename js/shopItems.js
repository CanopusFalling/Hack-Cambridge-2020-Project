var shopItems = [

    {
        name: "Create A Bot",
        desc: "Why hack yourself when a bot can do it for you?",
        imgSrc: "pics/bot.png",
        price: {
            COMPROMISED_DEVICE: 2
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
            COMPROMISED_DEVICE: 20
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
            BOT: 5
        },
        reward: {
            physical: {
                SERVER: 1
            }
        }
    },
    {
        name: "Speed up overtaking of bots by servers",
        desc: "Use bots to make your life easier; no pain, all gain.",
        imgSrc: "pics/server.png",
        price: {
            BOT: 20
        },
        reward: {
            upgrade: {
                u1: {
                    factoryType: ResourceType.SERVER,
                    produceType: ResourceType.BOT,
                    multiplierType: IncrementValueType.BASE,
                    value: 2
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
        name: "Speed up overtaking of servers by satellites",
        desc: "Use satellites to take those servers on your behalf.",
        imgSrc: "pics/satellitecol.png",
        price: {
            SERVER: 30
        },
        reward: {
            upgrade: {
                u1: {
                    factoryType: ResourceType.SATELLITE,
                    produceType: ResourceType.SERVER,
                    multiplierType: IncrementValueType.BASE,
                    value: 2
                }
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
        name: "Use that AI to take some satellites.",
        desc: "That AI can get you some sweet satellite loot",
        imgSrc: "pics/ai.png",
        price: {
            SATELITE: 20
        },
        reward: {
            upgrade: {
                u1: {
                    factoryType: ResourceType.AI,
                    produceType: ResourceType.SATELLITE,
                    multiplierType: IncrementValueType.BASE,
                    value: 2
                }
            }
        }
    },
    {
        name: "Create A Cyborg",
        desc: "An adorable mini-you to do all your warfare for you! It's all you've ever wanted!",
        imgSrc: "pics/cyborg.png",
        price: {
            AI: 3
        },
        reward: {
            physical: {
                CYBORG: 1
            }
        }
    },
    {
        name: "Everyone knows Cyborgs beat AI",
        desc: "Subjigate more AI with the help of your trusty cyborgs.",
        imgSrc: "pics/cyborg.png",
        price: {
            AI: 20
        },
        reward: {
            upgrade: {
                u1: {
                    factoryType: ResourceType.CYBORG,
                    produceType: ResourceType.AI,
                    multiplierType: IncrementValueType.BASE,
                    value: 2
                }
            }
        }
    },
    {
        name: "Hack a missile",
        desc: "It's like a pet fish! With bonus damage!",
        imgSrc: "pics/missile.png",
        price: {
            CYBORG: 4
        },
        reward: {
            physical: {
                MISSILE: 1
            }
        }
    },
    {
        name: "I'm out of excuses",
        desc: "I don't know how but missiles somehow beat cyborgs. Increase their efficiency",
        imgSrc: "pics/missile.png",
        price: {
            CYBORG: 20
        },
        reward: {
            upgrade: {
                u1: {
                    factoryType: ResourceType.MISSILE,
                    produceType: ResourceType.CYBORG,
                    multiplierType: IncrementValueType.BASE,
                    value: 2
                }
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