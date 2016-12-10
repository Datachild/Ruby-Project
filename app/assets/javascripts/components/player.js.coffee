# app/assets/javascripts/components/player.js.coffee

  @Player = React.createClass
    render: ->
      React.DOM.tr null,
        React.DOM.td null, @props.player.fist_name
        React.DOM.td null, @props.player.last_name
        React.DOM.td null, @props.player.position
        React.DOM.td null, @props.player.card_type
