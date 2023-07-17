import { Typography, List, Divider, styled, Box } from '@mui/material';
import Transaction from './Transaction';


const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
`;




const Transactions = ( {transactions , setTransactions} ) => {
    return (
        
        <Component >
            
            <Typography variant="h5">Transaction History</Typography>

        
            <Divider style={{width: '100%'}} />   {/*   the black line */}
            
            <List style={{background:"whitesmoke" , overflow:"auto" }}>

                {
                    transactions.map(transaction => (
                        <Transaction key = {transaction.id} transaction = {transaction} setTransactions = {setTransactions}   transactions = {transactions} />
                    ))
                }

                 
            </List>

    </Component>


    )
}

export default Transactions;
