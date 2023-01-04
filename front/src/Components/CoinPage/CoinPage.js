import React from "react";
import { CoinPageMain, ImageBlock, InformationBlock } from "./CoinPageStyle";
import { Link } from "react-router-dom";
import {fetchProductsSuccess} from "../../redux/coinAction";

class CoinPage extends React.Component {
  state = {
    type: null,
    data:null,
  };
  componentDidMount() {
    const urlId = window.location.search;
    fetch(`http://localhost:3001/coinPage${urlId}`)
        .then((res) => res.json())
        .then((json) => {
          this.setState({data:json})
        })
  }
  render() {
    const CoinBlockMain =this.state.data? this.state.data.map(el=>{
     return[
       <CoinPageMain key={el.id}>
         <div>
           <ImageBlock>
             <img src={el.imgFrontUrl} alt="FrontSide" />
           </ImageBlock>
           <ImageBlock>
             <img src={el.imgBackUrl} alt="BackSide" />
           </ImageBlock>
         </div>
         <InformationBlock>
           <h2>{el.name}</h2>
           <p>{el.information}</p>
           <table>
             <tbody>
             <tr>
               <th>Issuing Country</th>
               <td>{el.country}</td>
             </tr>
             <tr>
               <th>Composition</th>
               <td>{el.composition}</td>
             </tr>
             <tr>
               <th>Quality</th>
               <td>{el.quality}</td>
             </tr>
             <tr>
               <th>Denomination</th>
               <td>{el.denomination}</td>
             </tr>
             <tr>
               <th>Year</th>
               <td>{el.date}</td>
             </tr>
             <tr>
               <th>Weight</th>
               <td>{el.weight}</td>
             </tr>
             <tr>
               <th>Price</th>
               <td>{el.price}$</td>
             </tr>
             </tbody>
           </table>
           <Link
               to={{
                 pathname:this.props.location.state?this.props.location.state.history?'/profile':this.props.location.state.searched?'/coinListSearch':"/coinByType/"+el.type.toLowerCase():"/coinByType/"+el.type.toLowerCase(),
                 state: {
                   type: this.state.type,
                 },
               }}
           >
             Back to the list
           </Link>
         </InformationBlock>
       </CoinPageMain>
     ]
  }):null;
    return (
        [CoinBlockMain]
    );
  }
}
export default CoinPage;
