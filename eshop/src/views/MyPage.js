import React from 'react';

export default function MyPage() {
    return (
        <div className="d-flex justify-content-center mt-5 py-5">
            <form className="text-center border border-light p-5" action="#!">

                <p className="h4 mb-4">Sign in</p>
                <input type="text" className="form-control mb-4" placeholder="E-mail"></input>

                <input type="password" className="form-control mb-5" placeholder="Password"></input>

                <button className="btn btn-dark btn-block mb-3" type="submit">Sign in</button>
                <p>Not a member?</p>
                <button className="btn py-1 btn-light">Register</button>
            </form>
        </div>

    )
}
