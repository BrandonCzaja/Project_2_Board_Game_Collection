const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render(){
    const {games, index} = this.props;
    return(
      <Layout title="My Collection">       
        <span className='indexHeader'><h1> Your Games </h1></span>
        <a href="/collection/new">
          <button> New Game</button>
        </a>
        {games.map((game) => (
          <div>    
            <h2 className= 'container' key={index}>{game.game}</h2>
            <img src={game.imageURL}/>
            <form action={`/collection/${game._id}?_method=DELETE`} method='POST'>
              <input type="submit" value="Delete"/>
            </form>

            <form action={`/collection/edit/${game._id}`} method='GET'>
              <input type="submit" value="Edit"/>
            </form>
        </div> 
        ))}  
      </Layout>
    )
  }
}

module.exports = Index;
