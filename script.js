async function checkWeather(city) {
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    city = city.trim();

    try {
        const res = await fetch(URL + city + `&appid=${APIKEY}`);

        if (res.status === 404) {
            alert("City not found!");
            return;
        }

        const data = await res.json();

        if (data.name.toLowerCase() !== city.toLowerCase()) {
            alert("City not found properly");
            return;
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    } catch (error) {
        alert("Something went wrong!");
    }
}