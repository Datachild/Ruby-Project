// app/assets/javascripts/components/_main.js.jsx

var Main = React.createClass({
  getInitialState(){
    return {page: 'players'}
  },
  render() {
    switch(this.state.page){
      case 'goals':
        page = <Goals />;
      break
      default:
        page = <PLayers />;
    }
    return (
      <div>
        <Header />
        {page}
        <Footer />
      </div>
    )
  }
});
