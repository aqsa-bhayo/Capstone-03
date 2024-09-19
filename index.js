let cart = []; // Array to hold cart items
    let itemCount = 0; // Total number of items in the cart

    function addToCart(itemName, itemPrice, itemImage, itemSize, itemDescription) {
        const item = {
            name: itemName,
            price: itemPrice,
            image: itemImage,
            size: itemSize,
            description: itemDescription
        };

        cart.push(item);
        itemCount++;
        updateCartBadge();
        updateCart();
        openOffcanvas();
    }

    function updateCartBadge() {
        const badgeElement = document.getElementById('cartBadge');
        badgeElement.textContent = itemCount;
    }

    function updateCart() {
        const cartItemsElement = document.getElementById('cartItems');
        const cartSubtotalElement = document.getElementById('cartSubtotal');
        cartItemsElement.innerHTML = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('d-flex', 'align-items-center', 'gap-3', 'border-bottom', 'pb-3', 'mb-3');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="rounded-3" style="width: 100px;">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <p class="mb-1">${item.description}</p>
                    <span>${item.size}</span>
                </div>
                <div class="text-end">
                    <span class="h6 mb-0">$${item.price.toFixed(2)}</span>
                    <button class="remove-button" onclick="removeFromCart(${index})"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            `;
            cartItemsElement.appendChild(itemElement);
            subtotal += item.price;
        });

        cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        itemCount--;
        updateCartBadge();
        updateCart();
    }

    function openOffcanvas() {
        const offcanvasElement = document.getElementById('shoppingCart');
        const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.show();
    }


// let cart = []; // Array to hold cart items
// let itemCount = 0; // Total number of items in the cart

// function addToCart(itemName, itemPrice, itemImage, itemSize, itemDescription, quantitySelectId, errorMessageElementId) {
//     // Clear any previous error message
//     document.getElementById(errorMessageElementId).textContent = '';

//     // Get the quantity from the select element
//     const quantity = parseInt(document.getElementById(quantitySelectId).value);

//     // Validate the quantity input
//     if (isNaN(quantity) || quantity < 1 || quantity > 10) {
//         document.getElementById(errorMessageElementId).textContent = 'Please select a valid quantity between 1 and 10.';
//         return;
//     }

//     // Add the specified quantity of items to the cart
//     const item = {
//         name: itemName,
//         price: itemPrice,
//         image: itemImage,
//         size: itemSize,
//         description: itemDescription,
//         quantity: quantity // Store the quantity in the item object
//     };

//     cart.push(item);
//     itemCount += quantity; // Update the total item count
//     updateCartBadge();
//     updateCart();
//     openOffcanvas();
// }

// function updateCartBadge() {
//     const badgeElement = document.getElementById('cartBadge');
//     badgeElement.textContent = itemCount;
// }

// function updateCart() {
//     const cartItemsElement = document.getElementById('cartItems');
//     const cartSubtotalElement = document.getElementById('cartSubtotal');
//     cartItemsElement.innerHTML = '';
//     let subtotal = 0;

//     cart.forEach((item, index) => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('d-flex', 'align-items-center', 'gap-3', 'border-bottom', 'pb-3', 'mb-3');
//         itemElement.innerHTML = `
//             <img src="${item.image}" alt="${item.name}" class="rounded-3" style="width: 100px;">
//             <div class="flex-grow-1">
//                 <h6 class="mb-1">${item.name}</h6>
//                 <p class="mb-1">${item.description}</p>
//                 <span>${item.size}</span>
//                 <p>Quantity: ${item.quantity}</p> <!-- Display the quantity -->
//             </div>
//             <div class="text-end">
//                 <span class="h6 mb-0">$${(item.price * item.quantity).toFixed(2)}</span>
//                 <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
//             </div>
//         `;
//         cartItemsElement.appendChild(itemElement);
//         subtotal += item.price * item.quantity; // Multiply price by quantity
//     });

//     cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
// }

// function removeFromCart(index) {
//     const removedItem = cart.splice(index, 1)[0]; // Remove the item and get the removed item
//     itemCount -= removedItem.quantity; // Decrease the total count by the quantity of the removed item
//     updateCartBadge();
//     updateCart();
// }

// function openOffcanvas() {
//     const offcanvasElement = document.getElementById('shoppingCart');
//     const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
//     offcanvas.show();
// }
