module.exports = function (RED) {
	const api = require('api');

	function nixtlaConfig(n) {
		RED.nodes.createNode(this, n);
        this.nixtla = api('@crystalball/v0.0.1#ch16nezl8np1q7o');
        this.nixtla.auth(this.credentials.token);
    }
	RED.nodes.registerType("nixtla-config", nixtlaConfig, {
		credentials: {
			token: {
				type: "password"
			}
		}
	});
};