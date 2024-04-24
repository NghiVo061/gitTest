import React, { useState }  from "react"
const LoginComponent = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        if(userName=='admin' && password=='admin'){
            localStorage.setItem('userName', userName);
            window.location.reload();
        }
        else{
            alert("Incorrect username or password");
        }
    }
    return(
        <div>
            <h1>Login to the system</h1>
            <table>
                <tr>
                    <td>User name:</td>
                    <td><input type="text" value={userName} onChange={(e)=>{
                        setUsername(e.currentTarget.value)
                    }} /></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" value={password} onChange={(e)=>{
                        setPassword(e.currentTarget.value)
                    }} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button onClick={handleClick}>Login</button></td>
                </tr>
            </table>
        </div>
    )
}
export default LoginComponent;