
var PlayersList = React.createClass({
  getInitialState() {
    return {
      players: [],
      sortBy: 'last_name',
      sortOrder: 'asc'
    }
  },
  componentDidMount() {
    $.getJSON('/api/v1/players.json', (response) => { this.setState({ players: response }) });
  },
  handleAddPlayer(player){
    var newState = this.state.players.concat(player);
    this.setState({ players: newState })
  },
  handleSortPlayers(atr){
    var order = (atr != this.state.sortBy || this.state.sortOrder == 'desc')?'asc':'desc';
    this.setState({ sortBy: atr, sortOrder: order })
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
    var players = _.orderBy(this.state.players, this.state.sortBy, this.state.sortOrder);
    players = players.map((player) => {
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
              <th onClick={() => this.handleSortPlayers('first_name')}>First Name</th>
              <th onClick={() => this.handleSortPlayers('last_name')}>Last Name</th>
              <th onClick={() => this.handleSortPlayers('position')}>Position</th>
              <th onClick={() => this.handleSortPlayers('type')}>Type</th>
              <th>Options</th>
            </tr>
            {players}
          </tbody>
        </table>
      </div>
    )
  }
});
