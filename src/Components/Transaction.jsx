import { ListItem, ListItemIcon, ListItemText , styled} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


 
const Detail = styled(ListItem)`
margin-top:10px;
`


const Transaction = ({transaction , setTransactions , transactions }) => {

    const color = transaction.amount > 0 ? 'green' : 'red';

    const deletetransaction =(id) => {


        const myfunc = (transaction) => {
            return transaction.id !==id;
        }

        setTransactions(transactions.filter(myfunc));  // setTransactions(....)    updated  // transactions.filter(myfunc)   [.....]     , 




    }


    return (
        <>  
        

            <Detail style = {{background : `${color}` , color : 'whitesmoke'}}>
                    
                    <ListItemIcon>  
                        <DeleteIcon style={{color:"whitesmoke" ,cursor : "pointer" }} onClick = { ()=>deletetransaction(transaction.id)}  />
                    </ListItemIcon>

                    <ListItemText>{transaction.text}</ListItemText>
                    <ListItemText>{transaction.amount}</ListItemText>
                    <ListItemText>{transaction.date}</ListItemText>
                    

                    


            </Detail>
        </>
    )
}

export default Transaction;
