import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    cpf: yup.string().required(),
    password: yup.string().required()
}).required();


export const registerSchema = yup.object().shape({
    cpf: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required()
}).required();


export const foodSchema = yup.object().shape({
    food: yup.string().required(),
}).required();