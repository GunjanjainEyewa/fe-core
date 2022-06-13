# analytics-sdk

### Installation

```
npm install @eyewa/analytics-sdk
```

### Initialization

```
import AnalyticsSDK from "@eyewa/analytics-sdk";


const sdk = new AnalyticsSDK({
    // analytics pipeline endpoint
    analyticsEndpoint: "https://l0rcvdqq6a.execute-api.ap-south-1.amazonaws.com/v1/events",
    // current application environment - prod / preprod / qa / smoke / perf
    environment: "qa",
    // application vertical - nykaa / nykaaman / nykaafashion
    vertical: "nykaafashion",
    // application platform - android / ios / mweb / dweb
    platform: "mweb",
    // store - optional - beauty has a store concept
});
```

### Destroy Analytics
```
    sdk.destroy()
```

### Send Analytics events


```
sdk.sendEvent(
    // unique event name
    'page_load', 
    // event data
    { 
        page_load: 'Home',
        page_type: 'landing',
        page_id: 'nf-mweb-homepage',
        url: '/' 
    }
)
```


### Set / Override Common Fields
```
sdk.setCommonFields({
    // common field which we want to set or override
    omnitureMCID: 'MCID'
})
```