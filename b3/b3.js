var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
    },
];

function getCategories(categories, parent_id, result = []) {
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].parent === parent_id) {
            var node = {
                id: categories[i].id,
                name: categories[i].name,
            };

            var children = getCategories(categories, categories[i].id);
            if (children.length > 0) {
                node.children = children;
            }

            result.push(node);
        }
    }

    return result;
}

var nestedCategories = getCategories(categories, 0);
console.log(nestedCategories);
