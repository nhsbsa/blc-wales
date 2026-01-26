const path = require('path');
const fs = require('fs');
const localesDir = path.join(__dirname, '..', 'locales');
const translations = {
  en: JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8')),
  cy: JSON.parse(fs.readFileSync(path.join(localesDir, 'cy.json'), 'utf8'))
};

module.exports = {
  translations,
  "en": require('../locales/en.json'),
  "cy": require('../locales/cy.json'),
  "languagePreference": "en"
}