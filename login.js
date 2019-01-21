const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const emailBox = document.getElementById('emailBox');
const pwBox = document.getElementById('pwBox');
const currentDate = new Date();
let hourWithLeadingZeros = '';

if (currentDate.getHours().length < 2) {
	hourWithLeadingZeros = '0' + currentDate.getHours();
}
else {
	hourWithLeadingZeros = currentDate.getHours();
}

document.getElementById('todaysDate').innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getUTCDate()}, ${currentDate.getFullYear()}`;
document.getElementById('currentTime').innerHTML = currentDate.toTimeString().substr(0,8);

function loginValidate() {
	let loginIsValid = true;
	let loginErrorString = '';
	
	const errorMessageBox = document.getElementById('errorMessage');
	if (errorMessageBox != null) {
		errorMessageBox.remove();
	}
	
	if (emailBox.value === '' || pwBox.value === '') {
		loginIsValid = false;
		loginErrorString += '-Both fields must be completed.<br />';
	}
	if (emailBox.value.match(/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/) === null) {
		loginIsValid = false;
		loginErrorString += '-Must enter a valid email address.<br />';
	}
	if (pwBox.value.length < 6) {
		loginIsValid = false;
		loginErrorString += '-Password must be at least six characters.<br />';
	}
	
	if (loginIsValid === false) {
		let errorMessage = document.createElement('p');
		errorMessage.id = 'errorMessage';
		errorMessage.innerHTML = 'ERROR! Please complete the form!<br />' + loginErrorString;
		document.getElementById('loginContainer').appendChild(errorMessage);
	}
}


/* let weatherContainer = document.getElementById('weatherList');

fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=XbB7nLiCCf2hId4bpJoMgBEZw4Ijv1Yd&metric=true')
	.then(response => response.json())
	.then(dataJson => {
		weatherContainer.innerHTML = '';
		dataJson.DailyForecasts.forEach(forecast => {
			let forecastDate = new Date(forecast.Date.substr(0, 10));
			let weatherOutput = document.createElement('li');
			weatherOutput.innerHTML = `<a href="${forecast.Link}" target="_blank">${weekdays[forecastDate.getDay()]}, ${months[forecastDate.getMonth()]} ${forecastDate.getUTCDate()}, ${forecastDate.getFullYear()}</a><br />Day: ${forecast.Day.ShortPhrase}<br />Night: ${forecast.Night.ShortPhrase}<br />Min: ${forecast.Temperature.Minimum.Value}${forecast.Temperature.Minimum.Unit}<br>Max: ${forecast.Temperature.Maximum.Value}${forecast.Temperature.Maximum.Unit}<br /><br />`;
			weatherContainer.appendChild(weatherOutput);
		});
	})
	.catch(err => {
		weatherList.innerHTML = '<p>There was a problem loading the weather data.</p>';
		console.error(err);
	}); */