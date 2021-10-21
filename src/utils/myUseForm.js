import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

const UseForm = (schema) => {
    return useForm({ resolver: yupResolver(schema) })
}

export default UseForm;