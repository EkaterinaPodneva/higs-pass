let center = [55.76963601332982,37.636710499999985];

function init(){
    let map = new ymaps.Map("myMap1", {
        center: center,
        zoom: 15
    });

    let placemark = new ymaps.Placemark(center, {
      balloonContentHeader: 'Студия «High pass»',
      balloonContentBody: '107045, Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82',
      balloonContentFooter: 'tel: +7 495 424-23-532'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/map.svg',
      iconImageSize: [12, 12],
      iconImageOffset:[-18, -33]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);

}

ymaps.ready(init);
