import { useState } from "react"
import React from 'react'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";


export default function AddTransaction() {
  let [description, setDescription] = useState('');
let [transactionamount, setTransactionamount] = useState();
let data=useForm();
let dispatch=useDispatch();


function addtransactions(transdata){

  dispatch({
    type:'addnewtransaction',
    payload:transdata
  })
  console.log(transdata)

}
// data.reset();



  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={data.handleSubmit(addtransactions)}>
        <div className='form-control'>
          <label htmlFor="description">
            Description
          </label>
          <input {...data.register('description', { required: true })} type="text"
            id="description"
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            placeholder='Detail of Transaction' />
        </div>
        <div className='form-control'>
          <label htmlFor="transactionamount">
            Transaction Amount
          </label>
          <input type="number"
          {...data.register('transactionamount', { required: true })}
            id="transactionamount"
            value={transactionamount}
            onChange={(e)=>{
              setTransactionamount(e.target.value)
            }}
            placeholder='dollar value of transaction' />
        </div>
        <button className='btn'> Add Transaction</button>
      </form>
    </div>
  )
}
