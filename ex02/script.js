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

class geographie {

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
		return ret.sort();
	}
	get_countries_by_continent(continent) 
	{
		var ret = this.countries.map(function(country)
		{
			if (country.continent == continent)
				return country.country_name;
		})
		return ret.sort();
	}
	get_cities_by_continent(continent)
	{
		var countriesArray = this.get_countries_by_continent(continent);
		
		var ret = this.cities.map(function(city)
		{
			countriesArray.foreach(function(country)
			{
				if (city.country == country.country_name)
					return city.city_name;
			})
		})
		return ret.sort();
	}
	get_english_speaking_cities()
	{
		var countriesArray =  this.get_english_speaking_countries();
		
		var ret = this.cities.map(function(city)
		{
			countriesArray.foreach(function(country)
			{
				if (city.country == country.country_name)
					return city.city_name;
			}
			})
		})
		return ret.sort();
	}
}

var geo = new geographie();

function add_place() {
	var place = prompt("Quel(le) ville/pays souhaitez-vous ajouter ?");

	console.log(place);
}
