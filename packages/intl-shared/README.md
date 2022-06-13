> # **CustomProvider**

## Props

**config**

**Required Keys**

lang: string;

lnExp: boolean;

strings: LangStrings;

**Optional Keys**

pathsToHideModals?: string[];

Modal?: ReactComponent

  

**Requirement**

CustomProvider makes use of useLocation. In Order to make use of CustomProvider client will have to install react-router-dom & CustomProvider must be user inside <BrowserRouter>.

  

**Why to use**

CustomProvider changes the html lang automatically when user changes the language preference. Internally it makes use of the Provider component.

  

> # **Provider**

## Props

**Required Keys**

locale: string

Messages: {id: value, ...},

defaultMessages: {id: value, ...}

  
  

> # **FormattedMessage**

## Props

**Required Keys**

id: string

**Optional Keys**

defaultMessage: string

values: { ID: VALUE }

hasTags: boolean

  

**How to Use**

You have to pass id props, defaultMessage and values if required. FormattedMessage make use of **useStringFromId** hook and returns you the value for the given id.

  

> # **Hooks**

## **useStringFromId(id, defaultMessage, values)**

Client have to pass id in this hook which is mandatory. Other two parameters are optional. It return the value for the given id.

  

## **useIntl()**

useIntl don't need any parameters. It returns locale, message, defaultMessage etc.

  
  

> # **Caching**

pass LANG_CONFIG_URL in env file and set it to S3 JSON URL. langConfigInitiator will fetch string from this url and set them in cache object. use languageConfigWatcher to renew the cache.

  

> # **Middleware**

## addLanguageConfigToLocals

addLanguageConfigToLocals fetch cached strings from res.locals.cache and prepares a Reducer and set it to res.locals.langConfig. This reducer has lang, strings, isExperimentEnabled etc.

**Why To Use**

This reducer can be sent to client through redux / window variables and client can make use of this information to send config prop in CustomProvider.

**Note**: This middleware supports for regionalization AB thru remote config as explained below.

 1. Remote config exposes an experiment named '*VRN_REGION*' that just buckets users using bcookie hash value. In the nutshell, with this experiment PAN INDIA users will be buckets as per experiment variant definitions. More on this [here](https://www.npmjs.com/package/@eyewa/experiment-sdk). Sample payload -  
```javascript
{
  "status": true,
  "sampleRate": {
    "from": 0,
    "to": 1
  },
  "experimentLayer": "HP",
  "id": "VRN_REGION",
  "isSSR": true,
  "variants": [
    {
      "name": "A",
      "sampleRate": {
        "from": 0,
        "to": 0.2
      }
    }
  ]
}
```
 2. Remote config also exposes region experiment map named '*regionExperimentMap*' that explains the variant list that is applicable for a specific region. Note: region name here is mapped as per Cloudfront Region header guidelines. Sample payload - 
```javascript
{
  "DL": [
    "A"
  ]
}
```
 3. This middleware maps user's region to a variant list using 'regionExperimentMap' and eventually checks if the variant is a part of experiment '*VRN_REGION*' or not. If yes, the also puts users under Vernacular experiment.
 4. This middleware also pushes user under Vernacular experiment if user's region is marked as '*' in '*regionExperimentMap*' map of remote-config. 
 ```javascript
{
  "MH": [
    "*"
  ]
}
```