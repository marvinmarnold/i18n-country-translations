// Convert an array of country names to an array of country ISO codes

yaml = require('js-yaml');
fs   = require('fs');
_    = require('underscore')

// Get countries from this file
var inputCountries = '0-input-country-names.yml'

// Country names correspond to this ISO
var countriesInISO = "en"

/////////////////////////////////////////////////////////////////
try {
  var countryNames = yaml.safeLoad(fs.readFileSync(inputCountries, 'utf8'));
  countryNames = countryNames.input.countries

  var allCountryCodes = yaml.safeLoad(fs.readFileSync(countriesInISO + '.yml', 'utf8'));
  allCountryCodes = _.invert(allCountryCodes[countriesInISO].countries) // turn into {name:iso}

  var countryISOs = _.map(countryNames, function(countryName) {
    return _.find(allCountryCodes, function(iso, name) {
      return name === countryName
    }) || countryName
  })

  console.log("Country names to ISO...");
  _.each(countryISOs, function(iso) {
    console.log(iso);
  })
} catch (e) {
  console.log(e);
}
