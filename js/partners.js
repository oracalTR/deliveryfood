const cards = document.querySelector('.cards-restaurants');
fetch('https://deliveryfood-59b7a-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        // console.log(Boolean(data));
        data.reverse();
        let partners = data;
        // В forEach передали объект через деструктуризацию
        data.forEach( ( {image, kitchen, name, price, products, stars, time_of_delivery } ) => {
               if(cards) {
                let card =  `<a href="restaurant.php" class="card card-restaurant" data-products="${products}">
                <img src="${image}" alt="${name}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title">${name}</h3>
                        <span class="card-tag tag">${time_of_delivery} мин</span>
                    </div>
                    <!-- /.card-heading -->
                    <div class="card-info">
                        <div class="rating">
                        ${stars}
                        </div>
                        <div class="price">От ${price} ₽</div>
                        <div class="category">${kitchen}</div>
                    </div>
                   <!-- /.card-info -->
                </div>
                <!-- /.card-text -->
                </a>
                <!-- /.card -->`;
                cards.insertAdjacentHTML('afterbegin', card);
               }
        })

        if(document.querySelector('.cards-restaurants')) {
            const cardsWrap = document.querySelector('.cards-restaurants');
            cardsWrap.addEventListener('click', (event) => {
                if(localStorage.getItem('user')) {
                // event.preventDefault();
                    if(event.target.parentNode.classList.contains('card-restaurant')) {
                        let restourantClick = event.target.parentNode;
                        let namePartners = restourantClick.getAttribute('data-products');
                        partners.forEach(elem => {
                            if(elem.products == namePartners) {
                                let restourant = elem;
                                localStorage.setItem('restaurant', JSON.stringify(restourant));
                                // console.log(elem);
                            }     
                        })
                        // window.location.href = '/deliveryfood/restaurant.php';
                    }
                } else {
                    event.preventDefault();
                    modalAuth.style.display = 'flex';
                }
            })
        }
    })
    .catch((error) => {
        cards.insertAdjacentHTML('afterend', `
        <div style="color: red; background-color: #fff; width: 100%;">Произошла ошибка получения данных. Попробуйте позже.</div>
        `);
    })