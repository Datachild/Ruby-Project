var GoalsList = React.createClass({
  getInitialState() {
    return {
      goals: [],
      sortBy: 'created_at',
      sortOrder: 'asc'
    }
  },
  componentDidMount() {
    $.getJSON('/api/v1/goals.json', (response) => { this.setState({ goals: response.goals }) });
  },
  // handleAddPlayer(player){
  //   var newState = this.state.players.concat(player);
  //   this.setState({ players: newState })
  // },
  // handleSortPlayers(atr){
  //   var order = (atr != this.state.sortBy || this.state.sortOrder == 'desc')?'asc':'desc';
  //   this.setState({ sortBy: atr, sortOrder: order })
  // },
  // handleEditPlayer(oldPlayer,player){
  //   $.ajax({
  //     url: `/api/v1/players/${player.id}`,
  //     type: 'PUT',
  //     data: {player: player},
  //     success:() => {
  //       var index = this.state.players.indexOf(oldPlayer);
  //       var players = this.state.players;
  //       players.splice(index,1,player);
  //       this.setState({players: players});
  //     }
  //   });
  // },
  // handleDeletePlayer(id) {
  //   $.ajax({
  //     url: `/api/v1/players/${id}`,
  //     type: 'DELETE',
  //     success:()  => {
  //       var newState = this.state.players.filter((player) => {
  //         return player.id != id;
  //       });
  //       this.setState({ players: newState });
  //     }
  //   });
  // },
  render() {
    var goals = _.orderBy(this.state.goals, this.state.sortBy, this.state.sortOrder);
    goals = goals.map((goal) => {
      return(
        <Goal key={goal.id} goal={goal} />
      )
    })
    return (
      <div>
        <table className="table">
          <tbody className="table-striped">
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
