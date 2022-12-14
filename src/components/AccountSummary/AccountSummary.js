import { useSelector } from 'react-redux'
export default function AccountSummary() {

let amount=useSelector(store=>store.addtransaction);
let ptrans=[];
let mtrans=[];

amount.forEach((a)=>{
  if(a.transactionamount>0){
    ptrans.push(a.transactionamount);
    console.log(a.transactionamount);
  }
  else{
    mtrans.push(a.transactionamount);
    console.log(a.transactionamount);
  }
})

let ptotal=0;
let mtotal=0;
ptrans.forEach((p)=>{
     ptotal+=+p;
})
  
mtrans.forEach((m)=>{
   mtotal+=+m;
})

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${Math.abs(ptotal)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${Math.abs(mtotal)}</p>
      </div>

    </div>
  )
}
