import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Catalog';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const Routess = () => {

    const renderCatalog = (props) => <Catalog {...props} />;

    return (
        <React.Fragment>
    
            <Route path='/' exact component={Home} />

  
            <Route path='/:category/search/:keyword' render={renderCatalog} />
            <Route path='/:category' render={renderCatalog} />

    
            <Route path='/:category/:id' component={Detail} />
        </React.Fragment>
    );
}

export default Routess;
