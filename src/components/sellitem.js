import React,{Component} from "react";
import axios from "axios";
import APIURL from '../config/config';

const shopdetstyle = {
  float:'left',
  border:'1px solid red',
  borderRadius:'5px',
  width:'25%'
}
const shopdetparastyle={
  padding:'0px',
  margin:'3px'
}
const billdetstyle={
  float:'right',
  border:'1px solid red',
  borderRadius:'5px',
  width:'25%'
}
const shopdetwrapper={
  border:'1px solid black',
  overflow:'hidden'
}
const customerwrapper={
  overflow:'hidden',
  border:'1px solid black',
  padding:'20px 0px'
}
const customerdetdiv={
  float:'left',
  border:'1px solid black',
  padding:'0px',
  margin:'0px'
}
const purchauseorderdiv={
  float:'right'
}
const customerfielddiv={
  overflow:'hidden'
}
const customerfieldspan={
  float:'left',
  padding:'5px',
  margin:'3px'
}
const customerfieldtext={
  float:'right',
  padding:'5px',
  margin:'3px'
}
const additemwrapper={
  padding:"5px 0px",
  border:"1px solid black"
}
const additem={
  padding:"5px",
  margin:"3px"
}

const addedItemwrapper={
  textAlign:'center',
  width:'100%'
}

const addedItemTable={
  border:'1px solid black',
  width:'100%'
}

const addedItemHeader={
  border:'1px solid black'
}

const addedItemRow={
  border:'1px solid black'
}

const addedItemCol={
  border:'1px solid black'
}

class SellItem extends Component{
  constructor(props){
    super(props);
    this.state={
      itemList:[],
      itemAddedToCart:[],
      totalbillamount:0
    }
  }

  componentWillMount(){
    console.log("this function is getting called when this is called");
    let URL = APIURL.APIURL+'getItems.php';
    let _this = this;
    console.log(APIURL.APIURL);
    axios.get(URL)
    .then(function(response){
      console.log("we are getting the respose from getitem api",response.data.data);
      _this.setState({itemList:response.data.data});
    }).catch(function(response){
      console.log("error happened here",response);
    });
  }

  addItemfunc(){
    console.log('add item function is being called',this.refs.itemname.value);
    let arr = this.state.itemList;
    let itemNo = 0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]['itemName'] == this.refs.itemname.value){
        itemNo = i;
        break;
      }
    }
    let addedItem = this.state.itemAddedToCart;
    let obj = {};
    obj['product'] = arr[itemNo]['itemName'];
    obj['description'] = arr[itemNo]['itemDesc'];
    obj['quantity']=this.refs.itemquantity.value;
    obj['PerUnitCost']=arr[itemNo]['itemPrice'];
    obj['totalcost']=(this.refs.itemquantity.value*arr[itemNo]['itemPrice']);
    addedItem.push(obj);
    this.setState({itemAddedToCart:addedItem});
    let totalamount = this.state.totalbillamount;
    totalamount += (this.refs.itemquantity.value*arr[itemNo]['itemPrice']);
    this.setState({totalbillamount:totalamount});
    console.log('total amount'+totalamount);
  }

  render(){
    var $this = this;
    return(
      <div>
        <div>
          <div style={shopdetwrapper}>
            <div style={shopdetstyle}>
              <h2 >Shop Name</h2>
              <p style={shopdetparastyle}>S1 Sai Krishna Paradise</p>
              <p style={shopdetparastyle}>Near Celebrity housing Gate</p>
              <p style={shopdetparastyle}>Electronic City</p>
              <p style={shopdetparastyle}>Bangalore - 560100</p>
            </div>
            <div style={billdetstyle}>
              <p>Bill No</p>
              <p>Date:<span>{(new Date().getDate())}</span>/<span>{(new Date().getMonth()+1)}</span>/<span>{(new Date().getFullYear())}</span></p>
            </div>
          </div>

          <div style={customerwrapper}>
            <div style={customerdetdiv}>
              <div style={customerfielddiv}>
                <span style={customerfieldspan}>Customer Name</span>
                <input style={customerfieldtext} type="text" placeholder="enter customer name" href="customername"></input>
              </div>
              <div style={customerfielddiv}>
                <span style={customerfieldspan}>Customer Address</span>
                <textarea style={customerfieldtext} placeholder="enter address" href="address" rows="4" cols="22"></textarea>
              </div>
              <div style={customerfielddiv}>
                <span style={customerfieldspan}>Telephone No.</span>
                <input style={customerfieldtext} placeholder="enter telephone" href="telephone"></input>
              </div>
              <div style={customerfielddiv}>
                <span style={customerfieldspan}>Email Id</span>
                <input style={customerfieldtext} placeholder="enter email id" href="emailid"></input>
              </div>
            </div>
            <div>
              <p style={purchauseorderdiv}>Purhause Order</p>
            </div>
          </div>

          <div style={additemwrapper}>
            <span style={additem}>Add new item</span>
            <input style={additem} ref="itemname" list="browsers" />
            <datalist id="browsers">
            {
                this.state.itemList.map(function(item,key){
                  return(
                    <option key={key} value={item['itemName']} />
                  )
                })
            }
            </datalist>
            <span style={additem}>Quantity</span>
            <input ref="itemquantity" placeholder="enter quantity" style={additem}></input>
            <button style={additem} onClick={this.addItemfunc.bind(this)}>Add Item</button>
          </div>

          <div style={addedItemwrapper}>
            <table style={addedItemTable}>
               <tr style={addedItemRow}>
                 <th style={addedItemHeader}>Product</th>
                 <th style={addedItemHeader}>Description</th>
                 <th style={addedItemHeader}>Quantity</th>
                 <th style={addedItemHeader}>PerUnitCost</th>
                 <th style={addedItemHeader}>Total cost</th>
               </tr>
               {
                 this.state.itemAddedToCart.map(function(item,key){
                   return(
                     <tr>
                        <td style={addedItemCol}>{item['product']}</td>
                        <td style={addedItemCol}>{item['description']}</td>
                        <td style={addedItemCol}>{item['quantity']}</td>
                        <td style={addedItemCol}>{item['PerUnitCost']}</td>
                        <td style={addedItemCol}>{item['totalcost']}</td>
                     </tr>
                   )
                 })
               }
               <tr>
                  <td colspan="2">this is to certify that i all the input provided in true as per my knowledge</td>
                  <td style={addedItemCol}>{this.state.totalbillamount}</td>
               </tr>
            </table>
          </div>

        </div>
      </div>
    )
  }
}

export default SellItem;
