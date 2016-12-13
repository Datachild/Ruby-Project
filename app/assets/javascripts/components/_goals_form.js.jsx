var GoalsForm = React.createClass({
  getInitialState() {
    return { players: [] }
  },
  handleClick() {
    var goal_scorer_id = this.refs.goal_scorer_id.value;
    var goal_assist1_id = this.refs.goal_assist1_id.value;
    var goal_assist2_id = this.refs.goal_assist2_id.value;
    var period = this.refs.period.value;
    var goal_type = this.refs.goal_type.value;
    console.log(goal_scorer_id);
    console.log(goal_assist1_id);
    console.log(goal_assist2_id);
    console.log(period);
    console.log(goal_type);
    $.ajax({
      url: '/api/v1/goals',
      type: 'POST',
      data: { goal: { goal_scorer_id: goal_scorer_id, goal_assist1_id: goal_assist1_id, goal_assist2_id: goal_assist2_id, period: period, goal_type: goal_type } },
      success: (goal) => {
          this.props.handleAddGoal(goal);
          this.refs.goal_scorer_id.value = this.refs.goal_assist1_id.value = this.refs.goal_assist2_id.value = this.refs.period.value = this.refs.goal_type.value = '';
          this.refs.goal_scorer_id.focus();
      }
    });
  },
  componentDidMount() {
    $.getJSON('/api/v1/players.json', (response) => { this.setState({ players: _.orderBy(response, 'last_name' , 'asc') }) });
  },
  render() {
    var player_options = this.state.players.map((player) => {
      return( <option key={player.id} value={player.id}>{player.last_name} {player.first_name} - {player.position} - {player.card_type}</option> )
    })
    return (
      <tr>
        <td>
          <select className="form-control" ref="goal_scorer_id">
            <option value="">Goal Scorer</option>
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_assist1_id">
            <option value="">Assist 1</option>
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_assist2_id">
            <option value="">Assist 2</option>
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="period">
            <option value="">Period</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="OT">OT</option>
            <option value="SO">SO</option>
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_type">
            <option value="">Type</option>
            <option value="Wrist Shot">Wrist Shot</option>
            <option value="Slap Shot">Slap Shot</option>
            <option value="Backhand">Backhand</option>
            <option value="One Timer">One Timer</option>
            <option value="Deflect">Deflect</option>
            <option value="Tip In">Tip In</option>
          </select>
        </td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleClick}>Create</button></td>
      </tr>
    )
  }
});
