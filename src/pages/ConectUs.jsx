import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';


function ConectUs() {
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        navigate('/tankU');
    };
    return (
        <div>
            <Header />
            <main className="container-fluid bg-success-subtle">
                <div className="container">
                    <div className="form_main d-flex ">
                        <div className="row div_form border w-75 m-auto shadow-lg">
                            <div className="col-lg-6 background_img d-none d-lg-block"></div>
                            <div className="col-lg-6 from_div p-5 bg-light">
                                {/* <!-- דיב היצירת קשר --> */}
                                <form onSubmit={handleSubmit} className="row g-3">
                                    <h2>Stay updated</h2>
                                    <div className="col-md-6">
                                        <label className="form-label">first name</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">last name</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">email</label>
                                        <input type="email" className="form-control" required placeholder="@gmail.com" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">phone number</label>
                                        <input type="tel" className="form-control" placeholder="" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" placeholder="1234 Main St" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">City</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">State</label>
                                        <select className="form-select">
                                            <option >Choose...</option>
                                            <option >israel</option>
                                            <option >us</option>
                                            <option >italy</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label className="form-label">Zip</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-dark rounded-0">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ConectUs