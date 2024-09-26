
'use strict'; // Включаем строгий режим

//Микроразметка
type="application/ld+json"
		{
		  "@context": "https://schema.org/",
		  "@type": "Product",
		  "name": "Памятные (Ритуальные) вазоны",
		  "image": "https://vazon.com.ru/images/ritualnye-plastikovye-vazony-na-mogilu.png",
		  "description": "☗ Купите наши памятные и ритуальные пластиковые вазоны с колышком для могил — идеальное решение для сохранения памяти о близких. Наши вазоны устойчивы, практичны и доступны оптом, что делает их идеальным выбором для кладбищ и мемориалов. Доступные цвета включают Янтарно-Золотой, Тёмно-Бронзовый, Белый и Антрацит, что позволяет вам выбрать вариант, который гармонично впишется в окружение.",
		  "brand": {
			 "@type": "Brand",
			 "name": "Памятный вазон"
		  },
		  "offers": {
			 "@type": "Offer",
			 "url": "https://vazon.com.ru/",
			 "itemCondition": "https://schema.org/NewCondition",
			 "availability": "https://schema.org/InStock",
			 "packagedQuantity": {
				"@type": "Quantity",
				"value": "14",
				"unitText": "шт."
			 }
		  },
		  "color": [
			 "Янтарно-Золотой",
			 "Тёмно-Бронзовый",
			 "Белый",
			 "Антрацит"
		  ],
		  "contactPoint": {
			 "@type": "ContactPoint",
			 "telephone": "+7 (963) 77 999 05",
			 "contactType": "customer service",
			 "areaServed": "RU",
			 "availableLanguage": "Russian"
		  }
		}
	

//Меню сворачивание

		document.addEventListener('DOMContentLoaded', function () {
			// Получаем все ссылки внутри навигационного меню
			const navLinks = document.querySelectorAll('#navbarNav .nav-link');
			// Получаем элемент, который управляет открытием/закрытием меню
			const navbarToggler = document.querySelector('.navbar-toggler');
			// Получаем элемент меню
			const navbarCollapse = document.querySelector('#navbarNav');

			// Добавляем обработчик клика для каждой ссылки
			navLinks.forEach(link => {
				link.addEventListener('click', () => {
					// Закрываем меню
					const collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
					collapse.hide();
				});
			});
		});
