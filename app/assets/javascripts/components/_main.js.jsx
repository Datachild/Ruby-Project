// app/assets/javascripts/components/_main.js.jsx

var Main = React.createClass({
  getInitialState(){
    return {page: '<Players />'}
  },
  render() {
    var page = this.state.page;
    return (
      <div>
        <Header />
        {page}
        <Footer />
      </div>
    )
  }
});
