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
	insert_country(country) {
		this.countries.push(country);
	}
	insert_city(city) {
		this.cities.push(city);
	}
	get_english_speaking_countries() {
		var ret = this.countries.map(function(country) {
			if (country.english)
				return country.country_name;
		})
		return ret.sort();
	}
	get_countries_by_continent(continent) {
		var ret = this.countries.map(function(country) {
			if (country.continent == continent)
				return country.country_name;
		})
		return ret.sort();
	}
	get_cities_by_continent(continent) {
		var countriesArray = this.get_countries_by_continent(continent);
		
		var ret = this.cities.map(function(city) {
			countriesArray.foreach(function(country) {
				if (city.country == country.country_name)
					return city.city_name;
			})
		})
		return ret.sort();
	}
	get_english_speaking_cities() {
		var countriesArray =  this.get_english_speaking_countries()
		
		var ret = this.cities.map(function(city) {
 			countriesArray.foreach(function(country) {
				if (city.country == country.country_name)
					return city.city_name;
			})
		})
		return ret.sort();
	}
}