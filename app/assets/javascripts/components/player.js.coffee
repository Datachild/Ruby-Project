# app/assets/javascripts/components/player.js.coffee

  @Player = React.createClass
    getInitialState: ->
      edit: false
    handleToggle: (e) ->
      e.preventDefault()
      @setState edit: !@state.edit
    handleEdit: (e) ->
      e.preventDefault()
      data =
        first_name: React.findDOMNode(@refs.first_name).value
        last_name: React.findDOMNode(@refs.last_name).value
        position: React.findDOMNode(@refs.position).value
        card_type: React.findDOMNode(@refs.card_type).value
      # jQuery doesn't have a $.put shortcut method either
      $.ajax
        method: 'PUT'
        url: "/records/#{ @props.player.id }"
        dataType: 'JSON'
        data:
          record: data
        success: (data) =>
          @setState edit: false
          @props.handleEditPlayer @props.player, data
    handleDelete: (e) ->
      e.preventDefault()
      # yeah... jQuery doesn't have a $.delete shortcut method
      $.ajax
        method: 'DELETE'
        url: "/players/#{ @props.player.id }"
        dataType: 'JSON'
        success: () =>
          @props.handleDeletePlayer @props.player
    recordRow: ->
      React.DOM.tr null,
        React.DOM.td null, @props.player.first_name
        React.DOM.td null, @props.player.last_name
        React.DOM.td null, @props.player.position
        React.DOM.td null, @props.player.card_type
        React.DOM.td null,
          React.DOM.a
            className: 'btn btn-default'
            onClick: @handleToggle
            'Edit'
          React.DOM.a
            className: 'btn btn-danger'
            onClick: @handleDelete
            'Remove'
    recordForm: ->
      React.DOM.tr null,
        React.DOM.td null,
          React.DOM.input
            className: 'form-control'
            type: 'text'
            defaultValue: @props.player.first_name
            ref: 'first_name'
        React.DOM.td null,
          React.DOM.input
            className: 'form-control'
            type: 'text'
            defaultValue: @props.player.last_name
            ref: 'last_name'
        React.DOM.td null,
          React.DOM.input
            className: 'form-control'
            type: 'text'
            defaultValue: @props.player.position
            ref: 'position'
        React.DOM.td null,
          React.DOM.input
            className: 'form-control'
            type: 'text'
            defaultValue: @props.player.card_type
            ref: 'card_type'
        React.DOM.td null,
          React.DOM.a
            className: 'btn btn-default'
            onClick: @handleEdit
            'Update'
          React.DOM.a
            className: 'btn btn-danger'
            onClick: @handleToggle
            'Cancel'
    render: ->
      if @state.edit
        @recordForm()
      else
        @recordRow()
