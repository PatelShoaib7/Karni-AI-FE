import React from 'react';
import AccessDenied from '../../Pages/AccessDenied';

const ProtectedRoutes = ({ Component }) => { 
    const token = "bcddhsncsjcmdslv0"; 
    return token  ?  <Component /> :  <AccessDenied />
};

export default ProtectedRoutes;
