// Rédiger une classe dans un fichier class.js contenant les attributs suivants :
// * Un tableau appelé "countries" contenant des objets sous la forme suivante : {'country_name': string, 'continent': string, 'english_speaking': boolean}
// * Un tableau appelé "cities" contenant des objets sous la forme : {'city_name': string, 'country': string}

// La classe doit également contenir les méthodes suivantes :
// * insert_country(country: Object) -> Insère un nouveau pays dans l'attribut "countries".
// * insert_city(city: Object) -> Insère une nouvelle ville dans l'attribut "cities".
// * get_english_speaking_countries() -> Retourne un tableau des pays parlant anglais.
// * get_countries_by_continent(continent: string) -> Retourne un tableau des pays se trouvant sur le continent passé en paramètre.
// * get_cities_by_continent(continent : string) -> Retourne un tableau des villes se trouvant sur le continent passé en paramètre.
// * get_english_speaking_cities() -> Retourne un tableau des villes parlant anglais.

// Toutes les fonctions "get" doivent retourner leurs résultats classés par ordres alphabétique.

class geography {
	constructor() {
		this.countries = [
		{
			'country_name': "france",
			'continent': "europe",
			'english': false
		}
		]
		this.cities = [
		{
			'city_name': "paris",
			'country': "france"
		}
	 	]
	}
	insert_country(country)
	{
		this.countries.push(country);
	}
	insert_city(city)
	{
		this.cities.push(city);
	}
	get_english_speaking_countries()
	{
		var ret = this.countries.map(function(country)
		{
			if (country.english)
				return country.country_name;
		})
		return ret.sort().filter(function(elem) { return elem != undefined });
	}
	get_countries_by_continent(continent)
	{
		var ret = this.countries.map(function(country)
		{
			if (country.continent == continent)
				return country.country_name;
		})
		return ret.sort().filter(function(elem) { return elem != undefined });
	}
	get_cities_by_continent(continent)
	{
		var countriesArray = this.get_countries_by_continent(continent);

		var ret = this.cities.map(function(city)
		{
			var newCity;
			countriesArray.forEach(function(country)
			{
				if (city.country == country)
					newCity = city.city_name;
			})
			return newCity;
		})
		return ret.sort().filter(function(elem) { return elem != undefined });
	}
	get_english_speaking_cities()
	{
		var countriesArray = this.get_english_speaking_countries();
		
		var ret = this.cities.map(function(city)
		{	
			var newCity;
			countriesArray.forEach(function(country)
			{
				if (city.country == country)
					newCity = city.city_name;
			})
			return newCity;
		})
		return ret.sort().filter(function(elem) { return elem != undefined });
	}
}

var geo = new geography;

function add_place(place) {
	if (place == "ville")
	{
		var ret = prompt("Entrez la ville souhaitée sous ce format : nom de la ville, son pays");

		if (ret == null)
		{
			console.log("Une erreur s'est produite avec la donnée saisie.");
			return ;
		}
		cityArray = ret.split(', ');
		if (cityArray.length != 2)
		{
			console.log("Mauvais format de ville saisie.");
			return ;
		}
		cityObjet = {
			'city_name' : cityArray[0],
			'country' : cityArray[1]
		}
		geo.insert_city(cityObjet);
	}
	else if (place == "pays")
	{
		var ret = prompt("Entrez le pays souhaité sous ce format : nom du pays, son continent, langue anglaise : oui ou non");

		if (ret == null)
		{
			console.log("Une erreur s'est produite avec la donnée saisie.");
			return ;
		}
		countryArray = ret.split(', ');
		if (countryArray.length != 3)
		{
			console.log("Mauvais format de pays saisie.");
			return ;
		}
		if (countryArray[2] == "oui")
			countryArray[2] = true;
		else if (countryArray[2] == "non")
			countryArray[2] = false;
		else
		{
			console.log("Une erreur s'est produite avec la donnée saisie.");
			return ;
		}
		countryObjet = {
			'country_name' : countryArray[0],
			'continent' : countryArray[1],
			'english' : countryArray[2]
		}
		geo.insert_country(countryObjet);
	}
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	console.log(place.capitalize(),"ajouté(e) !");
}

function write_english_place(param) {
	var retCountries = geo.get_english_speaking_countries();
	var retCities = geo.get_english_speaking_cities();

	if (retCountries[0] == null)
		console.log("Il n'y aucun(e) pays/ville anglophone enregistré(e).");
	else {
		if (param == "pays")
			console.log("Les pays anglophones sont : "+retCountries.toString());
		else if (param == "ville")
			console.log("Les villes anglophones sont : "+retCities.toString());
	}
}

function write_continent_place() {
	var continent = prompt("Quel continent voulez-vous observer ?");

	if (continent != null)
	{
		var retCountries = geo.get_countries_by_continent(continent);
		var retCities = geo.get_cities_by_continent(continent);

		if (retCountries[0] == null)
			console.log("Il n'y a pas de pays associé à ce continent.");
		else {
			console.log("Les pays appartenant à l'"+continent+" sont : "+retCountries.toString());
			console.log("Les villes appartenant à l'"+continent+" sont : "+retCities.toString());
		}
	}
	else
		console.log("Une erreur s'est produite avec la donnée saisie.");
}
