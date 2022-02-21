function addYaMaps () {
    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('contacts__map', {
            center: [55.772365, 37.587182],
            zoom: 16,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark([55.772165, 37.587582], {
        balloonContentHeader: 'Моспроект-4',
        balloonContentBody: "2-я Брестская ул., 29А, Москва, Россия"

    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/map-marker-alt.png',
        iconImageSize: [28, 37],
        iconImageOffset: [-37, -45],
        balloonOffset:[-25, -5]
    });
    myMap.geoObjects.add(myPlacemark);
    }
}
addYaMaps ();