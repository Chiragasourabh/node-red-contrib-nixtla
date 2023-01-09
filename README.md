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

- Follow the steps mentioned [here](https://docs.nixtla.io/docs/train-your-own-model#1--get-your-token) to get your token.
- Deag and drop a nixtla node into node-Red Flow editor pane.
- Create a new nixtla configuration and paste the token.

# Release
To release a new version of the package

- commit the changes
- create a tag with semantic version
- push the changes and tag

```
git tag -a v1.0.1 -m "release v1.0.1"
git push --follow-tags
```
