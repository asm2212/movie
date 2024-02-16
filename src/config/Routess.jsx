import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';

import Detail from '../pages/Detail';

const Routess = () => {


    return (
        <React.Fragment>
    
            <Route path='/' exact component={Home} />

  
            <Route path='/:category/search/:keyword' />
            <Route path='/:category' />

    
            <Route path='/:category/:id' component={Detail} />
        </React.Fragment>
    );
}

export default Routess;