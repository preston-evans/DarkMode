const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
$(storeItems).each(function () {
    let item = this;
    console.log(this.name);
    if (item.inStock === true) {
        $('#container').append(`<div class='parent'><div class='child'>$${item.price}</div><div class='child'>${item.name}</div><div class='child'>${item.details}</div></div>`)
    } else {
    }
});
$("#clickMe").click(function () {
    if ($(this).text() == "Toggle Dark Mode") {
        $(this).text("Toggle Bright Mode");
    } else {
        $(this).text("Toggle Dark Mode");
    };
    $('#contentContainer').toggleClass('darkMode');
    $('h1').toggleClass('darkMode');
    $('span').toggleClass('darkMode');
    $('#clickMe').toggleClass('darkMode');
    $('.parent').toggleClass('parentDarkMode');
    $('.child').toggleClass('childDarkMode');
});