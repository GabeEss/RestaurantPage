export function createHomePage() {
    let main = document.getElementById('main-body'); // to test if main exists
    let trueMain;
    if (!main) {
        // main element does not exist
        trueMain = document.createElement('main');
        trueMain.id = 'main-body';
        
        
    } else {
        // main element exists
        trueMain = document.getElementById('main-body');
    }

    const itemOne = document.createElement('item-one');
    itemOne.classList.add('items');
    const itemTwo = document.createElement('item-two');
    itemTwo.classList.add('items');
    const itemThree = document.createElement('item-three');
    itemThree.classList.add('items');

    itemOne.innerText = "Welcome to Pancake House! We serve pancakes and pancake accessories.";
    itemTwo.innerText = "We're open 24/7! Every waking moment! Boy howdy! Now that's service!";
    itemThree.innerText = "We are located at 123 Pancake Lane, Toronto, Ontario !";

    trueMain.appendChild(itemOne);
    trueMain.appendChild(itemTwo);
    trueMain.appendChild(itemThree);

    return trueMain;
}

export function createMenuPage() {
    const main = document.getElementById('main-body');
    
    const itemOne = document.createElement('item-one');
    itemOne.classList.add('items');
    const itemTwo = document.createElement('item-two');
    itemTwo.classList.add('items');
    const itemThree = document.createElement('item-three');
    itemThree.classList.add('items');

    itemOne.innerText = "Item 1: Pancakes with Syrup";
    itemTwo.innerText = "Item 2: Pancake Batter";
    itemThree.innerText = "Item 3: Pancakes with Blueberries";

    main.appendChild(itemOne);
    main.appendChild(itemTwo);
    main.appendChild(itemThree);

    return main;
}

export function createContactsPage() {
    const main = document.getElementById('main-body');

    const itemOne = document.createElement('item-one');
    itemOne.classList.add('items');
    const itemTwo = document.createElement('item-two');
    itemTwo.classList.add('items');
    const itemThree = document.createElement('item-three');
    itemThree.classList.add('items');
    const itemFour = document.createElement('item-four');
    itemFour.classList.add('items');

    itemOne.innerText = "Manager: Pancake, Pat \n\n 416-000-0001";
    itemTwo.innerText = "Head Chef: Pancake, Pym \n\n  416-000-0002";
    itemThree.innerText = "Chief Executive Officer: Pancake, Pam \n\n 416-000-0003";

    const link = document.createElement('a');
    link.href = 'mailto:PancakeHouse@pancake.com';
    link.innerText = 'PancakeHouse@pancake.com';
    itemFour.innerText = "You can also reach us at: \u00A0";
    itemFour.appendChild(link);

    main.appendChild(itemOne);
    main.appendChild(itemTwo);
    main.appendChild(itemThree);
    main.appendChild(itemFour);

    return main;
}