//side menu
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const sideBar = document.querySelector('.side-bar')

toggleBtn.onclick = function () {
    sideBar.classList.toggle('open')
    const isOpen = sideBar.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'las la-times-circle'
    : 'las la-bars'   
}


//carousel

const carousel = document.querySelector(".carousel-2-main"),
firstDiv = document.querySelectorAll(".main-2-div")[0];
arrowIcons = document.querySelectorAll(".carousel-wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstDivWidth = firstDiv.cilentWidth + 22;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstDivWidth : firstDivWidth;
    });

});

const dragStart = (e) => {
    //updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff; 
}

const dragStop = () => {
    let isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);


let itemData = {
    data:[
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/@𝙘𝙤𝙩𝙩𝙤𝙣𝙝𝙤𝙚𝙨 ∷.jpeg",
    },
        {
        productName: "Banana shake",
        category: "Smoothie",
        price: "49",
        image: "./Assets/images/icons8-milkshake-64.png",
    },
        {
        productName: "MIod Dish",
        category: "Japanese",
        price: "29",
        image: "./Assets/images/images/2b12fd4e691b0ed645e89acebad76936.jpeg",
    },
        {
        productName: "Lobsters iom",
        category: "Chinese",
        price: "17",
        image: "./Assets/images/images/4e1957fc4daeea2a52b5b964f83d9946.jpeg",
    },
        {
        productName: "Potatoes Staeak",
        category: "Comfort Food",
        price: "32",
        image: "./Assets/images/images/5f6998f54fa40923b32845917e5727e7.jpeg",
    },
        {
        productName: "Teal Shake",
        category: "Smootie",
        price: "38",
        image: "./Assets/images/images/6aa1da733a6394f1141929605861ce57.jpeg",
    },
        {
        productName: "Purple berry",
        category: "Smoothie",
        price: "39",
        image: "./Assets/images/images/6dc215f0-59db-4462-81b5-e4f0945f3091.png",
    },
        {
        productName: "Stack Stack",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/6eb3ecc4327dd7f0aa7e6a9166c5da46.jpeg",
    },
        {
        productName: "Healthy",
        category: "Vegan",
        price: "30",
        image: "./Assets/images/images/6ef37714fa9d4832d32def11adca9e6c.jpeg",
    },
        {
        productName: "Aijm s",
        category: "Comfort Meal",
        price: "30",
        image: "./Assets/images/images/7c9930879e15604109e6af6a6ea0b5ea.jpeg",
    },
        {
        productName: "Box Glory",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/7e82f1cf441311cb987d3f1027cafce6.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Japanese",
        price: "30",
        image: "./Assets/images/images/7fcd2783e6bd2b5b6b07593ad832de4a.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Chinaese",
        price: "30",
        image: "./Assets/images/images/8c9b68e4a9b52c0094087c40c891d65f.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Burger",
        price: "30",
        image: "./Assets/images/images/8c26c0f25305b40880695909f61a41b1.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "American",
        price: "30",
        image: "./Assets/images/images/9a4d60fbcf827c0cce489436125771e7.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Dessert",
        price: "30",
        image: "./Assets/images/images/9bf87ac97a9b14d281d4ac08155e620a.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/9c97f20a2bc75c1e10289caa6245635c.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/9e6687afcc23c13d79d0fcfcc39f0e2a.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/26f1022bdc0b0ab23c113edc785b8d91.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/29c8cfca99c24dd7.webp",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/33b6e5bfdd5c2fe907e25d6b848a5777.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/38fb5e5cdf1a86ce02f3e89dd5375e5c.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/40d69876509d41eefda51adff9178b1b.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/46ad298fb894d81e9c8f6c83b86bb9bb.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/58dd76d82d9f6f26008b4797.webp",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/70a7be9fc9ff658778c7c1c5a9ffd0b2.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/82def7aa40042ad7166eb6389f9f5d1e.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/84bb7279b2cb587e5a73e96a97f8d524.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/85e5b4497002df61cfa2462a40aa88ea.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/86bec531885e4518a745a180ff69e036.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/94d0e7cd86f5d912ec4b0bd6dc8d2e7a.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Chinese",
        price: "30",
        image: "./Assets/images/images/299c7a0fb8386d41f3df3b2cfc335661.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Burgers",
        price: "30",
        image: "./Assets/images/images/385e4853da66f404e587c2399cc1c637.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/418cccd649f9433ce701286a909c6ca4.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/533e39171624b889e8ea6d2175c3a43f.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/604d5ddacb94289083b13c1e1cd60e69.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/641e7b7cb3007cf9ca67c334a70096eb.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/716d20e03f273de77b32819b827590ea.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/747bc33a2ef05eb9ece00b5fd4a6fa3a.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/05701da8ffa3c0a6b4fd303fc718b99e.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/71949a9e270aa7fde32f46c0f7b55778.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/739460ac2d678743f8fde41034ce3c73.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/766632efb6d11d9cbc69678802341d57.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/859665cd3fab7580f99ad8952300ef90.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/874638c5964edc0262aff3d0ef44101a.jpeg",
    },
        {
        productName: "Cheese Meal",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/91848564fd5bf777b25d2f050a3bd6fe.jpeg",
    },
        {
        productName: "pizza Rounds",
        category: "American",
        price: "30",
        image: "./Assets/images/images/0399662052f854c32f3ce21707265eda.jpeg",
    },
        {
        productName: "Fruity Tray",
        category: "Vegan",
        price: "30",
        image: "./Assets/images/images/a7e5ca4ccb25404a5c612508153fbb40.jpeg",
    },
        {
        productName: "Steak",
        category: "Chicken",
        price: "50",
        image: "./Assets/images/images/a9bca24635ac7b8d70fcc99751c49412.jpeg",
    },
        {
        productName: "Pink Fish Cream",
        category: "Sushi",
        price: "20",
        image: "./Assets/images/images/a50013c951cfaaac486e02144015d6a7.jpeg",
    },
        {
        productName: "Pizza Team",
        category: "American",
        price: "60",
        image: "./Assets/images/images/aa629dad0c29058d2fcf98e108997de1.jpeg",
    },
        {
        productName: "Red Belnd",
        category: "Smoothie",
        price: "30",
        image: "./Assets/images/images/b5f9bf05ff7fdb951896135f245cb9f8.jpeg",
    },
        {
        productName: "Fruity Pizza Tray",
        category: "Fast Food",
        price: "30",
        image: "./Assets/images/images/b7ef9bb9ca14210a1a1fc8e8e1107427.jpeg",
    },
        {
        productName: "maselio",
        category: "Smoothie",
        price: "30",
        image: "./Assets/images/images/d78a0419078e7ca63b3cb64e5b6b4fa1.jpeg",
    },
        {
        productName: "Worm de",
        category: "Chinese",
        price: "30",
        image: "./Assets/images/images/e6e1d2d89e171ea593d756223463ed14.jpeg",
    },
        {
        productName: "LioP Nuh",
        category: "Asian",
        price: "30",
        image: "./Assets/images/images/e9a15f72f6e33ac0b86d987c4219357d.jpeg",
    },
        {
        productName: "Egg soio",
        category: "Greek",
        price: "30",
        image: "./Assets/images/images/pexels-foodie-factor-566566.jpg",
    },
        {
        productName: "Moring ol",
        category: "Breakfast",
        price: "30",
        image: "./Assets/images/images/pexels-chris-matthews-588776.jpg",
    },
        {
        productName: "Theme Cake Tray",
        category: "Cake",
        price: "30",
        image: "./Assets/images/images/pexels-jeswin-thomas-7474617.jpgg",
    },
        {
        productName: "Jelly Cake",
        category: "Dessert",
        price: "30",
        image: "./Assets/images/images/pexels-abhinav-goswami-291528.jpg",
    },
        {
        productName: "Blue berry gey",
        category: "Breakfast",
        price: "30",
        image: "./Assets/images/images/pexels-anete-lusina-4790302.jpg",
    },
        {
        productName: "Bread",
        category: "Comfort Food",
        price: "30",
        image: "./Assets/images/images/pexels-geraud-pfeiffer-6605653.jpg",
    },
        {
        productName: "lebab fruit",
        category: "Vegan",
        price: "30",
        image: "./Assets/images/images/vegetable-skewer-3317060_640.jpeg",
    },
        {
        productName: "B King",
        category: "Burger",
        price: "30",
        image: "./Assets/images/images/pexels-daniel-reche-1556688.jpg",
    },
        {
        productName: "Fruity Tray",
        category: "Vegan",
        price: "30",
        image: "./Assets/images/images/a7e5ca4ccb25404a5c612508153fbb40.jpeg",
    },
        {
        productName: "Fruity Tray",
        category: "Vegan",
        price: "30",
        image: "./Assets/images/images/a7e5ca4ccb25404a5c612508153fbb40.jpeg",
    },
],
};
