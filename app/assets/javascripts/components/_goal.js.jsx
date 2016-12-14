var Goal = React.createClass({
  getInitialState(){
    return {editable: false}
  },
  toggleEdit(){
    this.setState({ editable: !this.state.editable });
  },
  handleEditGoal(){
    var goal_scorer_id = this.refs.goal_scorer_id.value;
    var goal_assist1_id = this.refs.goal_assist1_id.value;
    var goal_assist2_id = this.refs.goal_assist2_id.value;
    var period = this.refs.period.value;
    var goal_type = this.refs.goal_type.value;
    // var player = {id: this.props.player.id, first_name: first_name, last_name: last_name, position: position, card_type: card_type};
    // this.props.handleEditPlayer(this.props.player,player);
    // this.toggleEdit();
  },
  render(){
    return(this.state.editable? this.renderEditable() : this.renderNonEditable())
  },
  renderEditable(){
    var player_options = this.props.players.map((player) => {
      return( <option key={player.id} value={player.id}>{player.last_name} {player.first_name} - {player.position} - {player.card_type}</option> )
    })
    return(
      <tr>
        <td>
          <select className="form-control" ref="goal_scorer_id" defaultValue={this.props.goal.goal_scorer_id}>
            <option value="">Goal Scorer</option>
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_assist1_id" defaultValue={this.props.goal.goal_assist1_id}>
            <option value="">Assist 1</option>
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_assist2_id" defaultValue={this.props.goal.goal_assist2_id}>
            <option value="">Assist 2</option>
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="period" defaultValue={this.props.goal.period}>
            <option value="">Period</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_type" defaultValue={this.props.goal.goal_type}>
            <option value="">Type</option>
            <option value="Wrist Shot">Wrist Shot</option>
            <option value="Slap Shot">Slap Shot</option>
            <option value="Backhand">Backhand</option>
            <option value="One Timer">One Timer</option>
            <option value="Deflect">Deflect</option>
            <option value="Tip In">Tip In</option>
          </select>
        </td>
        <td>
          <button type="button" className="btn btn-success" onClick={this.handleEditGoal}>Save</button>
          <button type="button" className="btn btn-warning" onClick={this.toggleEdit}>Cancel</button>
        </td>
      </tr>
    )
  },
  renderNonEditable(){
    var assist1 = (this.props.goal.goal_assist1_id)?this.props.goal.goal_assist1.first_name+" "+this.props.goal.goal_assist1.last_name:"";
    var assist2 = (this.props.goal.goal_assist2_id)?this.props.goal.goal_assist2.first_name+" "+this.props.goal.goal_assist2.last_name:"";
    return(
      <tr>
        <td>{this.props.goal.goal_scorer.first_name} {this.props.goal.goal_scorer.last_name}</td>
        <td>{assist1}</td>
        <td>{assist2}</td>
        <td>{this.props.goal.period}</td>
        <td>{this.props.goal.goal_type}</td>
        <td>
          <button type="button" className="btn btn-info" onClick={this.toggleEdit}>Edit</button>
          <button type="button" className="btn btn-danger" onClick={this.props.handleDeleteGoal}>Delete</button>
        </td>
      </tr>
    )
  }
});
