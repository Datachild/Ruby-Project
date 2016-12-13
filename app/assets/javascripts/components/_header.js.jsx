// app/assets/javascripts/components/_header.js.jsx

var Header = React.createClass({
  getInitialState(){
    return {activeTab: 'players'}
  },
  changeTab(tab){
    this.props.handlePageSwitch(tab);
    $('#tm_'+this.state.activeTab).removeClass('active');
    $('#tm_'+tab).addClass('active');
  },
  render() {
    return (
      <ul className="nav nav-tabs">
        <li id="tm_players" role="presentation" className="active" onClick={() => this.changeTab('players')}><a>Players</a></li>
        <li id="tm_goals" role="presentation" onClick={() => this.changeTab('goals')}><a>Goals</a></li>
      </ul>
    )
  }
});
