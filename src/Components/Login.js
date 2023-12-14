import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl, Image, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const circleSize = '48px';
    const imagePadding = '7px 0px 45px';

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });


        if (name === 'email') {
            setEmailError('');
        } else if (name === 'password') {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email) {
            setEmailError('Email is required');
        }

        if (!formData.password) {
            setPasswordError('Password is required');
        }

        if (formData.email && formData.password) {
            if (formData.email === 'testproject' && formData.password === '1234') {
                navigate('/home');
            } else {
                setEmailError('');
                setPasswordError('Credentials are wrong!');
            }
        }
    };

    return (
        <div className="container" style={{ maxWidth: '900px' }}>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="bg-white p-4 m-4">
                        <h1 className="text-3xl font-bold mb-4 text-left">Sign In</h1>
                        <p className="mb-2">
                            New user?{' '}
                            <span style={{ color: 'blue' }}>Create an account</span>
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <InputGroup>
                                    <FormControl
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Username or Email"
                                        autoComplete="off"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!emailError}
                                        className="w-100 border-black border-2 p-2"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {emailError}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </div>
                            <div className="mb-4">
                                <InputGroup>
                                    <FormControl
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={!!passwordError}
                                        className="w-100 border-black border-2 p-2 "
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {passwordError}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </div>
                            <Form.Group className="mb-4">
                                <Form.Check
                                    type="checkbox"
                                    id="keepSignedIn"
                                    label="Keep me signed in"
                                    className="font-bold text-sm text-black hover:text-blue-800"
                                />
                            </Form.Group>
                            <Button
                                type="submit"
                                variant="dark"
                                className="w-100 h-[45px] text-white text-sm font-semibold rounded bg-black"
                            >
                                Sign In
                            </Button>
                            <div className="flex items-center mb-4 mt-4">
                                <div className="border-b border-gray-500 flex-grow"></div>
                                <label className="label mx-4">
                                    <span className="label-text text-black font-medium">
                                        Or Sign In With
                                    </span>
                                </label>
                                <div className="border-b border-gray-500 flex-grow"></div>
                            </div>
                            <Col className="mb-5 text-center" md={12}>
                                <div className="d-inline-flex justify-content-center align-items-center gap-3">
                                    <div className="border border-black shadow px-2 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                                        <Image src="/img/path.png" alt="language" fluid style={{ padding: imagePadding }} />
                                    </div>
                                    <div className="border border-black shadow px-3 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                                        <Image src="/img/face.png" alt="language" fluid style={{ padding: imagePadding }} />
                                    </div>
                                    <div className="border border-black shadow px-3 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                                        <Image src="/img/instaa.png" alt="language" fluid style={{ padding: imagePadding }} />
                                    </div>
                                    <div className="border border-black shadow px-3 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                                        <Image src="/img/twit.png" alt="language" fluid style={{ padding: imagePadding }} />
                                    </div>
                                </div>
                            </Col>
               </Form>
                    </div>
                </div>
                <div className="col-md-6 mt-4 d-none d-md-block mb-4">
                    <Image
                        src="/img/Illustration.png"
                        alt="language"
                        className="w-50 h-auto mx-auto d-block"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
