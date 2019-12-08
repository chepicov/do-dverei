const getItem = ({ imageUrl, name, price, info }) => {
  return `<li class="carousel-item">
      <div class="carousel-item__image-wrapper">
        <img class="carousel-item__image" src="${imageUrl}" alt="${name}" />
      </div>
      <div class="carousel-item__name">
        ${name}
      </div>
      <div class="carousel-item__price">
        от ${price} руб./мес.
      </div>
      <button class="carousel-item__button" onclick="toggleDesc(this)">
        Подробнее
      </button>

      <div class="tv desc" onclick="toggleDesc(this)">
        <div class="desc__close"></div>
        <div class="desc__body">
          <p class="desc__title">${name}</p>
          ${info ? info.map(item => `
            <p>${item.title}: ${item.value};</p>
          `).join('') : ''}
        </div>
      </div>
    </li>`;
}

const getCategory = ({ name, id }, productElements) =>
  `
    <li class="section__subcontainer">
      <h3 class="section__subtitle">${name}</h3>
      <div class="carousel-container">
        <ul class="carousel carousel--${id}" id="${id}">
          ${productElements.join('')}
        </ul>
      </div>
    </li>
  `

const delimeter = `<hr class="section__subdelimeter">`

const categories = [{
  id: 'small',
  name: ` Диагональ <span class="small">от</span> 32'' <span class="small">до</span> 40'' `,
  products: [{
    name: 'HARPER 32R660TS',
    price: '49',
    imageUrl: 'assets/images/harper32.jpg',
    info: [{
      title: 'Диагональ',
      value: '32 дюйма'
    }, {
      title: 'Разрешение экрана',
      value: '1366x768 (HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'POLARLINE 32PL13TC-SM',
    price: '49',
    imageUrl: 'assets/images/polarline32.jpg',
    info: [{
      title: 'Диагональ',
      value: '32 дюйма'
    }, {
      title: 'Разрешение экрана',
      value: '1366x768 (HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }]
  }, {
    name: 'SAMSUNG UE32M5500AUXRU',
    price: '49',
    imageUrl: 'assets/images/samsung32.jpg',
    info: [{
      title: 'Диагональ',
      value: '32 дюйма'
    }, {
      title: 'Разрешение экрана',
      value: '1920x1080 (Full HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }, {
      title: 'Bluetooth',
      value: 'есть'
    }]
  }, {
    name: 'KIVI 32HR52GR',
    price: '49',
    imageUrl: 'assets/images/kivi32.jpg',
    info: [{
      title: 'Диагональ',
      value: '32 дюйма'
    }, {
      title: 'Разрешение экрана',
      value: '1366x768 (HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'LG 32LM6350PLA',
    price: '49',
    imageUrl: 'assets/images/lg32.jpg',
    info: [{
      title: 'Диагональ',
      value: '32 дюйма'
    }, {
      title: 'Разрешение экрана',
      value: '1920x1080 (Full HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }],
}, {
  id: 'medium',
  name: ` Диагональ <span class="small">от</span> 40'' <span class="small">до</span> 43'' `,
  products: [{
    name: 'LG 43UK6200PLA',
    price: '49',
    imageUrl: 'assets/images/lg43.jpg',
    info: [{
      title: 'Диагональ',
      value: '43 дюйма'
    }, {
      title: 'Разрешение экрана',
      value: '3840x2160 (4K UHD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }, {
      title: 'Bluetooth',
      value: 'есть'
    }]
  }, {
    name: 'SAMSUNG UE43RU7200UXRU',
    price: '49',
    imageUrl: 'assets/images/samsung43.jpg',
    info: [{
      title: 'Диагональ',
      value: '43 дюйма'
    }, {
      title: 'Разрешение экрана',
      value: '3840x2160 (4K UHD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'KIVI 40UR50GR',
    price: '49',
    imageUrl: 'assets/images/kivi40.jpg',
    info: [{
      title: 'Диагональ',
      value: '40 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '3840x2160 (4K UHD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'POLARLINE 40PL52TC-SM',
    price: '49',
    imageUrl: 'assets/images/polarline40.jpg',
    info: [{
      title: 'Диагональ',
      value: '40 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '1920x1080 (Full HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'HARPER 40F660TS',
    price: '49',
    imageUrl: 'assets/images/harper40.jpg',
    info: [{
      title: 'Диагональ',
      value: '40 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '1920x1080 (Full HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }],
}, {
  id: 'large',
  name: ` Диагональ <span class="small">от</span> 49'' <span class="small">до</span> 55'' `,
  products: [{
    name: 'Harper 50U660TS',
    price: '49',
    imageUrl: 'assets/images/harper50.jpg',
    info: [{
      title: 'Диагональ',
      value: '50 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '3840x2160 (4K UHD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'SAMSUNG UE50RU7200UXRU',
    price: '49',
    imageUrl: 'assets/images/samsung50.jpg',
    info: [{
      title: 'Диагональ',
      value: '50 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '3840x2160 (4K UHD)'
    }, {
      title: 'HDR',
      value: 'есть'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'LG 49UK6200PLA',
    price: '49',
    imageUrl: 'assets/images/lg49.jpg',
    info: [{
      title: 'Диагональ',
      value: '49 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '3840x2160 (4K UHD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }, {
      title: 'Bluetooth',
      value: 'есть'
    }, {
      title: 'HDR',
      value: 'есть'
    }]
  }, {
    name: 'POLARLINE 50PL51TC-SM',
    price: '49',
    imageUrl: 'assets/images/polarline50.jpg',
    info: [{
      title: 'Диагональ',
      value: '50 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '1920x1080 (Full HD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }]
  }, {
    name: 'LG 55UK6200PLA',
    price: '49',
    imageUrl: 'assets/images/lg55.jpg',
    info: [{
      title: 'Диагональ',
      value: '55 дюймов'
    }, {
      title: 'Разрешение экрана',
      value: '3840x2160 (4K UHD)'
    }, {
      title: 'SmartTV',
      value: 'есть'
    }, {
      title: 'Wi-Fi',
      value: 'есть'
    }, {
      title: 'Bluetooth',
      value: 'есть'
    }, {
      title: 'HDR',
      value: 'есть'
    }]
  }],
}]

const loadProducts = () => {
  const list = document.getElementById("products");
  if (!list) {
    return;
  }
  const categoryElements = categories.map((category) => {
    const productElements = category.products.map(product => getItem(product))
    return getCategory(category, productElements);
  })
  list.innerHTML = categoryElements.join(delimeter);
}

loadProducts()
