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
    valid: ->
      @state.first_name && @state.last_name && @state.position && @state.card_type
    render: ->
      React.DOM.form
        className: 'form-inline'
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
          React.DOM.input
            type: 'text'
            className: 'form-control'
            placeholder: 'Position'
            name: 'position'
            value: @state.position
            onChange: @handleChange
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
