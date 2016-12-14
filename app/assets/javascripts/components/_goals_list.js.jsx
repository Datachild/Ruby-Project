var GoalsList = React.createClass({
  getInitialState() {
    return {
      goals: [],
      players: [],
      sortBy: 'created_at',
      sortOrder: 'asc'
    }
  },
  componentDidMount() {
    $.getJSON('/api/v1/goals.json', (response) => { this.setState({ goals: response.goals }) });
    $.getJSON('/api/v1/players.json', (response) => { this.setState({ players: _.orderBy(response, 'last_name' , 'asc') }) });
  },
  handleAddGoal(goal){
    var newState = this.state.goals.concat(goal);
    this.setState({ goals: newState })
  },
  handleSortGoals(atr){
    var order = (atr != this.state.sortBy || this.state.sortOrder == 'desc')?'asc':'desc';
    this.setState({ sortBy: atr, sortOrder: order })
  },
  handleEditGoal(oldGoal,goal){
    $.ajax({
      url: `/api/v1/goals/${player.id}`,
      type: 'PUT',
      data: {goal: goal},
      success:() => {
        var index = this.state.goal.indexOf(oldGoal);
        var goals = this.state.goals;
        goal.goal_scorer = this.state.players[_.findIndex(this.state.players,['id',goal.goal_scorer_id])];
        goal.goal_assist1 = this.state.players[_.findIndex(this.state.players,['id',goal.goal_assist1_id])];
        goal.goal_assist2 = this.state.players[_.findIndex(this.state.players,['id',goal.goal_assist2_id])];
        goals.splice(index,1,goal);
        this.setState({goals: goals});
      }
    });
  },
  handleDeleteGoal(id) {
    $.ajax({
      url: `/api/v1/goals/${id}`,
      type: 'DELETE',
      success:()  => {
        var newState = this.state.goals.filter((goal) => {
          return goal.id != id;
        });
        this.setState({ goals: newState });
      }
    });
  },
  render() {
    var goals = _.orderBy(this.state.goals, this.state.sortBy, this.state.sortOrder);
    goals = goals.map((goal) => {
      return(
        <Goal key={goal.id} goal={goal}
                            players={this.state.players}
                            handleDeleteGoal={this.handleDeleteGoal.bind(this,goal.id)}
                            handleEditGoal={this.handleEditGoal}
         />
      )
    })
    return (
      <div>
        <table className="table">
          <tbody className="table-striped">
            <GoalsForm handleAddGoal={this.handleAddGoal} players={this.state.players} />
            <tr>
              <th>Scorer</th>
              <th>Assist</th>
              <th>Assist</th>
              <th>Period</th>
              <th>Type</th>
              <th>Options</th>
            </tr>
            {goals}
          </tbody>
        </table>
      </div>
    )
  }
});
