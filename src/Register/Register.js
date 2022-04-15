import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>please register!!</h1>
            <form>
                <input type="text" placeholder="your name"/><br/>
                <input type="email" placeholder="ypur email"/>
                <br/>
                <input type="password" placeholder='password'/>
                <br/>
                <input type="submit" value="register"/>

            </form>
            
        </div>
    );
};

export default Register;