import React, {useState} from 'react';
import UserList from './UsersList';


import ResourceList from './ResourceList';

/*class App extends React.Component {
  state = {
    resourceName: 'posts'
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
        <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
        <ResourceList resourceName={this.state.resourceName}/>
      </React.Fragment>
    )
  }
}

*/

const App = () => {

  const [resourceName, setresourceName] = useState('posts')
  return (
    <React.Fragment>
      <UserList></UserList>
      <button onClick={() => setresourceName( 'posts' )}>Posts</button>
      <button onClick={() => setresourceName( 'todos' )}>Todos</button>
      <ResourceList resourceName={resourceName}/>
    </React.Fragment>
  )
}

 
export default App;
