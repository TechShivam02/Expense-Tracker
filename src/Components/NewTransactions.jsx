import { useState } from 'react';
import { Typography, Box, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`;

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;


const NewTransactions = ({setTransactions}) => {

    const [inputtext,setText] = useState('');
    const [inputamount,setAmount] = useState();



    const expenseEnter = (event)=>{
        setText(event.target.value);
    }

    const amountEnter = (event) => {
        setAmount(event.target.value);
    }





    const addTransaction = () => {

        let currdate = new Date();

        let day = currdate.getDate();
        let mon = currdate.getMonth();
        let year = currdate.getFullYear();

        let finaldate = `${day}-${mon}-${year}`;



        const newtrans = {
            id:Math.floor(Math.random()*10000),
            text:inputtext,
            amount:Number(inputamount),
            date:finaldate,
        }

        setTransactions(prevstate => [newtrans , ...prevstate]);

    }

    return (
        <>
            <Container>
                <Typography variant='h5'>  NewTransactions</Typography>

                
                <TextField label="Enter Expense"  onChange={expenseEnter} />
                <TextField label="Enter Amount"  onChange={amountEnter}/>

                <Button variant='contained' onClick={addTransaction}>Add Transaction</Button>
                
            </Container>
        </>
    )
}

export default NewTransactions;
