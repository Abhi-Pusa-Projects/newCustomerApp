import React,{Component} from "react";
import PropTypes from 'prop-types';
import ItemDetails1 from '../blocks/itemdetails1';
import axios from 'axios';
import APIURL from '../config/config';

const grid_div = {
  background:'rgba(0,255,210,0.23)',
  border:'1px solid black',
  borderRadius:'3px',
  padding:'10px',
  margin:'auto',
  width:'90%',
  height:'500px',
  textAlign:'center'
}

class AddItem extends Component{
  constructor(props){
      super(props);
      this.state={
        itemName:'',
        itemPrice:'',
        itemQuantity:'',
        itemDesc:'',
        itemType:'',
        itemStockQuan:'',
        itemBuyPrice:'',
        itemSellPrice:''
      };
  }

  setItemDet1(e){
    console.log('Set item details one is getting captured',e.target.name,e.target.value);
    let obj = {};
    obj[e.target.name]=e.target.value;
    console.log("object created",obj);
    this.setState(obj);
  }


  addNewItem(){
    console.log("this add new item function is getting called");
    var $this = this;
    var new_obj = {
                   "itemName":this.state.itemName,
                   "itemPrice":this.state.itemPrice,
                   "itemDesc":this.state.itemDesc,
                   "itemQuantity":this.state.itemQuantity,
                   "itemType":this.state.itemType,
                   "itemStockQuan":this.state.itemStockQuan,
                   "itemBuyPrice":this.state.itemBuyPrice,
                   "itemSellPrice":this.state.itemSellPrice
                 };
    let URL = APIURL.APIURL+'createNewItem.php';
    console.log(URL,this.state);
    axios.post(URL,this.state)
      .then(function(response){
        console.log(response);
        if(response.data.data == true){
          alert("Item inserted Successfully");
        }
        else{
          alert("Item insertion Failed");
        }

      })
      .catch(function(response){
        console.log("error response came from server",response);
      });
  }

  render(){
    return(
      <div>
        <div>
          <div style={grid_div}>
              <ItemDetails1  funItemDet={this.setItemDet1.bind(this)} />
              <br style={{clear:'both'}}></br>
              <button style={{margin:'auto',textAlign:'center',marginTop:'20px',clear:'both',padding:'10px',fontSize:'20px'}} onClick={this.addNewItem.bind(this)}>
                   Add New Item
              </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddItem;
