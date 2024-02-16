const StyleDictionary = require('style-dictionary');
console.log('\nBuild started...');

StyleDictionary.registerFormat({
name: 'android/spacing',
formatter: function({ dictionary }) {
return `<?xml version= \"1.0" encoding=\"utf-8\"?>\n<resources>\n
$ {dictionary.allTokens.map(function (token) {
if (!token.name.includes("desktop_")) {
return '<dimen
name="${token.name.replace("mobile_","")}">$(Math.round(eval(token.value))}dp</dimen>';} })
.filter(true) // Remove undefined entries
.join("\n")}
</resources>`;
} });
// Create a new Style Dictionary instance with the custom configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');
// Build all the platforms defined in the config file
StyleDictionaryExtended.buildAllPlatforms();