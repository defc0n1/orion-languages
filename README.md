# Orion Language Package
Multiple language support for Orion's dictionary.
This extention finds the browser language and tries to find that language in your dictionary, in case there isn't that language, it will show the default language.

## Getting started
In order to use this package you should first install it:
```sh
meteor add joadr:orion-languages
```
## Usage
To use this package you should replace your template helpers dict for dictlang:

#### Helpers
**Before:**
```javascript
{{ dict 'site.sitename' 'My sitename' }}
```

**Now:**
```javascript
{{ dictlang 'site.sitename' 'My sitename' }}
```

#### Javascript
**Before:**
```javascript
var description = orion.dictionary.get('site.description', 'No description');
```

**Now:**
```javascript
var description = orion.dictionary.getLang('site.description', 'No description');
```
#### Dictionary definition
To add new langagues you have to prepend the language code before the "category" attribute like this:

```javascript
// Spanish definition ('/dictionary/es/site.js')
orion.dictionary.addDefinition('description', 'es_site', {
  type: String,
  label: 'Descripción'
});

// English definition ('/dictionary/en/site.js')
orion.dictionary.addDefinition('description', 'en_site', {
  type: String,
  label: 'Description'
});

// Fallback definition in case somebody access from other language other than the previous two. ('/dictionary/default/site.js')
orion.dictionary.addDefinition('description', 'site', {
  type: String,
  label: 'Description'
});
```

I Suggest to store them in different folders to mantain a good order.

#### Changing the language of the website
If you want to add support for allowing people to change the language, you can change the value of the Session called lang to your desired language code, for example:
In template:
```html
<img src="/spain.GIF" style="height: 15px;" class="spanish" /> / <img src="/unitedstates.GIF" style="height: 15px;" class="english" />
```

In template events:
```javascript
Template.yourTemplate.events({
  'click .spanish': function(){
    Session.set('lang', 'es');
  },
  'click .english': function(){
    Session.set('lang', 'en');
  }
});
```
