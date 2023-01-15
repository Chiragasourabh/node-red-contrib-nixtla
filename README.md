# node-red-contrib-nixtla
Node-RED integration for nixtla

### References
* Nixtla Documentation: https://docs.nixtla.io/docs

### Project Links
* GitHub: https://github.com/Chiragasourabh/node-red-contrib-nixtla
* NPM: https://www.npmjs.com/package/node-red-contrib-nixtla
* NodeRed Project: https://flows.nodered.org/node/node-red-contrib-nixtla


# Installation
Install via npm

```
npm install node-red-contrib-nixtla@latest
```

# Usage

- Follow the steps mentioned [here](https://docs.nixtla.io/docs/train-your-own-model#1--get-your-token) or click [here](http://18.235.133.135:3000/login) to get your token.
- Drag and drop a nixtla node into node-Red Flow editor pane.
- Create a new nixtla configuration and paste the token.


### Override values from previous node
The input values for the nixtla node can be overriden by passing respective properties from the previous node.


The topic for the nixtla node can be set as follows `msg.topic`

    msg.topic = 'automl_forecast';
    return msg;

The payload for the nixtla node can be set as follows `msg.payload`
    
    msg = {}
    payload = {};
    payload.forecast_horizon = 1;
    payload.timestamp = ["2022-05-10", "2022-05-11", "2022-05-12"];
    payload.value = [0.5, 0.3, 0.1];
    msg.payload = payload;
    return msg;

Supported Topics:

    "automl_forecast"
    "automl_anomaly"
    "forecast"
    "neural_transfer"
    "anomaly_detector"

Accepted properties in the payload for different topics:

    "automl_forecast":

        "forecast_horizon" (int): Steps ahead you want to predict.
        "timestamp" (list): Each element of the list defines the timestamp of the time series.
        "value" (list): Time series values.

    "automl_anomaly":
        
        "sensibility" (int): Confidence level for prediction intervals.
        "timestamp" (list): Each element of the list defines the timestamp of the time series.
        "value" (list): Time series values.

    "forecast":

        "forecast_horizon" (int): Steps ahead you want to predict.
        "model" (str): Model name.
        "seasonality" (int): Seasonality
        "cv" (boolean): Whether to perform cross validation.
        "timestamp" (list): Each element of the list defines the timestamp of the time series.
        "value" (list): Time series values.

    "neural_transfer":

        "forecast_horizon" (int): Steps ahead you want to predict.
        "model" (str): Model name.
        "max_steps" (int): K-shot learning steps.
        "timestamp" (list): Each element of the list defines the timestamp of the time series.
        "value" (list): Time series values.

    "anomaly_detector":

        "forecast_horizon" (int): Steps ahead you want to predict.
        "sensibility" (int): Confidence level for prediction intervals.
        "seasonality" (int): Seasonality.
        "timestamp" (list): Each element of the list defines the timestamp of the time series.
        "value" (list): Time series values.

### model 
    
    Statistical: 
        "arima" | "seasonal_exponential_smoothing" | "prophet" | "complex_es" | "ets"

    Transfer Learning: 
        "nhits_m4_hourly" | "nhits_m4_hourly_tiny" | "nhits_m4_daily" | "nhits_m4_monthly" | "nhits_m4_yearly" | "nbeats_m4_hourly" | "nbeats_m4_daily" | "nbeats_m4_monthly" | "nbeats_m4_yearly"

# Release
To release a new version of the package

- commit the changes
- create a tag with semantic version
- push the changes and tag

```
git tag -a v1.0.1 -m "release v1.0.1"
git push --follow-tags
```
