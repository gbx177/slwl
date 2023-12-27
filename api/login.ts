import http from '../utils/uni-fetch'

interface Ilogin{
	account:string,
	password:string
}

export const getLogin = (data:Ilogin)=>http({url:'/driver/login/account',method:'POST',data})