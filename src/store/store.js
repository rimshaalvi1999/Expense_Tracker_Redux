import { combineReducers,createStore } from "redux";



function addtransaction(puranaData=[],nyaData){
if(nyaData.type ==='addnewtransaction'){
  puranaData.push(nyaData.payload);
}
else if(nyaData.type ==='trans-deleted'){
  puranaData.splice(nyaData.payload,1);
}
return [...puranaData];
}



let allSections=combineReducers({addtransaction});
let myStore=createStore(allSections,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default myStore;
