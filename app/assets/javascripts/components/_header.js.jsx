// app/assets/javascripts/components/_header.js.jsx

var Header = React.createClass({
  render() {
    return (
      <ul className="nav nav-tabs">
        <li ref="tm_players" role="presentation" className="active" onClick={() => this.props.handlePageSwitch('players')}><a>Players</a></li>
        <li ref="tm_goals" role="presentation" onClick={() => this.props.handlePageSwitch('goals')}><a>Goals</a></li>
      </ul>
    )
  }
});
