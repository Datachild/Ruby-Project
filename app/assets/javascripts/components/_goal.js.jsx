var Goal = React.createClass({
  getInitialState(){
    return {editable: false}
  },
  // toggleEdit(){
  //   this.setState({ editable: !this.state.editable });
  // },
  // handleEditPlayer(){
  //   var first_name = this.refs.first_name.value;
  //   var last_name = this.refs.last_name.value;
  //   var position = this.refs.position.value;
  //   var card_type = this.refs.card_type.value;
  //   var player = {id: this.props.player.id, first_name: first_name, last_name: last_name, position: position, card_type: card_type};
  //   this.props.handleEditPlayer(this.props.player,player);
  //   this.toggleEdit();
  // },
  render(){
    return(this.state.editable? this.renderEditable() : this.renderNonEditable())
  },
  renderEditable(){
    return(<div></div>)
    // return(
    //   <tr>
    //     <td><input ref="first_name" className="form-control" type='text' defaultValue={this.props.player.first_name} /></td>
    //     <td><input ref="last_name" className="form-control" type='text' defaultValue={this.props.player.last_name} /></td>
    //     <td>
    //       <select ref="position" className="form-control" defaultValue={this.props.player.position}>
    //         <option value="">Position</option>
    //         <option value="F">F</option>
    //         <option value="D">D</option>
    //       </select>
    //     </td>
    //     <td>
    //       <select ref="card_type" className="form-control" defaultValue={this.props.player.card_type}>
    //         <option value="">Type</option>
    //         <option value="GOLD">GOLD</option>
    //         <option value="BRONZE">BRONZE</option>
    //       </select>
    //     </td>
    //     <td>
    //       <button type="button" className="btn btn-success" onClick={this.handleEditPlayer}>Save</button>
    //       <button type="button" className="btn btn-warning" onClick={this.toggleEdit}>Cancel</button>
    //     </td>
    //   </tr>
    // )
  },
  renderNonEditable(){
    console.log(this.props.goal);
    return(
      <tr>
        <td>{this.props.goal.goal_scorer.first_name} {this.props.goal.goal_scorer.last_name}</td>
        <td>{this.props.goal.goal_assist1.first_name} {this.props.goal.goal_assist1.last_name}</td>
        <td>{this.props.goal.goal_assist2.first_name} {this.props.goal.goal_assist2.last_name}</td>
        <td>{this.props.goal.period}</td>
        <td>{this.props.goal.goal_type}</td>
        <td>
          <button type="button" className="btn btn-info">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
});
