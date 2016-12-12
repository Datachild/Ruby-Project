var PlayersForm = React.createClass({
  render() {
    return (
      <tr>
        <td><input ref="first_name" placeholder="First Name" /></td>
        <td><input ref="first_name" placeholder="Last Name" /></td>
        <td>
          <select ref="position">
            <option value="">Position</option>
            <option value="F">F</option>
            <option value="D">D</option>
          </select>
        </td>
        <td>
        <select ref="card_type">
          <option value="">Type</option>
          <option value="GOLD">GOLD</option>
          <option value="BRONZE">BRONZE</option>
        </select>
        </td>
        <td><button>Create</button></td>
      </tr>
    )
  }
});
