// app/assets/javascripts/components/_header.js.jsx

var Header = React.createClass({
  render() {
    return (
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><a>Players</a></li>
        <li role="presentation"><a>Goals</a></li>
      </ul>
    )
  }
});
