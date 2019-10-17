<?php
	header("Content-Type: text/plain; charset=utf-8");

	if(isset($_POST['name'])) {
		
		$email = "vrassrochky.by@gmail.com"; #Email, на него придут письма
		$title = "DODVEREI.BY"; #Заголовок письма

		switch ($_POST['form-id']) {
			case "widget":
				$source = "Обратный звонок";
				break;
			case "form-catalog":
				$source = "Получить каталог";
				break;
			default:
				$source = "Оформить рассрочку";
				break;
		}

		$headers .= "Reply-To: DoDverei <dodvereiby@$SERVER_NAME>\r\n";
		$headers .= "Return-Path: DoDverei <dodvereiby@$SERVER_NAME>\r\n";
		$headers .= "From: DoDverei <dodvereiby@$SERVER_NAME>\r\n";

		$text = "
		Информация о покупателе:

		Имя: ".$_POST['name']."
		Телефон: ".$_POST['phone']."
		Форма: ".$source."
		UTM: ".$_POST['utm']."
		Категория: Телевизоры и бытовая техника
		Время заказа: ".date("Y-m-d H:i:s");

		if(mail($email, $title, $text)) {
			header("Location: /success.html?name=".$_POST['name']."&phone=".$_POST['phone']);
		} else {
			echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
		}
	} else {
		echo "Ошибка";
	}
?>