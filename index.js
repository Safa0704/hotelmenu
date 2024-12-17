const cuisineFoods = {
    Continental: [
        { name: "Grilled Chicken", price: 250, description: "Tender chicken grilled to perfection with herbs." },
        { name: "Caesar Salad", price: 150, description: "Fresh lettuce with Caesar dressing and croutons." },
        { name: "French Onion Soup", price: 200, description: "Caramelized onions in a savory broth." },
        { name: "Fish and Chips", price: 300, description: "Crispy battered fish served with golden fries." },
        { name: "Beef Steak", price: 350, description: "Juicy beef steak served with mashed potatoes." }
    ],
    Indian: [
        { name: "Butter Chicken", price: 250, description: "Rich creamy chicken curry with aromatic spices." },
        { name: "Paneer Tikka", price: 200, description: "Grilled paneer cubes marinated in spices." },
        { name: "Biryani", price: 230, description: "Fragrant rice cooked with spices and meat or vegetables." },
        { name: "Masala Dosa", price: 120, description: "Crispy rice crepe filled with spicy potato stuffing." },
        { name: "Chole Bhature", price: 150, description: "Spicy chickpeas served with fluffy fried bread." }
    ],
    Italian: [
        { name: "Margherita Pizza", price: 200, description: "Classic pizza with tomato sauce, cheese, and basil." },
        { name: "Pasta Alfredo", price: 200, description: "Creamy Alfredo sauce with penne pasta." },
        { name: "Lasagna", price: 180, description: "Layered pasta with meat, cheese, and tomato sauce." },
        { name: "Risotto", price: 230, description: "Creamy rice dish cooked with broth and Parmesan." },
        { name: "Bruschetta", price: 160, description: "Grilled bread topped with tomatoes and basil." }
    ],
    Chinese: [
        { name: "Sweet and Sour Chicken", price: 200, description: "Crispy chicken tossed in sweet and sour sauce." },
        { name: "Spring Rolls", price: 100, description: "Crispy rolls filled with vegetables and meat." },
        { name: "Fried Rice", price: 120, description: "Stir-fried rice with vegetables and egg." },
        { name: "Kung Pao Chicken", price: 230, description: "Spicy stir-fried chicken with peanuts." },
        { name: "Dim Sum", price: 200, description: "Steamed dumplings filled with meat or vegetables." }
    ],
    Mexican: [
        { name: "Tacos", price: 150, description: "Crunchy tacos filled with spiced meat, lettuce, and cheese." },
        { name: "Burrito", price: 200, description: "Soft tortilla wrap filled with beans, rice, and meat." },
        { name: "Quesadilla", price: 150, description: "Grilled tortilla filled with cheese and meat." },
        { name: "Enchiladas", price: 220, description: "Tortillas rolled with filling and covered in sauce." },
        { name: "Nachos", price: 120, description: "Crispy tortilla chips topped with cheese and jalapenos." }
    ]
};

function populateFoods() {
    const cuisine = document.getElementById('category').value;
    const foodList = document.getElementById('foodName');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    
    // Clear previous options
    foodList.innerHTML = '<option value="">Select Food</option>';
    description.value = '';
    price.value = '';
    
    if (cuisineFoods[cuisine]) {
        cuisineFoods[cuisine].forEach(food => {
            const option = document.createElement('option');
            option.value = food.name;
            option.textContent = food.name;
            foodList.appendChild(option);
        });
    }
}

function displayFoodDetails() {
    const selectedFood = document.getElementById('foodName').value;
    const cuisine = document.getElementById('category').value;
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    
    const food = cuisineFoods[cuisine]?.find(f => f.name === selectedFood);
    if (food) {
        description.value = food.description;
        price.value = food.price;
    } else {
        description.value = '';
        price.value = '';
    }
}
