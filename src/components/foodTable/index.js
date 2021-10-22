import { StyledTable } from './styles'
import TableRow from '../tableRow'
import { useFood } from '../../providers/food'
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Loading from '../loading'

function FoodTable() {

    const { food, setFood } = useFood();
    const [ load, setLoad ] = useState(false);
    
    const getBreakfast = () => {
        setLoad(true)
        api.get('/breakfast')
        .then(resp => {
            setFood(resp.data);
            setLoad(false)
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
            
                {
                    load === false ? (
                        <tbody>  
                        {
                        food.length > 0 && (
                        food.map((item, i) => <TableRow data={item} key={i} />))
                        }
                        </tbody>
                    ):
                    (<Loading  margin='2rem 0 0 90%' display='block'/>)
                }
            
        </StyledTable>
    )
   
}

export default FoodTable
