@Players = React.createClass
    getInitialState: ->
      players: @props.data
    getDefaultProps: ->
      players: []
    addPlayer: (player) ->
      players = @state.players.slice()
      players.push player
      @setState players: players
    render: ->
      React.DOM.div
         className: 'players'
         React.DOM.h2
          className: 'title'
          'Players'
          React.createElement PlayerForm, handleNewPlayer: @addPlayer
          React.DOM.hr null
          React.DOM.table
            className: 'table table-bordered'
            React.DOM.thead null,
              React.DOM.tr null,
                React.DOM.th null, 'First Name'
                React.DOM.th null, 'Last Name'
                React.DOM.th null, 'Position'
                React.DOM.th null, 'Type'
            React.DOM.tbody null,
              for player in @state.players
                React.createElement Player, key: player.id, player: player
