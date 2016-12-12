var Player = React.createClass({
  render(){
    return(
      <tr key={this.props.player.id}>
        <td>{this.props.player.first_name}</td>
        <td>{this.props.player.last_name}</td>
        <td>{this.props.player.position}</td>
        <td>{this.props.player.card_type}</td>
        <td>
          <button type="button" className="btn btn-info" onClick={this.props.handleEditPlayer}>Edit</button>
          <button type="button" className="btn btn-danger" onClick={this.props.handleDeletePlayer}>Delete</button>
        </td>
      </tr>
    )
  }
});
