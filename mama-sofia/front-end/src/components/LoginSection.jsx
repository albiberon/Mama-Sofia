import React from 'react';
import InnerPageHeader from './InnerPageHeader';
import LoginForm from './LoginForm';


function LoginSection(){

   return <div loading="lazy" className = "container-fluid login-section nopadding-container">
        <InnerPageHeader
            imgURL = "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/ce250dcce490a07197157b19f207993e/photo-1533777857889-4be7c70b33f7"
            name = "Login"/>
        <LoginForm/>
    </div>


};

export default LoginSection;