import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
export default function TransactionHistory() {

  let trans = useSelector(store => store.addtransaction);
  let sign = trans.transactionamount > 0 ? '+' : '-';
  let type = trans.transactionamount > 0 ? 'plus' : 'minus';
let dispatch=useDispatch();
  
  return (
    <div>
      <h3>Transaction History</h3>
      {
        trans.map((j,index) => {
          return (
            <ul className='list'>
              <li className={type}>
                {j.description}
                <span>${j.transactionamount}</span>
                <button onClick={ ()=>{
                   dispatch({
                    type:'trans-deleted',
                    payload:index
                   })
                }

                }
                 className='delete-btn'>X</button>
              </li>
              {/* <li className='minus'>
                {j.description}
                <span>-${j.transactionamount}</span>
                <button className='delete-btn'>X</button>
              </li> */}
            </ul>
          )
        })
      }
    </div>
  )
}
