const products = {
    all: Array.from({ length: 17 }, (_, i) => ({
        name: `All Hoodie ${i + 1}`,
        image: `images/hoodie/all/h${i + 1}.png`,
        discount: `${10 + i % 5}%`
    })),
    kids: Array.from({ length: 17 }, (_, i) => ({
        name: `Kids Hoodie ${i + 1}`,
        image: `images/hoodie/kids/h${i + 1}.png`,
        discount: `${5 + i % 10}%`
    })),
    men: Array.from({ length: 17 }, (_, i) => ({
        name: `Men Hoodie ${i + 1}`,
        image: `images/hoodie/men/h${i + 1}.png`,
        discount: `${15 + i % 5}%`
    })),
    women: Array.from({ length: 17 }, (_, i) => ({
        name: `Women Hoodie ${i + 1}`,
        image: `images/hoodie/women/h${i + 1}.png`,
        discount: `${20 + i % 5}%`
    })),
};
