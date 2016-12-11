# app/assets/javascripts/components/player_form.js.coffee

  @PlayerForm = React.createClass
    getInitialState: ->
      first_name: ''
      last_name: ''
      position: ''
      card_type: ''
    handleChange: (e) ->
      name = e.target.name
      @setState "#{ name }": e.target.value
    handleSubmit: (e) ->
      e.preventDefault()
      $.post '', { player: @state }, (data) =>
        @props.handleNewPlayer data
        @setState @getInitialState()
      , 'JSON'
    valid: ->
      @state.first_name && @state.last_name && @state.position && @state.card_type
    render: ->
      positions = {'F','D'}
      React.DOM.form
        className: 'form-inline'
        onSubmit: @handleSubmit
        React.DOM.div
          className: 'form-group'
          React.DOM.input
            type: 'text'
            className: 'form-control'
            placeholder: 'First Name'
            name: 'first_name'
            value: @state.first_name
            onChange: @handleChange
        React.DOM.div
          className: 'form-group'
          React.DOM.input
            type: 'text'
            className: 'form-control'
            placeholder: 'Last Name'
            name: 'last_name'
            value: @state.last_name
            onChange: @handleChange
        React.DOM.div
          className: 'form-group'
          React.DOM.select
            className: 'form-control'
            name: 'position'
            onChange: @handleChange
            { positions }
        React.DOM.div
          className: 'form-group'
          React.DOM.input
            type: 'text'
            className: 'form-control'
            placeholder: 'Card Type'
            name: 'card_type'
            value: @state.card_type
            onChange: @handleChange
        React.DOM.button
          type: 'submit'
          className: 'btn btn-primary'
          disabled: !@valid()
          'Add player'
