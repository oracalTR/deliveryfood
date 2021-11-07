<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Delivery Food — доставка еды на дом</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic" rel="stylesheet" />
	<link rel="stylesheet" href="css/normalize.css" />
	<link rel="stylesheet" href="css/style.css" />
	<script src="./js/auth.js" defer></script>
    <script src="./js/partners.js" defer></script>
    <script src="./js/menu.js" defer></script>
</head>

<body>
	<div class="container">
		<header class="header">
			<a href="index.php" class="logo">
				<img src="img/icon/logo.svg" alt="Logo" />
			</a>
			<label class="address">
				<input type="text" class="input input-address" placeholder="Адрес доставки" />
			</label>
			<div class="buttons">
				<span class="user-name"></span>
				<button class="button button-primary button-auth">
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
				<button class="button button-cart" id="cart-button">
					<span class="button-cart-svg"></span>
					<span class="button-text">Корзина</span>
				</button>
				<button class="button button-primary button-out">
					<span class="button-text">Выйти</span>
					<span class="button-out-svg"></span>
				</button>
			</div>
		</header>
	</div>
	<!-- /.container  -->