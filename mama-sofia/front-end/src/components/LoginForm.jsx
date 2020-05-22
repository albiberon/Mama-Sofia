import React from "react";

var marginArea = {
    marginTop: '50px',
    marginLeft: '30%',
    marginRight: '30%'
}

function LoginForm() {
    return <div style={marginArea}>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control my-1" placeholder="Email address" required autofocus/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control my-1" placeholder="Password" required/>
                    <button class="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
                </form>
            </div>
      };
    
      export default LoginForm;