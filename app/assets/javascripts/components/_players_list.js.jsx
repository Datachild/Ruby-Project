
var PlayersList = React.createClass({
  getInitialState() {
    return {players: []}
  },
  componentDidMount() {
    $.getJSON('/api/v1/players.json', (response) => { this.setState({ players: response }) });
  },

  render() {
    var players = this.state.players.map((player) => {
      return(
        <tr key={player.id}>
          <td>{player.first_name}</td>
          <td>{player.last_name}</td>
          <td>{player.position}</td>
          <td>{player.card_type}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table>
          <tbody>
            <PlayersForm />
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
