import React,{Component} from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Input from "material-ui/Input/Input";


class ItemDetails2 extends Component {
  render(){
    return(
      <div>
        <div>
          <div>
            <Grid container>
                <Grid item  sm={6}>
                    <p>Item Description</p>
                </Grid>
                <Grid item  sm={12}>
                    <Input placeholder="Enter the Description" onChange={this.props.funItemDet}></Input>
                </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemDetails2;
