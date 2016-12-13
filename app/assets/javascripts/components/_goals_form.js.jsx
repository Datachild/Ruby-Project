var GoalsForm = React.createClass({
  getInitialState() {
    return { players: [] }
  },
  handleClick() {
    var goal_scorer_id = this.refs.goal_scorer.value;
    var goal_assist1_id = this.refs.goal_assist1.value;
    var goal_assist2_id = this.refs.goal_assist2.value;
    var period = this.refs.period.value;
    var goal_type = this.refs.goal_type.value;
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
    var player_options = player_options.map((player) => {
      return( <option value="{player.id}">{player.last_name} {player.first_name} - {player.position} - {player.card_type}</option> )
    })
    return (
      <tr>
        <td>
          <select className="form-control" ref="goal_scorer_id">
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_assist1_id">
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="goal_assist2_id">
            {player_options}
          </select>
        </td>
        <td>
          <select className="form-control" ref="position">
            <option value="">Period</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="OT">OT</option>
            <option value="SO">SO</option>
          </select>
        </td>
        <td>
          <select className="form-control" ref="card_type">
            <option value="">Type</option>
            <option value="GOLD">Wrist Shot</option>
            <option value="BRONZE">Slap Shot</option>
            <option value="BRONZE">Backhand</option>
            <option value="BRONZE">One Timer</option>
            <option value="BRONZE">Deflect</option>
            <option value="BRONZE">Deflect</option>
          </select>
        </td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleClick}>Create</button></td>
      </tr>
    )
  }
});
