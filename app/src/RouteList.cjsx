
RouteList = React.createClass(
  getInitialState: ->
    that = @

    client.models.Route.find {}, (error, routes) ->
      console.log "error", error
      console.log "routes", routes
      that.setState routes: routes

    return {routes: []}
  render: ->

    createItem = (route) ->
      <tr>
        <td>{route.name}</td>
        <td>{route.title}</td>
        <td>{route.path}</td>
        <td>{route?.plugin?.name}</td>
      </tr>

    <div className="panel panel-default">
      <div className="panel-heading">route list</div>
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>title</th>
            <th>path</th>
            <th>plugin name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.routes.map(createItem)}
        </tbody>
      </table>
    </div>

)


window.modules["routeList"] = RouteList
module.exports = RouteList
