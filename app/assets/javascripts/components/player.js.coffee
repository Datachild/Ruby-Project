# app/assets/javascripts/components/player.js.coffee

  @Player = React.createClass
    handleDelete: (e) ->
      e.preventDefault()
      # yeah... jQuery doesn't have a $.delete shortcut method
      $.ajax
        method: 'DELETE'
        url: "/players/#{ @props.player.id }"
        dataType: 'JSON'
        success: () =>
          @props.handleDeletePlayer @props.player
    render: ->
      React.DOM.tr null,
        React.DOM.td null, @props.player.first_name
        React.DOM.td null, @props.player.last_name
        React.DOM.td null, @props.player.position
        React.DOM.td null, @props.player.card_type
        React.DOM.td null,
          React.DOM.a
            className: 'btn btn-danger'
            onClick: @handleDelete
            'Remove'
