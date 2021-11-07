if(document.querySelector('.cards-menu')) {
    const cards = document.querySelector('.cards-menu');
    if(localStorage.getItem('restaurant')) {
        let restaurant = JSON.parse(localStorage.getItem('restaurant'));
        const restaurantTitle = document.querySelector('.restaurant-title');
        const rating = document.querySelector('.rating');
        const price = document.querySelector('.price');
        const category = document.querySelector('.category');
        restaurantTitle.textContent = restaurant.name;
        rating.textContent = restaurant.stars;
        price.textContent = 'От ' + restaurant.price + ' ₽';
        category.textContent = restaurant.kitchen;

        fetch(`https://deliveryfood-59b7a-default-rtdb.firebaseio.com/db/${restaurant.products}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            // console.log(Boolean(data));
            data.reverse();
            // В forEach передали объект через деструктуризацию
            data.forEach( ( {description, id, image, name, price } ) => {
                if(cards) {
                    let card =  `
                    <div class="card">
                        <img src="${image}" alt="${name}" class="card-image" />
                        <div class="card-text">
                            <div class="card-heading">
                                <h3 class="card-title card-title-reg">${name}</h3>
                            </div>
                            <!-- /.card-heading -->
                            <div class="card-info">
                                <div class="ingredients">
                                ${description}
                                </div>
                            </div>
                            <!-- /.card-info -->
                            <div class="card-buttons">
                                <button class="button button-primary button-add-cart">
                                    <span class="button-card-text">В корзину</span>
                                    <span class="button-cart-svg"></span>
                                </button>
                                <strong class="card-price-bold">${price} ₽</strong>
                            </div>
                        </div>
                        <!-- /.card-text -->
                    </div>
                    <!-- /.card -->`;
                    cards.insertAdjacentHTML('afterbegin', card);
                }
            })
        })
        .catch((error) => {
            cards.insertAdjacentHTML('afterend', `
            <div style="color: red; background-color: #fff; width: 100%;">Произошла ошибка получения данных. Попробуйте позже.</div>
            `);
        })
    } else {
        window.location.href = '/deliveryfood/index.php';
    }
}