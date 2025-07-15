import { useContext, useState } from "react";
import { login } from "../../service/AuthService";
import "./Login.css";
import { AppContext } from '../../context/AppContext';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const Login = () => {

    const {setAuthData} = useContext(AppContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await login(data);
            if (response.status === 200) {
                toast.success('Login successful!');
                localStorage.setItem('token', response.data.token); // Store token in local storage
                localStorage.setItem('role', JSON.stringify(response.data.role)); // Store user role in local storage
                setAuthData(response.data.token, response.data.role); // Update context with auth data
                // Redirect to dashboard or home page
                navigate('/dashboard');
            } else {
                toast.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while logging in. Please try again later.');
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="bg-light d-flex align-items-center justify-content-center vh-100 login-background">
            <div className="card shadow-lg w-100" style={{maxWidth: '480px'}}>
                <div className="card-body">
                    <div className="text-center">
                        <h1 className="card-title">Sign In</h1>
                        <p className="card-text text-muted">
                            Sign in below to access your account.
                        </p>
                    </div>
                    <div className="mt-4">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-muted">
                                    Email address
                                </label>
                                <input type="text" name="email" id="email" placeholder="yourname@example.com" className="form-control" onChange={onChangeHandler} value={data.email}/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-muted">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" placeholder="**********" className="form-control" onChange={onChangeHandler} value={data.password}/>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-dark btn-lg" disabled={loading} type="submit">
                                    {loading ? "Loading..." : "Sign In"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;