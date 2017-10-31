import React,{Component} from 'react';
import APIURL from '../config/config';
import axios from 'axios';

const searchstyle ={
    padding:'10px',
    borderRadius:'5px',
    width:'50%',
    margin:'auto',
    textAlign:'center'
}
const iconstyle={
    height:'30px',
    width:'30px',
    padding:'15px'
}
const outerbox={
  width:'100%',
  textAlign:'center',
  marginTop:'20px'
}
const tablestyle={
  width:'100%',
  padding:'10px 20px',
  textAlign:'center',
  margin:'auto',
  marginTop:'20px'
}
const rowstyle={
  border:'1px solid black',
  padding:'15px'
}
const colstyle={
  borderBottom:'1px solid black',
  padding:'10px 0px',
  margin:'0px',
  maxWidth:'100px',
  textAlign:'center'
}
class ShowItem extends Component{
  constructor(props){
    super(props);
    this.state={
                itemList:[],
                opts:[],
                editorsave:[]
               };
  }

  componentWillMount() {
      console.log("component will mount function");
  }

  funceditorsave(e){
    console.log('this edit or save method is called',e.target,e.target.getAttribute('data-set'));
    let itemno = this.fetchItemNo(e.target.getAttribute('data-set'));
    console.log('itemno',itemno);
    var temparr = this.state.opts;
    var eeorsarr = this.state.editorsave;
    if(this.state.editorsave[itemno] == 'EDIT'){
        temparr[itemno] = {};
        eeorsarr[itemno] = 'SAVE';
        this.setState({opts:temparr});
        this.setState({editorsave:eeorsarr});
    }else{
        eeorsarr[itemno] = 'EDIT';
        temparr[itemno] = {readOnly:'readOnly'};
        this.setState({opts:temparr});
        this.setState({editorsave:eeorsarr});
        let URL = APIURL.APIURL+'updateItem.php';
        let obj = {
                     "itemName":this.refs['set'+itemno+'0'].value,
                     "itemPrice":this.refs['set'+itemno+'1'].value,
                     "itemDesc":this.refs['set'+itemno+'2'].value,
                     "itemQuantity":this.refs['set'+itemno+'3'].value,
                     "itemType":this.refs['set'+itemno+'4'].value,
                     "itemStockQuan":this.refs['set'+itemno+'5'].value,
                     "itemBuyPrice":this.refs['set'+itemno+'6'].value,
                     "itemSellPrice":this.refs['set'+itemno+'7'].value
                  };
        axios.post(URL,obj).
        then(function(response){
          console.log("response came from server",response.data.data);
          if(response.data.data == true){
            alert("data updated successfully");
          }else{
            alert("data updation failed");
          }
        }).
        catch(function(response){
          console.log("error happened here",response);
        });
    }
  }

  fetchSearchedItem(e){
      console.log("this function is getting called when this is called",this.refs.seachbox.value);
      let URL = APIURL.APIURL+'getItems.php?name='+this.refs.seachbox.value;
      let _this = this;
      console.log(APIURL.APIURL);
      axios.get(URL)
      .then(function(response){
        console.log("we are getting the respose from getitem api",response.data.data);
        _this.setState({itemList:[]});
        var obj = {itemList:response.data.data};
        _this.setState(obj);
        _this.setState({opts:[]});
        _this.setState({editorsave:[]});
        for(let i=0;i<obj.itemList.length;i++){
          let tempobj = {readOnly:'readOnly'};
          let temparr = _this.state.opts;
          let editorsavearr =_this.state.editorsave;
          temparr.push(tempobj);
          _this.setState({opts:temparr});
          editorsavearr.push('EDIT');
          _this.setState({editorsave:editorsavearr});
          console.log(_this.state.opts[i]);
        }
      }).catch(function(response){
        console.log("error happened here",response);
      });
  }

  fetchItemNo(str){
    let itemNo = str.replace('set','');
    return itemNo;
  }

  funcview(e){
    console.log("function for view is being called",e.target,e.target.getAttribute('data-set'));
    //set0 ==> 0
    let itemNo = this.fetchItemNo(e.target.getAttribute('data-set').toString());
    //console.log('itemno',itemNo);
    //get the itemname from state itemList
    let itemName = this.state.itemList[itemNo].itemName;
    //console.log('itemname',itemName);
    this.context.router.history.push('/durgesh_app/viewItem/'+itemName);
  }

  funcdelete(e){
    console.log("function to delete view is being called",e.target.getAttribute('data-set'));
    let itemNo =this.fetchItemNo(e.target.getAttribute('data-set').toString());
    console.log("itemno",itemNo);
    let itemName = this.state.itemList[itemNo].itemName;
    console.log("itemname",itemName);
    let URL = APIURL.APIURL+'deleteItem.php';
    let obj = {"itemTodelete":itemName};
    let _this = this;
    axios.post(URL,obj)
      .then(function(response){
        console.log("response came from server",response.data.data);
        if(response.data.data == true){
          alert("data deleted successfully");
        }else{
          alert("data deletetion failed");
        }
      })
      .catch(function(response){
        console.log("error response came from server",response);
      });
    console.log('updated state',newState);
  }

  render(){
    var _this = this;
    return(
        <div style={outerbox}>
            <input style={searchstyle} onChange={this.fetchSearchedItem.bind(this)} ref="seachbox" placeholder="search Item" />
            <table style={tablestyle}>
               <thead>
                 <tr style={rowstyle}>
                    <td style={colstyle}>ITEMNAME</td><td style={colstyle}>ITEMPRICE</td><td style={colstyle}>ITEMQUANTITY</td>
                    <td style={colstyle}>ITEMDESC</td><td style={colstyle}>ITEMTYPE</td><td style={colstyle}>ITEMSTOCKQUAN</td>
                    <td style={colstyle}>ITEMBUYPRICE</td><td style={colstyle}>ITEMSELLPRICE</td>
                    <td style={colstyle}>VIEW</td><td style={colstyle}>EDIT</td><td style={colstyle}>DELETE</td>
                 </tr>
               </thead>
               <tbody>
                 {

                   this.state.itemList.map(function(item,key){
                     return(
                       <tr key={key} style={rowstyle}>
                           <td style={colstyle}><input ref={'set'+key+'0'} style={colstyle} type="text" defaultValue={item["itemName"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><input ref={'set'+key+'1'} style={colstyle} type="text" defaultValue={item["itemPrice"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><input ref={'set'+key+'2'} style={colstyle} type="text" defaultValue={item["itemQuantity"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><input ref={'set'+key+'3'} style={colstyle} type="text" defaultValue={item["itemDesc"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><input ref={'set'+key+'4'} style={colstyle} type="text" defaultValue={item["itemType"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><input ref={'set'+key+'5'} style={colstyle} type="text" defaultValue={item["itemStockQuan"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><input ref={'set'+key+'6'} style={colstyle} type="text" defaultValue={item["itemBuyPrice"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><input ref={'set'+key+'7'} style={colstyle} type="text" defaultValue={item["itemSellPrice"]} {..._this.state.opts[key]}/></td>
                           <td style={colstyle}><button data-set={'set'+key} onClick={_this.funcview.bind(_this)}>VIEW</button></td>
                           <td style={colstyle}><button data-set={'set'+key} onClick={_this.funceditorsave.bind(_this)}>{_this.state.editorsave[key]}</button></td>
                           <td style={colstyle}><button data-set={'set'+key} onClick={_this.funcdelete.bind(_this)}>DELETE</button></td>
                       </tr>
                     )
                   })
                 }
               </tbody>
            </table>
        </div>
    );
  }
}

ShowItem.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default ShowItem;
