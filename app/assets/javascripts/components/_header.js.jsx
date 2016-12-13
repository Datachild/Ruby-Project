// app/assets/javascripts/components/_header.js.jsx

var Header = React.createClass({
  getInitialState(){
    return {activeTab: 'players'}
  },
  changeTab(tab){
    this.props.handlePageSwitch(tab);
    this.refs.("tm_"+this.state.activeTab).className = '';
    this.refs.("tm_"+tab).className = 'active';
  },
  render() {
    return (
      <ul className="nav nav-tabs">
        <li ref="tm_players" role="presentation" className="active" onClick={() => this.changeTab('players')}><a>Players</a></li>
        <li ref="tm_goals" role="presentation" onClick={() => this.changeTab('goals')}><a>Goals</a></li>
      </ul>
    )
  }
});
