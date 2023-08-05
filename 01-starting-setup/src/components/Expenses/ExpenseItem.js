import React , {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//cant be called outSide
//cant be called in nested functions
const ExpenseItem = (props) => {
    //First is a pointer value which represents the current ststae value   
    //second is a special  Function to update the value 
    const [title,setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('updated')
        console.log('clicked')
    };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}> change title</button>
    </Card>
  );
}

export default ExpenseItem;