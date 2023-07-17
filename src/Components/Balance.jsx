import { Typography, styled, Box } from '@mui/material';

const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
`



const Balance = ({ transactions }) => {



        
    function giveAmount(transaction){
        return transaction.amount;
    }

    const amount = transactions.map(giveAmount);

    
    const total = amount.reduce((amount,item) => (amount += item) , 0).toFixed(2);


    return (

        <Box>
            <BalanceText> Balance : ₹{total} </BalanceText>
        </Box>
        
    )
}

export default Balance;

