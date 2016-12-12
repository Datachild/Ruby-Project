
var PlayersList = React.createClass({
  getInitialState() {
    return {players: []}
  },
  componentDidMount() {
    $.getJSON('/api/v1/players.json', (response) => { this.setState({ players: response }) });
  },
  handleAddPlayer(player){
    var newState = this.state.players.concat(player);
    this.setState({ players: newState })
  },
  handleEditPlayer(oldPlayer,player){
    $.ajax({
      url: `/api/v1/players/${player.id}`,
      type: 'PUT',
      data: {player: player},
      success:() => {
        var index = this.state.players.indexOf(oldPlayer);
        var players = this.state.players;
        players.splice(index,1,player);
        this.setState({players: players});
      }
    });
  },
  handleDeletePlayer(id) {
    $.ajax({
      url: `/api/v1/players/${id}`,
      type: 'DELETE',
      success:()  => {
        var newState = this.state.players.filter((player) => {
          return player.id != id;
        });
        this.setState({ players: newState });
      }
    });
  },
  render() {
    var players = this.state.players.map((player) => {
      return(
        <Player key={player.id} player={player}
          handleDeletePlayer={this.handleDeletePlayer.bind(this,player.id)}
          handleEditPlayer={this.handleEditPlayer} />
      )
    })
    return (
      <div>
        <table className="table">
          <tbody className="table-striped">
            <PlayersForm handleAddPlayer={this.handleAddPlayer} />
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Type</th>
              <th>Options</th>
            </tr>
            {players}
          </tbody>
        </table>
      </div>
    )
  }
});
