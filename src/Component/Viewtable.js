import React from 'react';


class Viewtable extends React.Component
{
    
    render()
    {
        
        //const defect = this.props.new;
        return(
            
            <React.Fragment>
                <div className="container">
                        <h3>Filter Details</h3>
                        <label>Priority</label><select>
                        <option>All</option>
                        </select>
                        
                        <label>Category</label><select>
                        <option>Functional</option>
                        </select>
                        <br/>
                    
                        <h3>Defect Details</h3>
                        <h6>Search Results: {this.props.defcat}</h6>
                    <table>
                        
                    
                        <tr>
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>priority</th>
                            <th>Change Status</th>
                        </tr>
                        
                        <tbody>
                    
                        <tr>
                        <td>{this.props.value}</td>
                        <td>{this.props.desc1}</td>
                        <td>{this.props.priority1}</td>
                        <td>{this.props.status1}</td>
                        <td><a href="#">Close Defect</a></td>
                        </tr>
                        
                        
                    
                        </tbody>
                    
                    </table>
                    </div>
            </React.Fragment>
            
        )
    }
    
        
}

export default Viewtable;