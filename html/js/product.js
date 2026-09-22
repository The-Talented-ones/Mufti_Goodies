/* =========================================
   MUFTI GOODIES
   Product Catalogue
========================================= */

const products = [
    {
        id: "dodocious-dodo-100g",
        name: "Dodocious Dodo",
        slug: "dodocious-dodo",
        category: "Dodo Ikire",
        size: "100g",
        price: 0,
        available: true,

        shortDescription:
            "A modern expression of Dodo Ikire, inspired by a beloved Yoruba plantain delicacy.",

        description:
            "Dodocious Dodo brings the character of a traditional Nigerian snack into a contemporary experience, with thoughtful presentation and a story worth discovering.",

        story:
            "Dodocious Dodo is inspired by Dodo Ikire, a delicacy associated with Ikire in Osun State. Mufti Goodies reimagines this familiar food experience for today's consumer while respecting its indigenous roots.",

        ingredients: [
            "Plantain"
        ],

        flavour:
            "Distinctive, rich and familiar",

        texture:
            "Crispy exterior with a satisfying bite",

        storage:
            "Store in a cool, dry place and keep properly sealed.",

        image:
            "🍌",

        featured: true,

        tags: [
            "plantain",
            "dodo",
            "ikire",
            "yoruba",
            "indigenous",
            "snack"
        ]
    },

    {
        id: "dodocious-dodo-200g",
        name: "Dodocious Dodo",
        slug: "dodocious-dodo",
        category: "Dodo Ikire",
        size: "200g",
        price: 0,
        available: true,

        shortDescription:
            "More Dodocious goodness for sharing, gifting or keeping close.",

        description:
            "A larger pack of Dodocious Dodo for customers who want more of the experience in one package.",

        story:
            "Inspired by Dodo Ikire and its association with Ikire, Osun State, Dodocious Dodo presents an indigenous food experience through a modern brand.",

        ingredients: [
            "Plantain"
        ],

        flavour:
            "Distinctive, rich and familiar",

        texture:
            "Crispy exterior with a satisfying bite",

        storage:
            "Store in a cool, dry place and keep properly sealed.",

        image:
            "🍌",

        featured: false,

        tags: [
            "plantain",
            "dodo",
            "ikire",
            "yoruba",
            "snack"
        ]
    },

    {
        id: "heritage-box",
        name: "Heritage Box",
        slug: "heritage-box",
        category: "Gift Box",
        size: "Coming Soon",
        price: 0,
        available: false,

        shortDescription:
            "A rotating collection celebrating Nigerian indigenous snacks.",

        description:
            "The Heritage Box is planned as a rotating collection of indigenous Nigerian snacks, allowing customers to discover different food traditions.",

        story:
            "The Heritage Box reflects Mufti Goodies' broader vision of connecting indigenous food with storytelling and discovery.",

        ingredients: [],

        flavour:
            "Varies by collection",

        texture:
            "Varies by collection",

        storage:
            "Storage information will depend on the products included.",

        image:
            "🎁",

        featured: false,

        tags: [
            "heritage",
            "gift",
            "nigerian",
            "indigenous"
        ]
    },

    {
        id: "kulicious-kuli",
        name: "Kulicious Kuli",
        slug: "kulicious-kuli",
        category: "Coming Soon",
        size: "Coming Soon",
        price: 0,
        available: false,

        shortDescription:
            "A future Mufti Goodies expression of Kuli-Kuli.",

        description:
            "Kulicious Kuli is part of the planned future collection of indigenous snacks.",

        story:
            "Mufti Goodies plans to grow beyond Dodocious Dodo into a wider collection of indigenous Nigerian foods.",

        ingredients: [],

        flavour:
            "Coming soon",

        texture:
            "Coming soon",

        storage:
            "Information will be provided when the product launches.",

        image:
            "🥜",

        featured: false,

        tags: [
            "kuli-kuli",
            "groundnut",
            "indigenous"
        ]
    },

    {
        id: "kokoro",
        name: "Kokoro",
        slug: "kokoro",
        category: "Coming Soon",
        size: "Coming Soon",
        price: 0,
        available: false,

        shortDescription:
            "A future addition to the Mufti Goodies indigenous snack collection.",

        description:
            "Kokoro is part of the wider product collection planned for Mufti Goodies.",

        story:
            "The planned collection gives Mufti Goodies room to explore indigenous foods beyond its initial flagship product.",

        ingredients: [],

        flavour:
            "Coming soon",

        texture:
            "Coming soon",

        storage:
            "Information will be provided when the product launches.",

        image:
            "🌽",

        featured: false,

        tags: [
            "kokoro",
            "corn",
            "indigenous"
        ]
    }
];


/* =========================================
   HELPERS
========================================= */

function getProductById(id) {
    return products.find(product => product.id === id);
}


function getAvailableProducts() {
    return products.filter(product => product.available);
}


function formatPrice(price) {

    if (!price || price <= 0) {
        return "Price coming soon";
    }

    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    }).format(price);
}