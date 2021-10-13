import axios from "axios";
import React from "react";
import Header from "./Header";



class Defectdetails extends React.Component{


   
    constructor()
    {
        super();
        this.state={defect: []}
    }

    componentDidMount()
    {
        this.setState({isLoading: true});
        axios.get('Defect.json')
        .then(
            result =>
            this.setState({
                defect: result.data,
                isLoading: false
            })
        )

        .catch(
            error =>
            this.setState(
                {
                    error,
                    isLoading: false
                }
            )
        );
    }

    render()
    {
        if(this.state.isLoading)
        {return "Loading..."}

        if(this.state.error)
        {return <p>{this.state.error.message}</p>}
        
        return(
            <div>
                <Header/>

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
                        <h6>Search Results:{this.state.defect.length}</h6>
                    <table>
                        
                    
                        <tr>
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            
                            <th>Change Status</th>
                        </tr>
                        
                        <tbody>
                            {this.state.defect ?
                            this.state.defect.map(def =>
                                    {
                                        return (
                                            <tr key ={def.defcat} >
                                            <td>{def.defcat}</td>
                                            <td>{def.desc}</td>
                                            <td>{def.priority}</td>
                                            
                                            <td><a href="#">Close Defect</a></td>
                                            </tr>
                                        )
                                    }
                                    ):<tr><td>No Data Found</td></tr>
                            }
                    
                        
                        
                        
                        
                    
                        </tbody>
                    
                    </table>
                    </div>
            </div>
            


        )
    }



}

export default Defectdetails;