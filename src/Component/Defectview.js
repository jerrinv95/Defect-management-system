import React from 'react';
import Header from './Header';
import Viewtable from './Viewtable';


class Defectview extends React.Component
{
    render()
    {
        return <div>
            <Header/>
            <br/>
            
            <div align="center">
            <Viewtable/></div>
            </div>
    }

}

export default Defectview;