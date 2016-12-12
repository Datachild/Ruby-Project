var PlayersForm = React.createClass({
  handleClick(){
    var first_name = this.refs.first_name.value;
    var last_name = this.refs.last_name.value;
    var position = this.refs.position.value;
    var card_type = this.refs.card_type.value;
    $.ajax({
      url: '/api/v1/players',
      type: 'POST'
      data: {player:{ first_name: first_name, last_name: last_name, position: position, card_type: card_type }}
    })
  }
  render() {
    return (
      <tr>
        <td><input ref="first_name" placeholder="First Name" /></td>
        <td><input ref="last_name" placeholder="Last Name" /></td>
        <td>
          <select ref="position">
            <option value="">Position</option>
            <option value="F">F</option>
            <option value="D">D</option>
          </select>
        </td>
        <td>
        <select ref="card_type">
          <option value="">Type</option>
          <option value="GOLD">GOLD</option>
          <option value="BRONZE">BRONZE</option>
        </select>
        </td>
        <td><button onClick={this.handleClick}>Create</button></td>
      </tr>
    )
  }
});
