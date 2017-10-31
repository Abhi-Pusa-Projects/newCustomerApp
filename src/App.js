import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const buttonstyle1 = {
     display: 'block',
     color: 'white',
     textAlign: 'center',
     padding: '14px 16px',
     textDecoration: 'none'
};
const buttonstyle2 = {
     display: 'block',
     color: 'white',
     textAlign: 'center',
     padding: '14px 16px',
     textDecoration: 'none',
     background:'gray'
};
const buttonstyle = {
     width:'100%',
     color:'white',
     background:'rgba(250,134,17,0.3)',
     padding:'14px 16px'
   };
const navigationUL = {
     listStyleType:'none',
     margin:'0px',
     padding:'0px',
     overflow: 'hidden',
     backgroundColor: '#333'
};
const navlink = {
     float:'left'
}

class App extends Component {

   constructor(props){
     super(props);
     this.state = {
                   open: 'none',
                   hover1:buttonstyle1,
                   hover2:buttonstyle1,
                   hover3:buttonstyle1,
                   hover4:buttonstyle1
                  };
   }

   handleToggle() {
     console.log('calling from handle toggle',this);
     let temp = this.state.open=='none'?'block':'none';
     this.setState({open:temp})
   }

   onMouseEnterHandler(e){
        switch (e.target.name) {
          case 'hover1' : {this.setState({hover1:buttonstyle2}); break;}
          case 'hover2' : {this.setState({hover2:buttonstyle2}); break;}
          case 'hover3' : {this.setState({hover3:buttonstyle2}); break;}
          case 'hover4' : {this.setState({hover4:buttonstyle2}); break;}
        }
   }

   onMouseLeaveHandler(e){
        switch (e.target.name) {
          case 'hover1' : {this.setState({hover1:buttonstyle1}); break;}
          case 'hover2' : {this.setState({hover2:buttonstyle1}); break;}
          case 'hover3' : {this.setState({hover3:buttonstyle1}); break;}
          case 'hover4' : {this.setState({hover4:buttonstyle1}); break;}
        }
   }

   render() {

      return (
         <div>
            <div>
                 <button style={buttonstyle}
                         onClick={this.handleToggle.bind(this)}>
                      Toggle Drawer
                 </button>

                <div style={{display:this.state.open}}>
                  <ul style={navigationUL}>
                    <li style={navlink}>
                      <Link name="hover1" style={this.state.hover1} onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseLeave={this.onMouseLeaveHandler.bind(this)}  to='/durgesh_app/additem'>Add Item</Link>
                    </li>
                    <li style={navlink}>
                      <Link name="hover2" style={this.state.hover2} onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseLeave={this.onMouseLeaveHandler.bind(this)}  to='/durgesh_app/showItem'>Show Item</Link>
                    </li>
                    <li style={navlink}>
                      <Link name="hover3" style={this.state.hover3} onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseLeave={this.onMouseLeaveHandler.bind(this)}  to='/durgesh_app/sellitem'>SellItem</Link>
                    </li>
                    <li style={navlink}>
                      <Link name="hover4" style={this.state.hover4} onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseLeave={this.onMouseLeaveHandler.bind(this)}  to='/durgesh_app/footer'>Footer</Link>
                    </li>
                  </ul>
                </div>
             </div>
         </div>
      );
   }
}

export default App;
