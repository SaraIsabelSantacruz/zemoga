import React from 'react';
import ReactDom from 'react-dom';
import Home from '../pages/containers/home'
import data from '../api.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);
library.add(faThumbsUp);
library.add(faThumbsDown);


const app = document.getElementById('app');

ReactDom.render(<Home data={data}/>, app);
