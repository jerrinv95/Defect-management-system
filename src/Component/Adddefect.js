import React from 'react';
import Header from './Header';

function Adddefect()
{
    return(
        <React.Fragment>
        <Header/>

        <div className="container">
                    <h3>Add Defect</h3>
                    <form action="#" >
                    <label>Defect Category:</label><select>
                    <option>All</option>
                    </select>
                    <br/>
                    <br/>
                    <label>Description:</label>
                    <textarea></textarea>
                    <br/>
                    <br/>
                    <label>Priority:</label><select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    </select>
                    <br/>
                    <br/>
                    <input className="button" type="submit"></input>
                    </form>


        </div>
        </React.Fragment>
    )
    
        
}

export default Adddefect;