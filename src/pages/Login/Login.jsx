import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";


const Login = () => {
    
    const handleLogin = e=> {
        e.preventDefault()
        console.log(e.currentTarget.email.value);

        const form = new FormData(e.currentTarget);
        console.log(form.get('email'), form.get('password'))
    }

    return (
        <div>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 mx-auto">
                <div>
                <h2 className="text-center text-3xl font-bold my-5">Please Login</h2>
                <div className="card bg-base-100 md:w-3/4 lg:w-1/3 mx-auto shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">Do not have account? <Link to={'/register'} className="font-bold text-blue-500">Register</Link></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;