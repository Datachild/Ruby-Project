var Player = React.createClass({
  getInitialState(){
    return {editable: false}
  },
  handleEditPlayer(){
    if(this.state.editable){
      var first_name = this.refs.first_name.value;
      var last_name = this.refs.last_name.value;
      var position = this.refs.position.value;
      var card_type = this.refs.card_type.value;
      var player = {id: this.props.player.id, first_name: first_name, last_name: last_name, position: position, card_type: card_type};
      this.props.handleEditPlayer(this.props.player,player);
    }
    this.setState({ editable: !this.state.editable })
  },
  render(){
    return(this.state.editable? this.renderEditable() : this.renderNonEditable())
  },
  renderEditable(){
    return(
      <tr>
        <td><input ref="first_name" className="form-control" type='text' defaultValue={this.props.player.first_name} /></td>
        <td><input ref="last_name" className="form-control" type='text' defaultValue={this.props.player.last_name} /></td>
        <td>
          <select ref="position" className="form-control" defaultValue={this.props.player.position}>
            <option value="">Position</option>
            <option value="F">F</option>
            <option value="D">D</option>
          </select>
        </td>
        <td>
          <select ref="card_type" className="form-control" defaultValue={this.props.player.card_type}>
            <option value="">Type</option>
            <option value="GOLD">GOLD</option>
            <option value="BRONZE">BRONZE</option>
          </select>
        </td>
        <td>
          <button type="button" className="btn btn-success" onClick={this.handleEditPlayer}>Save</button>
          <button type="button" className="btn btn-warning" onClick={this.handleEditPlayer}>Cancel</button>
        </td>
      </tr>
    )
  },
  renderNonEditable(){
    return(
      <tr>
        <td>{this.props.player.first_name}</td>
        <td>{this.props.player.last_name}</td>
        <td>{this.props.player.position}</td>
        <td>{this.props.player.card_type}</td>
        <td>
          <button type="button" className="btn btn-info" onClick={this.handleEditPlayer}>Edit</button>
          <button type="button" className="btn btn-danger" onClick={this.props.handleDeletePlayer}>Delete</button>
        </td>
      </tr>
    )
  }
});
