window.addEventListener('load', () => {
    let long,
        lat,
        temperatureDescription = document.querySelector('.temperature-description'),
        temperatureDegree = document.querySelector('.temperature-degree'),
        temperatureTimezone = document.querySelector('.location-timezone'),
        temperatureSection = document.querySelector('.temperature'),
        temperatureSpan = document.querySelector('.temperature span');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/ecc2b57415ce3984a3544cb79897f796/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, icon } = data.currently;

                    //Отображаем данные, полученные с API в интерфейсе
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    temperatureTimezone.textContent = data.timezone;

                    //Формула перевода градусов Фаренгейта в градусы Цельсия
                    let celsius = (temperature - 32) * (5 / 9);

                    //Отображаем иконку
                    setIcons(icon, document.querySelector('.icon'));

                    //Переводим градусы Фаренгейта в градусы Цельсия и наоборот
                    temperatureSection.addEventListener('click', () => {
                        if(temperatureSpan.textContent === 'F') {
                            temperatureSpan.textContent = 'C';
                            temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = 'F';
                            temperatureDegree.textContent = temperature;
                        }
                    });
                })
        }); 
    }

    function setIcons(icon, iconID) {
        var skycons = new Skycons({"color": "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});