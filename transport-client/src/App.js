import './App.css'
import React from "react";
import { BrowserRouter, Route, Switch, Routes, Navigate, Redirect, } from "react-router-dom";
import FrontendHeader from "./components/FrontendHeader";
import Home from './components/FrontendUI/Home';
import About from './components/FrontendUI/About';
import ApplyNow from './components/FrontendUI/ApplyNow';
import FrontendFooter from './components/FrontendFooter';
import ListVehicleComponent from "./components/VehicleComponent/ListVehicleComponent";
import HeaderComponent from "./components/HeaderComponent";
import AddVehicleComponent from "./components/VehicleComponent/AddVehicleComponent";
import UpdateVehicleComponent from "./components/VehicleComponent/UpdateVehicleComponent";
import ListDriverComponent from "./components/DriverComponent/ListDriverComponent";
import AddDriverComponent from "./components/DriverComponent/AddDriverComponent";
import UpdateDriverComponent from "./components/DriverComponent/UpdateDriverComponent";
import ListRouteComponent from "./components/RouteComponent/ListRouteComponent";
import AddRouteComponent from "./components/RouteComponent/AddRouteComponent";
import UpdateRouteComponent from "./components/RouteComponent/UpdateRouteComponent";
import ListJourneyComponent from "./components/JourneyComponent/ListJourneyComponent";
import AddJourneyComponent from "./components/JourneyComponent/AddJourneyComponent";
import UpdateJourneyComponent from "./components/JourneyComponent/UpdateJourneyComponent";
import StatisticalDriverComponent from "./components/StatisticalComponent/StatisticalDriverComponent";
import TotalStatisticalDriverComponent from "./components/StatisticalComponent/TotalStatisticalDriverComponent";
import StatisticalVehicleComponent from "./components/StatisticalComponent/StatisticalVehicleComponent";
import TotalStatisticalVehicleComponent from "./components/StatisticalComponent/TotalStatisticalVehicleComponent";

function App() {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <FrontendHeader />
                    {/* <HeaderComponent /> */}
                    <div className="container">
                        <Switch>

                        <Route path='/' exact={true} component={Home} />

                        <Route path="/home" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/applynow" component={ApplyNow}></Route>
                        {/* <Route path="/contact" element={<Contact />} /> */}
                        {/* <Route path="*" component={<NotFound />} />  */}

                        <Route path="/listVehicles" component={ListVehicleComponent}></Route>
                        <Route path="/vehicles" component={ListVehicleComponent}></Route>
                        <Route path="/add-vehicle" component={AddVehicleComponent}></Route>
                        <Route path="/update-vehicle/:licensePlate" component={UpdateVehicleComponent}></Route>
                        <Route path="/vehicles/:key" component={ListVehicleComponent}></Route>

                        <Route path="/listDrivers" component={ListDriverComponent}></Route>
                        <Route path="/drivers" component={ListDriverComponent}></Route>
                        <Route path="/add-driver" component={AddDriverComponent}></Route>
                        <Route path="/update-driver/:idCard" component={UpdateDriverComponent}></Route>
                        <Route path="/drivers/:key" component={ListDriverComponent}></Route>

                        <Route path="/listRoutes" component={ListRouteComponent}></Route>
                        <Route path="/routes" component={ListRouteComponent}></Route>
                        <Route path="/add-route" component={AddRouteComponent}></Route>
                        <Route path="/update-route/:id" component={UpdateRouteComponent}></Route>
                        <Route path="/routes/:key" component={ListRouteComponent}></Route>

                        <Route path="/listJourneys" component={ListJourneyComponent}></Route>
                        <Route path="/journeys" component={ListJourneyComponent}></Route>
                        <Route path="/add-journey" component={AddJourneyComponent}></Route>
                        <Route path="/update-journey/:id" component={UpdateJourneyComponent}></Route>
                        <Route path="/journeys/:key" component={ListJourneyComponent}></Route>

                        <Route path="/statisticalDriver" exact component={StatisticalDriverComponent}></Route>
                        <Route path="/totalStatisticalDriver" component={TotalStatisticalDriverComponent}></Route>
                        <Route path="/statisticalVehicle" exact component={StatisticalVehicleComponent}></Route>
                        <Route path="/totalStatisticalVehicle" component={TotalStatisticalVehicleComponent}></Route>
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>

            <FrontendFooter/>
            {/* <FooterComponent /> */}
            
        </div>


    );
}

export default App;
