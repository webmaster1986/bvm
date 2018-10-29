import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div id="skill" style={{paddingTop:"25px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">Our Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/react.png' alt="reactJs" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>React Js</h4>
                                    <p> We use react js for develop responsive frontend of our client's Websites.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/vue.png' alt="vue" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>Vue Js</h4>
                                    <p>We use vue js for develop responsive frontend of our client's Websites.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/angular.png' alt="angular" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>Angular Js</h4>
                                    <p> We use angular js for develop responsive frontend of our client's Websites.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/node.png' alt="node" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>node Js</h4>
                                    <p> We use node Js for develop and maintain backend of website with mongoDb.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/mongodb.png' alt="mongo" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>mongo Db</h4>
                                    <p>   We use mongo Db for develop and maintain backend of website.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/laravel.png' alt="laravel" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>Laravel</h4>
                                    <p>We use Laravel for develop & maintain apis and backend of our client's website.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/androida.png' alt="android" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>Android</h4>
                                    <p> We Develop various Android Applications according to our client's requirement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/ios.png' alt="ios" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>iOS</h4>
                                    <p> We Develop various ios web and native applications for users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="featured-box-item">
                                <div className="featured-icon" style={{border:"1px solid"}}>
                                    <img src='img/skill/react-native-800x450.png' alt="reactNative" style={{width : '70px',height : '70px',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="featured-content">
                                    <h4>React Native</h4>
                                    <p>We develop native application using ReactNative according to our client's requirement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default Skill;
