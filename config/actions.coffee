module.exports = [
  {
    "name": "installTestPlugin",
    execution: (params, cb) ->
      app.models.Plugin.install "https://github.com/smlsunxie/cms-plugin-sample.git", "cms-plugin-sample", (error, newPlugin) ->
        cb()
  }

]
