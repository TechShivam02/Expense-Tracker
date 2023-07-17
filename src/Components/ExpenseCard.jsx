import { Card, CardContent, styled, Typography, Box } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
    }
`;

 

const ExpenseCard = ({transactions}) => {


        
    function giveAmount(transaction){
        return transaction.amount;
    }

    function givepostive(amount){
        return amount >=0;
    }

    function giveNegative(amount){
        return amount<0;
    }




    const amount = transactions.map(giveAmount);   // [amount,amount,amount,amount]    [-20,3000,-100,1500]
     
    const incomearr = amount.filter(givepostive);   // will return an array    [3000,1500]
    const income = incomearr.reduce((amount,item) => (amount += item) , 0).toFixed(2);  // 4500

  
    const expensearr = amount.filter(giveNegative);   // will return an array    [-20,-100]
    const expense = expensearr.reduce((amount,item) => (amount += item) , 0).toFixed(2);  // -300



    return (
    
       <Container>
            <Card>
                <CardContent>
                
                    <Typography> Income </Typography>
                    <Typography style={{color:'Green'}}> ₹{income} </Typography>
                    
                </CardContent>

            </Card>


            <Card>
                <CardContent>
                
                    <Typography> Expense </Typography>
                    <Typography style={{color:'red'}} > ₹{-1*expense} </Typography>
                    
                </CardContent>
                
            </Card>
       </Container>


    );
}

export default ExpenseCard;
