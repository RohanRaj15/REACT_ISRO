import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
             ticket:false
        }
    }

    stateChange=()=>{
        this.setState({ticket:true})
    }
    
    render() {
        return (
            this.state.ticket===true ? <Redirect to="/ticket"/> :
            <div className="container-fluid home">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mt-4">
                            <div className="card-header">
                                <b className="text-primary" style={{fontSize:"25px"}}>ISRO</b><br/>
                                <b>Indian Space Research Organisation</b>
                            </div>
                            <div className="card-body">
                                <b>Our vision is to harness space technology for national development, while pursuing space science research and planetary exploration.</b><br/><br/>
                                <b>Space has revolutionized the life of human being by bringing variety of applications to the door step of every common man. It has kindled a natural curiosity and ever increasing interest in every individual, towards the Indian Space Program.</b><br/><br/>
                                <b>AT PRESENT ONLY THE LAUNCH VIEW GALLERY IS OPENED TO PUBLIC FOR LAUNCH WITNESS, OTHER FACILITIES WORKS ARE UNDER PROGRESS</b><br/><br/>
                                <b className="text-primary text-center">Click the below button to apply a visitor pass</b><br/>
                                <button className="btn btn-success" onClick={this.stateChange}>Apply Pass</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home