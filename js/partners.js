const cards = document.querySelector('.cards-restaurants');
fetch('https://deliveryfood-59b7a-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(Boolean(data));
        data.reverse();
        data.forEach( ( elem, index, data ) => {
               if(cards) {
                let card =  `<a href="restaurant.php" class="card card-restaurant">
                <img src="${elem.image}" alt="image" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title">${elem.name}</h3>
                        <span class="card-tag tag">${elem.time_of_delivery} мин</span>
                    </div>
                    <!-- /.card-heading -->
                    <div class="card-info">
                        <div class="rating">
                        ${elem.stars}
                        </div>
                        <div class="price">От ${elem.price} ₽</div>
                        <div class="category">${elem.kitchen}</div>
                    </div>
                   <!-- /.card-info -->
                </div>
                <!-- /.card-text -->
                </a>
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