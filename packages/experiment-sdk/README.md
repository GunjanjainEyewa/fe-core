# Experiment SDK

This SDK helps us to do multivariant A/B Experiments

### Initializing Experiment SDK

    import { initializeExperiment } from "@eyewa/experiment-sdk";

    initializeExperiment(experimentConfig, onEvaluationCallback);

### Re-Initializing Experiment SDK (To be used only for bypassing support for NYKAA internal users)

    import { reInitializeForNykaaUsers } from '@eyewa/experiment-sdk/client/initializeExperiment';

    reInitializeForNykaaUsers(experimentConfigs, pushExperiments, email);
    > Here 'email' is logged in user's email

#### Arguments for initializing experiments are

-   experimentConfig - Experiment config is list of all experiment config

          [
              {
                  status: true, // is experiment active
                  // experiment sample rate
                  sampleRate: {
                      from: 0,
                      to: 0.5,
                  },
                  nykaaUserVariant: "color_blue", // variant that we specifically want to assign for Nykaa internal users ("*@nykaa.com"/"*@nykaafashion.com")
                  experimentLayer: "HP" // experiment layer defines experiment audience across multiple experiments
                  id: "exp_1",
                  isSSR: true, // options flag for experiment cookie which we would use on SSR
                  variants: [
                  {
                      name: " ",
                      sampleRate: {
                          from: 0,
                          to: 0.3,
                      },
                  },
                  {
                      name: "color_blue",
                      sampleRate: 
                      sampleRate: {
                          from: 0.4,
                          to: 0.7,
                      },
                  },
                  {
                      name: "color_red",
                      sampleRate: 
                      sampleRate: {
                          from: 0.7,
                          to: 1,
                      },
                  },
                  ],
              },
          ];

-   onEvaluationCallback - Callback Function on Experiment Evaluation, the callback would get the experiment data that we can set to analytics. Below is the sample of data we would recieve

        {
            "uuid":"305ca67b-d698-44a0-b5db-f602c5f754bd",
            "experiments":{
                "exp_1":{
                    "experimentLayer": "HP",
                    "hash":"d022a240961f760afd734df7e898afbd",
                    "isEligible":false
                },
                "exp_2":{
                    "experimentLayer": "HP",
                    "hash":"01c83e4d9f2556dcaf375c27b4b7faef",
                    "variant":"color_blue",
                    "isEligible":true
                }
            }
        }

### Rendering Experiment

    import { getExperimentVariant } from "@eyewa/experiment-sdk";

    const { isEligible, variant } = getExperimentVariant("<EXPERIMENT_ID>")

-   We would get isEligible boolean, indicating whether the user qualifies for the given experiment
-   We would get a variant based on experiment variant segments if user is eligible

### Server Side

    import addExperimentStore from "@eyewa/experiment-sdk/server/helpers"

    // Get the experiment variant for current user segment on SSR
    const SSRExperiments = addExperimentStore(req, get(remoteConfigs, "AB_V2", []));

    // inject the SSR experiments into the redux store
    res.locals.store = configureStore({
        ...,
        SSRExperiments,
    });

*Note - For SSR Experiments we need to add the specific experiment cookie ("EXP_<EXPERIMENT_ID>") as vector on cloundfront cache*


### Store integration

    import connectSSRExperiments from "@eyewa/experiment-sdk/experiment-sdk/store/reducer";

    combineReducers({
        ...,
        ...connectSSRExperiments(SSRExperiments),
    });


### Store Consumption

    import { getSSRExperimentVariant } from "shared/components/experiment-sdk/store/selectors";

    const mapStateToProps = (state: any) => ({
        experiment2: getSSRExperimentVariant(state, "EXPERIMENT_ID"),
    });

