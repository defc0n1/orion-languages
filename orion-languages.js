/**
 * Returns the value of the definition.
 * If the definition doesn't exists it
 * returns the defaultValue
 */
orion.dictionary.getLang = function(path, defaultValue) {
  // Sets empty string to avoid problems on templates
  defaultValue = !defaultValue || defaultValue instanceof Spacebars.kw ? undefined : defaultValue;

  if (!defaultValue && orion.dictionary.simpleSchema()) {
    var def = orion.dictionary.simpleSchema()._schema[path];
    if (def && _.has(def, 'defaultValue')) {
      defaultValue = _.isFunction(def.defaultValue) ? def.defaultValue() : def.defaultValue;
    }
  }

  var dictionaryId = Meteor.isServer && process.env.ORION_APPID ? { _id: process.env.ORION_APPID }: {};
  var dictionary = this.findOne(dictionaryId);

  if(Meteor.isClient){
    var currentLanguage = Session.get('lang');
    if(currentLanguage){
      var newpath = currentLanguage + '_' + path;
      var dict = orion.helpers.searchObjectWithDots(dictionary, newpath);
      if (!dict){
        return orion.helpers.searchObjectWithDots(dictionary, path);
      } else {
        return dict;
      }
    }
  }

  return orion.helpers.searchObjectWithDots(dictionary, path) || defaultValue;
};