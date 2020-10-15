import React, { Component } from 'react'

class Ticket extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            num:null,
            email:"",
            bookDate:"",
            detailState:false,
            limit:0,
            final:false,
            errorMessage:{
                visitors:"",
                email:"",
                bookDate:"",
                name:"",
                age:"",
                aad:""
            },
            valid:{
                visitors:false,
                email:false,
                buttonValid:false,
                bookDate:false,
                name:false,
                age:false,
                aad:false
            },
            name:"",
            age:"",
            aad:""
        }
    }

    handleChange=(e)=>{
        let n=e.target.value;
        let name=e.target.name;
        this.setState({[name]:n})
        this.validation(name,n)
    }
    
    validation = (name,value) => {
        const {errorMessage,valid}=this.state;
        switch(name){
            case "email":
                if(value==="" && value.length===0){
                    errorMessage.email="Please enter your emailId";
                    valid.email=false;
                }
                else if(!value.match( /^[a-z]+@[a-z]+\.com$/ )){
                    errorMessage.email="Please enter a valid email format";
                    valid.email=false;
                }
                else{
                    errorMessage.email="";
                    valid.email=true;
                }
                break;
            case "num":
                let value1=String(value)
                let value2=Number(value)
                if(value1==="" && value1.length===0){
                    errorMessage.visitors="Please enter the number of visitors";
                    valid.visitors=false;
                }
                else if(value2<1){
                    errorMessage.visitors="Number of visitors should be greater than or equal to 1";
                    valid.visitors=false;
                }
                else if(value2>5){
                    errorMessage.visitors="Number of visitors should be less than or equal to 5";
                    valid.visitors=false;
                }
                else{
                    errorMessage.visitors="";
                    valid.visitors=true;
                }
                break;
            case "bookDate":
                let checkInDate = new Date( value );
                let today = new Date();
                if(value==="" && value.length===0){
                    errorMessage.bookDate="Please choose your Booking Date";
                    valid.bookDate=false;
                }
                else if(today.getTime() >= checkInDate.getTime()){
                    errorMessage.bookDate="Booking date cannot be a past date or same date";
                    valid.bookDate=false;
                }
                else{
                    errorMessage.bookDate="";
                    valid.bookDate=true;
                }
                break;
            default:
                break;
        }
        valid.buttonValid=valid.email && valid.visitors && valid.bookDate;
        this.setState({errorMessage:errorMessage,valid:valid})
    }

    handleChange1=(e)=>{
        let n1=e.target.value;
        let name1=e.target.name;
        this.setState({[name1]:n1})
        this.validation1(name1,n1)
    }

    validation1=(name,value)=>{
        const {errorMessage,valid}=this.state;
        switch(name){
            case "name":
                if(value==="" && value.length===0){
                    errorMessage.name="Please enter your name";
                    valid.name=false;
                }
                else if(!value.match( /^[A-z]+([ ][A-z]+)*$/ )){
                    errorMessage.name="Name should contain only alphabets";
                    valid.name=false;
                }
                else{
                    errorMessage.name="";
                    valid.name=true;
                }
                break;
            case "age":
                let value1=String(value)
                let value2=Number(value)
                if(value1==="" && value1.length===0){
                    errorMessage.age="Please enter your age";
                    valid.age=false;
                }
                else if(value2<=0){
                    errorMessage.age="Please enter your valid age";
                    valid.age=false;
                }
                else if(!value1.match( /^[0-9]{1,2}$/ )){
                    errorMessage.age="Age should contain only numbers and should be less than 100";
                    valid.age=false;
                }
                else{
                    errorMessage.age="";
                    valid.age=true;
                }
                break;
            case "aad":
                let value3=String(value)
                if(value3==="" && value3.length===0){
                    errorMessage.aad="Please enter your aadhar number";
                    valid.aad=false;
                }
                else if(!value3.match( /^[0-9]{12}$/ ) || value3.length!==12){
                    errorMessage.aad="Aadhar number should contain only numbers and length should be equal to 12";
                    valid.aad=false;
                }
                else{
                    errorMessage.aad="";
                    valid.aad=true;
                }
                break;
            default:
                break;
        }
        valid.buttonValid1=valid.name && valid.age && valid.aad;
        this.setState({errorMessage:errorMessage,valid:valid})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({detailState:true,limit:this.state.limit+1})
    }

    handleSubmit1=(e)=>{
        e.preventDefault();
        this.setState({limit:this.state.limit+1,name:"",age:"",aad:""})
    }
    
    finalSubmit=(e)=>{
        e.preventDefault();
        this.setState({final:true,detailState:false})
    }

    render() {
        return (
            <div className="container-fluid home1">
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="card mt-3" style={{borderColor:"black"}}>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} autoComplete="off">
                                    <div className="form-group">
                                        <label  htmlFor="email"><b>Email Id:</b></label>
                                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.email} id="email" name="email" placeholder="Enter the Email Id:"/>
                                    
                                        <span className="text-danger">{this.state.errorMessage.email}</span>
                                    </div>
                                    <div className="form-group">
                                        <label  htmlFor="num"><b>Number of Visitors:</b></label>
                                        <input className="form-control" onChange={this.handleChange} type="number" value={this.state.visitors} id="num" name="num" placeholder="Enter the number of visitors"/>
                                        <span className="text-danger">{this.state.errorMessage.visitors}</span>
                                    </div>
                                    <div className="form-group">
                                        <label  htmlFor="bookDate"><b>Booking Date:</b></label>
                                        <input className="form-control" onChange={this.handleChange} type="date" value={this.state.bookDate} id="bookDate" name="bookDate"/>
                                        <span className="text-danger">{this.state.errorMessage.bookDate}</span>
                                    </div>
                                    <button className="btn btn-primary" disabled={!this.state.valid.buttonValid} type="submit">Proceed</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {this.state.final===false ? (this.state.detailState===true && this.state.limit<=this.state.num) ? 
                        <div className="col-md-5 offset-md-1 col-sm-12 col-xs-12">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <div className="card-header text-primary">
                                    <b>Visitor&nbsp;&nbsp;{this.state.limit}</b>
                                </div>
                                <div className="card-body">
                                    <form autoComplete="off">
                                        <div className="form-group">
                                            <label htmlFor="name"><b>Name:</b></label>
                                            <input className="form-control" onChange={this.handleChange1} value={this.state.name} type="text" id="name" name="name" placeholder="Enter your name"/>
                                            <span className="text-danger">{this.state.errorMessage.name}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="age"><b>Age:</b></label>
                                            <input className="form-control" onChange={this.handleChange1} value={this.state.age} type="text" id="age" name="age" placeholder="Enter your age"/>
                                            <span className="text-danger">{this.state.errorMessage.age}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="aad"><b>Aadhar Number:</b></label>
                                            <input className="form-control" value={this.state.aad} onChange={this.handleChange1} type="text" id="aad" name="aad" placeholder="Enter your aadhar number"/>
                                            <span className="text-danger">{this.state.errorMessage.aad}</span>
                                        </div>
                                        {this.state.limit==this.state.num ? <button className="btn btn-primary" disabled={!this.state.valid.buttonValid1}  onClick={this.finalSubmit}>Submit</button>:
                                        <button className="btn btn-primary" disabled={!this.state.valid.buttonValid1}  onClick={this.handleSubmit1}>Next</button>}
                                    </form>
                                </div>
                            </div> 
                        </div> : null : 
                        <div className="col-md-5 offset-md-1 col-sm-12 col-xs-12">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <div className="card-header">
                                    <div className="card-text text-success">
                                        <h5><b>Your Booking was successful</b></h5>
                                    </div>
                                </div>
                                <div className="card-body" style={{backgroundColor:"lightgreen"}}>
                                    <h5 className="text-primary"><b>Details:</b></h5>
                                    <div>
                                        <span><b>Email Id.</b>&nbsp;&nbsp;{this.state.email}</span><br/>
                                        <span><b>Booked Date.</b>&nbsp;&nbsp;{this.state.bookDate}</span>
                                    </div>
                                </div>
                                <div className="card-footer text-success">
                                    <h5><b>Your Ticket has been sent to the {this.state.email}</b></h5>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Ticket