import React from 'react'
import { useSelector } from 'react-redux';
export default function Balance() {

  let amount=useSelector(store=>store.addtransaction);
let balance=0;
let ptotal=0;
let mtotal=0;
  amount.forEach((a)=>{
    if(a.transactionamount>0){
     ptotal+=+a.transactionamount;
    }
    else{
      mtotal-=+a.transactionamount;
    }
    balance=ptotal-mtotal;
  })

  return (
    <div>
    <h4> Current Balance</h4>
    <h1 id='balance'>${balance}</h1>
    </div>
  )
}
