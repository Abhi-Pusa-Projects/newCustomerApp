import React,{Component} from 'react';
import axios from 'axios';
import APIURL from '../config/config';

class ViewItem extends Component{
   constructor(props){
     super(props);
     this.state = {
                    itemDetails:[
                                  {itemName:'',
                                  itemPrice:'',
                                  itemDesc:'',
                                  itemQuantity:'',
                                  itemBuyPrice:'',
                                  itemSellPrice:'',
                                  itemType:'',
                                  itemStockQuan:''
                                }
                              ]
                  };
      console.log("this is the view",this.props.match.params.itemname);
      let _this = this;
      let itemname = this.props.match.params.itemname;
      //got the itemname and now call the api to get the details of the view
      let URL = APIURL.APIURL+'getItems.php?name='+itemname;
      console.log("url generated",URL);
      axios.get(URL).then(function(response){
           _this.setState({itemDetails:response.data.data});
           console.log('itemdetails logs',_this.state.itemDetails);
      }).catch(function(response){
           console.log("redirect to error page",response);
      });
      //console.log("itemdetails from prev page",this.context);
   }

   render(){
     return(
       <div>
            <h1>Item Details</h1>
            <p>{this.state.itemDetails[0].itemName}</p>
            <p>{this.state.itemDetails[0].itemPrice}</p>
            <p>{this.state.itemDetails[0].itemDesc}</p>
            <p>{this.state.itemDetails[0].itemQuantity}</p>
            <p>{this.state.itemDetails[0].itemBuyPrice}</p>
            <p>{this.state.itemDetails[0].itemSellPrice}</p>
            <p>{this.state.itemDetails[0].itemType}</p>
            <p>{this.state.itemDetails[0].itemStockQuan}</p>
       </div>
     )
   }
}


export default ViewItem;
