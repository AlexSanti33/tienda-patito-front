import axios from 'axios';
import {BASE_URL,PASS_DEFAULT,EMAIL_DEFAULT } from '../constantes/constantes';
import AuthDto from '../models/AuthDto';
import LoginResponse from '../models/LoginResponse';

export const login =async() => {

    const req: AuthDto = {
        email: EMAIL_DEFAULT,
        password: PASS_DEFAULT
    }
    try{
        const response = await axios.post(BASE_URL+'/auth/login',req);
        const responseData: LoginResponse = response.data;
        return responseData;
    }catch(error){
        console.log(error);
    }


}