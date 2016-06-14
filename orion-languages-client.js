Template.registerHelper('dictlang', function(name, defaultValue) {
  return orion.dictionary.getLang(name, defaultValue);
});

Meteor.startup(function() {
  var userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.split('-')[0];
  Session.set('lang', 'en');
});