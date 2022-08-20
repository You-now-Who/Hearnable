import React from 'react'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.username.value);
        console.log(e.target.elements.password.value);
    }
    

  return (
    <>
        <div className='container my-5'>
            <form>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="password" name="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login