import { useEffect, useState } from 'react'
import { useFood } from '../../providers/food';
import { useUser } from '../../providers/user';
import api from '../../services/api'
import { StyledRow, StyledBtnEdit, StyledBtnDelete } from './styles'
import EditFood from '../editFood'
import { toastError } from '../../utils/toasts';

function FoodTable({ data }) {

    const [owner, setOwner] = useState(undefined);
    const { user } = useUser();
    const { food, setFood } = useFood();
    const [editModal, setEditModal] = useState(false);
    const [load, setLoad] = useState(false);

    const toggleEditModal = () => setEditModal(!editModal);

    const getUser = () => {
        api.get(`/users/${data.userId}`)
        .then( resp => setOwner(resp.data.name))
        .catch( err => console.log(err))
    }
    
    const editFood = (foodName) => {
        setLoad(true)
        const newFood = {
            food: foodName
        }
        api.patch(`/breakfast/${data.id}`, newFood)
        .then(resp => {
            const newFoods = food.map(item => {
                if(item.id === resp.data.id){
                    return resp.data;
                }
                return item;
            })
            setLoad(false)
            setFood(newFoods);
            toggleEditModal()
        })
        .catch( err => {
            setLoad(false)
            toastError("Alguém já vai trazer este alimento!")
        })
    }

    const deleteFood = () => {
        api.delete(`/breakfast/${data.id}`)
        .then(resp => {
            const newFoods = food.filter(item => item.id !== data.id)
            setFood(newFoods);
        })
        .catch( err => console.log("Já existe um alimento com esse nome"))
    }
    // eslint-disable-next-line
    useEffect(getUser, [])

    return (
        <>
        <StyledRow>
            <td>{owner}</td>
            <td>{data.food}</td>
            { user?.id === data.userId && (
                <>
                <td>
                    <StyledBtnEdit onClick={toggleEditModal}>
                        Edit
                    </StyledBtnEdit>
                </td>
            
                {
                    editModal === true ? (
                        <EditFood load={load} func={editFood}/>
                    ): (
                        <td>
                            <StyledBtnDelete onClick={deleteFood}>
                                Delete
                            </StyledBtnDelete>
                        </td>
                    )
                }
                </>
                
            )
        }
        </StyledRow>
        </>
    )
}

export default FoodTable
