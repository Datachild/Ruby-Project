// app/assets/javascripts/components/_main.js.jsx

var Main = React.createClass({
  getInitialState(){
    return {page: 'players'}
  },
  render() {
    var page = switch(this.state.page){
      case 'goals':
        return( <Goals /> )
      break
      default:
        return( <PLayers /> )
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
