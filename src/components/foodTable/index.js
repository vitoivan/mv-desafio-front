import { StyledTable } from './styles'
import TableRow from '../tableRow'
import { useFood } from '../../providers/food'
import api from '../../services/api';
import { useEffect } from 'react';

function FoodTable() {

    const { food, setFood } = useFood();
    
    const getBreakfast = () => {
        api.get('/breakfast')
        .then(resp => {
            setFood(resp.data);
            console.log(resp.data)
        })
        .catch( err => console.log(err))
    }
    // eslint-disable-next-line
    useEffect(getBreakfast, []);
    
    return (
        <StyledTable>
            <thead>
                <tr>
                    <td>Quem vai levar</td>
                    <td>O que vai levar</td>
                </tr>
            </thead>
            <tbody>  
                { 
                    food.length > 0 && (
                        food.map((item, i) => <TableRow data={item} key={i} />) 
                    )
                }
            </tbody>
        </StyledTable>
    )
   
}

export default FoodTable
