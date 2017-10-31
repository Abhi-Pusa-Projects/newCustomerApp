import React,{Component} from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import Input from "material-ui/Input/Input";
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

const outerBox = {
    width:'100%',
    minWidth:'320px',
    maxWidth:'1300px'
}

const panelClass ={
    padding:'10px',
    margin:'0 auto',
    background:'rbga(10,10,10,0.5)',
}

const textBox={
    width:'40%',
    textAlign:'center',
    padding:'10px',
    float:'left'
}

const inputBox={
    width:'40%',
    textAlign:'center',
    padding:'10px',
    float:'right'
}

const spanstyle ={
    fontSize:'25px',
    padding:'5px',
    marginTop:'5px'
}

const textstyle={
    padding:'5px',
    borderRadius:'2px',
    width:'250px'
}

class ItemDetails1 extends Component {

  render(){
    console.log(this.props);
    return(
      <div style={outerBox}>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item Name:</span>
           </div>
           <div style={inputBox}>
              <input style={textstyle} name="itemName" onChange={this.props.funItemDet}/>
           </div>
         </div>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item Price</span>
           </div>
           <div style={inputBox}>
              <input style={textstyle} name="itemPrice" onChange={this.props.funItemDet}/>
           </div>
         </div>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item Quantity</span>
           </div>
           <div style={inputBox}>
              <input style={textstyle} name="itemQuantity" onChange={this.props.funItemDet}/>
           </div>
         </div>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item Description</span>
           </div>
           <div style={inputBox}>
              <input style={textstyle} name="itemDesc" onChange={this.props.funItemDet}/>
           </div>
         </div>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item Type</span>
           </div>
           <div style={inputBox}>
             <select name="itemType" style={textstyle} onChange={this.props.funItemDet}>
               <option value="Never">Never</option>
               <option value="Every Night">Every Night</option>
               <option value="Weeknights">Weeknights</option>
               <option value="Weekends">Weekends</option>
               <option value="Weekly">Weekly</option>
             </select>
           </div>
         </div>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item inStock Quantity</span>
           </div>
           <div style={inputBox}>
              <input style={textstyle} name="itemStockQuan" onChange={this.props.funItemDet}/>
           </div>
         </div>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item Buying Price</span>
           </div>
           <div style={inputBox}>
              <input style={textstyle} name="itemBuyPrice" onChange={this.props.funItemDet}/>
           </div>
         </div>
         <div style={panelClass}>
           <div style={textBox}>
              <span style={spanstyle}>Item Selling Price</span>
           </div>
           <div style={inputBox}>
              <input style={textstyle} name="itemSellPrice" onChange={this.props.funItemDet}/>
           </div>
         </div>
      </div>
    )
  }
}

export default ItemDetails1;
