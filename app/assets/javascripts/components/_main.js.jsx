// app/assets/javascripts/components/_main.js.jsx

var Main = React.createClass({
  getInitialState(){
    return {page: '<Players />'}
  },
  render() {
    return (
      <div>
        <Header />
        {this.state.page}
        <Footer />
      </div>
    )
  }
});
