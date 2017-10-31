import React,{Component} from "react";
import Grid from 'material-ui/Grid';
import axios from 'axios';

class  ItemList extends Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps',nextProps.ItemList);
    this.props = nextProps;
  }
    render(){
      var $this = this;
      return(
        <div>
          <p>This is the Item List that will help me here</p>
          <table >
          <tbody>
            <tr>
              <td>ITEM NAME</td>
              <td>ITEM PRICE</td>
              <td>ITEM DESCRIPTION</td>
            </tr>
            { $this.props.itemsList.map(function(item,key){
              console.log('this is getting called while rendering',item);
              return(<tr key={key}><td>{item["itemName"]}</td>
                        <td>{item["itemPrice"]}</td>
                        <td>{item["itemDesc"]}</td>
                        <td><button id={item["itemName"]} onClick={$this.props.deleteItem}>DELETE</button></td>
                     </tr>)
            })}
            </tbody>
          </table>
        </div>
      )
    }
}

export default ItemList;
