var React, RouteList, mountNode;

window.modules = {};

React = window.React = require("react");

RouteList = require("./RouteList");

mountNode = document.getElementById("app");

client.models.Route.find({}, function(error, result) {
  console.log("result", result);
  return React.renderComponent(React.createElement(RouteList, null), mountNode);
});
