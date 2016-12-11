# app/assets/javascripts/components/player.js.coffee

  @Player = React.createClass
    render: ->
      React.DOM.tr null,
        React.DOM.td null, @props.player.first_name
        React.DOM.td null, @props.player.last_name
        React.DOM.td null, @props.player.position
        React.DOM.td null, @props.player.card_type
        React.DOM.td null,
          React.DOM.a
            className: 'btn btn-danger'
            'Remove'
