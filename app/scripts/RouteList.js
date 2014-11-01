var RouteList;

RouteList = React.createClass({
  getInitialState: function() {
    var that;
    that = this;
    client.models.Route.find({}, function(error, routes) {
      console.log("error", error);
      console.log("routes", routes);
      return that.setState({
        routes: routes
      });
    });
    return {
      routes: []
    };
  },
  render: function() {
    var createItem;
    createItem = function(route) {
      var _ref;
      return React.createElement(React.DOM.tr, null, React.createElement(React.DOM.td, null, route.name), React.createElement(React.DOM.td, null, route.title), React.createElement(React.DOM.td, null, route.path), React.createElement(React.DOM.td, null, (route != null ? (_ref = route.plugin) != null ? _ref.name : void 0 : void 0)));
    };
    return React.createElement(React.DOM.div, {
      "className": "panel panel-default"
    }, React.createElement(React.DOM.div, {
      "className": "panel-heading"
    }, "route list"), React.createElement(React.DOM.table, {
      "className": "table"
    }, React.createElement(React.DOM.thead, null, React.createElement(React.DOM.tr, null, React.createElement(React.DOM.th, null, "name"), React.createElement(React.DOM.th, null, "title"), React.createElement(React.DOM.th, null, "path"), React.createElement(React.DOM.th, null, "plugin name"))), React.createElement(React.DOM.tbody, null, this.state.routes.map(createItem))));
  }
});

window.modules["routeList"] = RouteList;

module.exports = RouteList;
