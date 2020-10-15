import React, { Component } from 'react';
class Gallery extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card-deck">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found"  src={require("../images/i7.png")}/>
                                <div className="card-body">
                                    <div className="card-text">Excellence is a continuous process and not an accident.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found"  src={require("../images/i2.png")}/>
                                <div className="card-body">
                                    <div className="card-text">ISRO's crew capsules and space suits at Bengaluru.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found" src={require("../images/i1.png")}/>
                                <div className="card-body">
                                    <div className="card-text">India’s first rocket was brought on cycle.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found" src={require("../images/i3.png")}/>
                                <div className="card-body">
                                    <div className="card-text">India’s first Satellite was brought on bullock cart.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found" src={require("../images/i4.png")}/>
                                <div className="card-body">
                                    <div className="card-text">Chandrayaan-2 India aims for landing on Moon's south pole.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found" src={require("../images/i5.png")}/>
                                <div className="card-body">
                                    <div className="card-text">Mangalyaan successfully enters Mars orbit in first attempt.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found" src={require("../images/i6.png")}/>
                                <div className="card-body">
                                    <div className="card-text">Chandrayaan-2 mission start up process for count down stage.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mt-3" style={{borderColor:"black"}}>
                                <img className="card-img-top img-fluid" style={{height:"150px"}} alt="Not found"  src={require("../images/isro2.png")}/>
                                <div className="card-body">
                                    <div className="card-text">Model ISRO Satellite at Space. Modern Space flight Programee.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;