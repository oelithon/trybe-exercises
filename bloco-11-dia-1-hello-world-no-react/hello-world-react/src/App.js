import Tasks from './Tasks';
import React from 'react';

const tasksList = ['Aprender React', 'Fazer exercícios', 'Desenvolver uma página'];

class App extends React.Component {
  render() {
    return <div>
      { tasksList.map(Tasks)}
    </div>
  }
}

export default App;
