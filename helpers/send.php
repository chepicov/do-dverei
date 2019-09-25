<?php
	header("Content-Type: text/html; charset=utf-8");

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

		$text = "
		Информация о покупателе:

		Имя: ".$_POST['name']."
		Телефон: ".$_POST['phone']."
		Форма: ".$source."
		Сайт: dodverei.by
		Время заказа: ".date("Y-m-d H:i:s");

		if(mail($email, $title, $text, "From: dodverei@$SERVER_NAME")) {
			header("Location: /success.html?name=".$_POST['name']."&phone=".$_POST['phone']);
		} else {
			echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
		}
	} else {
		echo "Ошибка";
	}
?>