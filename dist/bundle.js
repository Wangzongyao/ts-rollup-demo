'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var person_1 = require("./person");
ReactDOM.render(React.createElement(person_1.Component, { realName: 'wangzongyao', sex: 'man' }), document.getElementById('app'));
