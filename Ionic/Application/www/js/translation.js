////////////////////////////////////////////////////////////////////////////////
/*
File:   translation.js
Author: Josh Wittner/Matt Casanova
email:  lazersquad@gmail.com

This file is for translations of our strings for possible internationalization.
Strings for the user should not be hard coded through out the proejct, but 
instead created here.

This Translation object is used in our angular.congif function with the 
$translationProvider passed in to the registerWithProvider function
*/
////////////////////////////////////////////////////////////////////////////////
var Translation = {
  preferredLanguage: 'en',
  supportedLanguages : ['en'],
  en:
  {
    main_viewTitle:         "DebtCalc"
  },

  //This function must be called in the app.js angular config function
  registerWithProvider: function(provider){
    this.supportedLanguages.forEach( function(value) {
      provider.translations(value, this[value]);
    }, this);
    
    provider.preferredLanguage(this.preferredLanguage);
  }

}
