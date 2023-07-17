import { useState,useEffect } from 'react';

import { Typography, Box, styled } from '@mui/material';
import './App.css';


import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from "./Components/NewTransactions";
import Transactions from './Components/Transactions'




const getLocalitems = () => {

  let list = JSON.parse(localStorage.getItem('transactions'));
  

  if(list){
    return JSON.parse(localStorage.getItem('transactions'))
  }

  else{
    return [
      { id: 1, text: 'Rent', key:1 , amount: -10000 , date : "15-07-2023" },
      { id: 2, text: 'travel', key:2 , amount: -500 ,  date : "15-07-2023" },
      { id: 3, text: 'Freelancing', key:3 , amount: 5000 ,  date : "10-07-2023" },
      { id: 4, text: 'Monthly', key:4 , amount: 20000  ,  date : "1-07-2023" },
      ];
  }

}





const Header = styled(Typography)`
  margin: 10px 0px 25px 0px;
  padding : 3px 10px 3px 10px;
  color: Black;
  font-size: 36px;
  text-transform: uppercase;
  Box-shadow : 7px 5px 13px 3px darkgray;
`;

const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px; 
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }

`;




function App() {

  const [transactions, setTransactions] = useState(
  
         getLocalitems()

  );



  useEffect(()=>{
    
      localStorage.setItem('transactions' , JSON.stringify(transactions));
    
  } , [transactions]);




  return (
    <Box  className="App">


      <Header> Expense Tracker</Header>



      <Component >     {/* Parent box  , parent div  */}
      

            <Box style = {{border: '1.5px solid grey'}}>   

                  <Balance transactions = {transactions} /> 
                  <ExpenseCard transactions = {transactions}/>
                  <NewTransactions setTransactions = {setTransactions} /> 

            </Box>



          <Box style = {{border: '2px solid black' , overflow:"auto"}} >     {/*  Child box2  */}
              <Transactions transactions = {transactions}   setTransactions = {setTransactions} />
          </Box>
        

      </Component>




    </Box>  

  );
}

export default App;
  