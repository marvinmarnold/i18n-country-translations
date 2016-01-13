// Convert an array of country names to an array of country ISO codes

yaml = require('js-yaml');
fs   = require('fs');
_    = require('underscore')

// Get countries from this file
var inputISOCodes = '0-input-iso-codes.yml'

// Country names correspond to this ISO
var outputLanguage = "hi"

/////////////////////////////////////////////////////////////////
try {
  var isoCodes = yaml.safeLoad(fs.readFileSync(inputISOCodes, 'utf8'));
  isoCodes = isoCodes.input.countries

  var desiredLanguageNames = yaml.safeLoad(fs.readFileSync(outputLanguage + '.yml', 'utf8'));
  desiredLanguageNames = desiredLanguageNames[outputLanguage].countries

  var countryNames = _.map(isoCodes, function(iso) {
    return desiredLanguageNames[iso]
  }).sort()

  console.log("ISO to country names...");
  _.each(countryNames, function(name) {
    console.log(name);
  })
} catch (e) {
  console.log(e);
}
