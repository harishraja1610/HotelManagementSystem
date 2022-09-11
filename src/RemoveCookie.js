import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router';

const RemoveCookies = () => {
   const [cookies, setCookie] = useCookies(['user']);
    setCookie('user','none',{ path: '/' });
    setCookie('id','none',{ path: '/' });
   return (
    <Navigate replace to={'/'}/>);
};
export default RemoveCookies;