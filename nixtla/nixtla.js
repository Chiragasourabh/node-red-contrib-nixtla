module.exports = function (RED) {

    function nixtlaNode(n) {
        RED.nodes.createNode(this, n);
        this.config = RED.nodes.getNode(n.nixtlaConfig);
        let node = this;
        node.on('input', function (msg) {

            var success = function (response) {
                msg.topic = topic;
                msg.payload = response.data;
                node.send(msg);
            }
            var failure = function (error) {
                msg.error = error;
                node.send(msg);
            }
            var fh = msg.payload.forecast_horizon || msg.forecast_horizon || n.forecast_horizon;
            var sensibility = msg.payload.sensibility || msg.sensibility || n.sensibility;
            var timestamp = msg.payload.timestamp || msg.timestamp || n.timestamp.split(',').map(item=>item.trim());
            var value = msg.payload.value || msg.value || JSON.parse("[" + n.value + "]");
            var model = msg.payload.model || msg.model || n.model;
            var seasonality = msg.payload.seasonality || msg.seasonality || n.seasonality;
            var cv = msg.payload.cv || msg.cv || n.cv;
            var max_steps = msg.payload.max_steps || msg.max_steps || n.max_steps;
            var topic = msg.topic || n.topic;

            switch (topic) {
                case 'automl_forecast':
                    node.config.nixtla.automl_forecast_automl_forecast_post({
                        fh: fh,
                        timestamp: timestamp,
                        value: value
                    }).then(success).catch(failure);
                    break;
                case 'automl_anomaly':
                    node.config.nixtla.automl_anomaly_automl_anomaly_post({
                        sensibility: sensibility,
                        timestamp: timestamp,
                        value: value
                    }).then(success).catch(failure);
                    break;
                case 'forecast':
                    node.config.nixtla.forecast_forecast_post({
                        fh: fh,
                        model: model,
                        seasonality: seasonality,
                        cv: cv,
                        timestamp: timestamp,
                        value: value
                    }).then(success).catch(failure);
                    break;
                case 'neural_transfer':
                    node.config.nixtla.neural_transfer_neural_transfer_post({
                        fh: fh,
                        model: model,
                        max_steps: max_steps,
                        timestamp: timestamp,
                        value: value
                      }).then(success).catch(failure);
                    break;
                case 'anomaly_detector':
                    node.config.nixtla.anomaly_detector_anomaly_detector_post({
                        sensibility: sensibility,
                        seasonality: seasonality,
                        timestamp: timestamp,
                        value: value,
                        fh: fh
                      }).then(success).catch(failure);
                    break;
                default:
                    failure({"message":"Invalid topic","topic":topic})
                    break;
            }
        });
    }
    RED.nodes.registerType("nixtla", nixtlaNode);
}