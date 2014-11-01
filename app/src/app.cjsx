window.modules = {}
React = window.React = require("react")
RouteList = require("./RouteList")
mountNode = document.getElementById("app")

client.models.Route.find {}, (error, result) ->
  console.log "result", result
  React.renderComponent(<RouteList />, mountNode);
