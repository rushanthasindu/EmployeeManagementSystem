import React from 'react';

class Chart extends React.Component {
    constructor(props) {
        super(props);
     this.state = {
  
        data3:[],
        data:[],
        id:'',
        viewable:false
    };
  
  
  
  }
  componentDidMount() {
    //alert(' UserName: ' + this.state.userName+'Password: ' + this.state.password);
    fetch('http://192.168.8.100:8000/employee/', {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((responseJson) => {
      //console.log(responseJson);
            this.setState({
               data: responseJson
            })
         //console.log(this.state.data);
         })
         .catch((error) => {
            this.setState({
            data: '0'
         })
         });
         
         }
   


    render() {
        if (this.props.headerProp!="EmpReport2") {
            fetch('http://192.168.8.100:8000/project/'+this.props.headerProp, {
     method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
     //console.log(responseJson);
           this.setState({
              data3: responseJson
           })
        //console.log(this.state.data);
        })
        .catch((error) => {
           this.setState({
           data: '0'
        })
        });    
        //console.log(this.state.data3.comment);
       return (

          
                <div> 
                     {/* <h1>Test</h1> */}
                   <h1>{this.state.data3.projectName||''}</h1>
                   <h3>Project Code{this.state.data3.projectId||''}</h3>
                   <h3>Customer Name{this.state.data3.customerName||''}</h3>
                   <h3>Customer Mobile{this.state.data3.customerContact||''}</h3>
                   <h3>Project Manager{
                       this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation?(item2.firstName):(<p></p>)
                       ))   
                   }
                   </h3>
                   <table  id="items">
                       <thead>
                       <tr>
                            <th>Employee</th>
                            <th>Task</th>
                            <th>Task</th>
                        </tr>
                       </thead>
                       <tbody>
                       {this.state.data3.allocation!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type}</td>
                           <td>{this.state.data3.comment}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation1!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation1?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type1}</td>
                           <td>{this.state.data3.comment1}</td>
                       </tr>
                           
                           
                           ):(<p></p>)
                        }
                        {this.state.data3.allocation2!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation2?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type2}</td>
                           <td>{this.state.data3.comment2}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation3!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation3?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type3}</td>
                           <td>{this.state.data3.comment3}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation4!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation4?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type4}</td>
                           <td>{this.state.data3.comment4}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation5!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation5?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type5}</td>
                           <td>{this.state.data3.comment5}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation6!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation6?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type6}</td>
                           <td>{this.state.data3.comment6}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation7!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation7?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type7}</td>
                           <td>{this.state.data3.comment7}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation8!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation8?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type8}</td>
                           <td>{this.state.data3.comment8}</td>
                       </tr>                    
                           ):(<p></p>)

                        }
                        {this.state.data3.allocation9!=""?(
                           <tr>
                           <td>{this.state.data.map(item2 => (
                        item2._id==this.state.data3.allocation9?(item2.firstName):(<p></p>)
                       ))}</td>
                           <td>{this.state.data3.type9}</td>
                           <td>{this.state.data3.commen9t}</td>
                       </tr>                    
                           ):(<p></p>)

                        }

                       </tbody>
                   </table>


                </div>
             );
       }
             else
             return (
          
                <div> 
                     <h1>Chart</h1>
                   {/* <h1>{this.state.data3[0].projectName||''}</h1> */}
                </div>
             );
      
      
    }
 }
 export default Chart;