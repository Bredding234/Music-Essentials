import React, { Component } from 'react';
import ReactFormValidation from "react-form-input-validation";
import './Register.css'
ReactFormValidation.register(
  "custompassword",
  function(value, requirement, attribute) {
    return value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
  },
  "The :attribute password must contain atleast 1 speacial character and digit and alphabet."
);

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                firstname: '',
                lastname: '',
                gender: '',
                phoneno: '',
                email: "",
                password: '',
                address:''
            },
            errors: {}
        }
        this.form = new ReactFormValidation(this);
        this.form.useRules({
            firstname: "required|alpha",
            lastname: "required|alpha",
            phoneno: 'required|numeric|digits_between:10,12',
            email: 'required|email',
            password: 'required|custompassword',
            address:'required',
            state:'required'

        })
      
        this.form.onformsubmit = fields => {
            alert("registration done successfully")
            console.log('fiels:',fields)
            this.props.history.push({pathname:'/',state:{info:fields}})
        }
    }



    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header" >
                        Register
                    </div>
                    <div className="card-body">
                    <form className="form" noValidate  onSubmit={this.form.handleSubmit}>
                            <div>
                            <label style={{'align':'left','display': 'block'}}>Firstname</label>
                            <input className="form-control"
                                name="firstname"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.firstname} 
                                type="text" 
                                />
                            <label className="error">
                                {this.state.errors.firstname ? this.state.errors.firstname : ""}
                            </label>
                            </div>
                            <div>
                            <label>Lastname</label>
                            <input className="form-control"
                                name="lastname"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.lastname} type="text" />
                            <label className="error">
                                {this.state.errors.lastname ? this.state.errors.lastname : ""}
                            </label>
                            </div>
                            <div>
                            <label>Email</label>
                            <input className="form-control"
                                name="email"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.email} type="text" />
                            <label className="error">
                                {this.state.errors.email ? this.state.errors.email : ""}
                            </label>
                            </div>
                            <div>
                            <label>Address</label>
                            <input className="form-control"
                                name="address"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.address} type="text" />
                            <label className="error">
                                {this.state.errors.address ? this.state.errors.address : ""}
                            </label>
                            </div>
                            <div>
                            <label>Contact No</label>
                            <input className="form-control"
                                name="phoneno"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.phoneno} type="tel" />
                            <label className="error">
                                {this.state.errors.phoneno ? this.state.errors.phoneno : ""}
                            </label>
                            </div>
                            <div>
                            <label>Password</label>
                            <input className="form-control"
                                name="password"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.password} type="password" />
                            <label className="error">
                                {this.state.errors.password ? this.state.errors.password : ""}
                            </label>
                            </div>
                            <div>
                            <label>State</label>
                            <input className="form-control"
                                name="state"
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                value={this.state.fields.state} type="text" />
                            <label className="error">
                                {this.state.errors.state ? this.state.errors.state : ""}
                            </label>
                            </div>


                            <button className="btn btn-info  btn-block"type="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;