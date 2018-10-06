import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import TodoList from './components/todoList';

ReactDOM.render(<TodoList />, document.getElementById('container'));

registerServiceWorker();

//
