import React from 'react';
import { Helmet } from 'react-helmet';

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='flex pt-10 gap-10 justify-center'>
                <div className="card bg-slate-400 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-slate-400 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;