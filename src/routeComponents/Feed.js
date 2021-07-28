import { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
//import VehicleCard from "./VehicleCard";
//import Search from "./Search";
import PostCard from "../components/PostCard";

function Feed () {
  
    return (

        <div class="container p-5"  style={{backgroundColor: "#fffdf0"}}>
            <div class="row">
                <div class="col-sm-3 "  style={{backgroundColor: "#f2bb9c"}}>
                Perfil foto <br/>
                Perfil foto <br/>
                Perfil foto <br/>
                Perfil foto <br/>

                texto texto texto texto <br/>
                texto texto texto texto <br/>
                texto texto texto texto <br/>
                texto texto texto texto <br/>
                texto texto texto texto <br/>

                </div>
                    <div class="col-sm-9" >
                        <h2 className="m-5 text-center">Viagens da comunidade</h2>

                            <div className="col-sm-10 m-5 d-flex justify-content-center"  style={{backgroundColor: "#fffdf0"}}>
                                <PostCard/>
                            </div>

                        
                    </div>
            </div>
        </div>

      
    );

}

export default Feed;




<div style={{backgroundColor: "#fffdf0"}}>
<div className="container p-5 "  >
    <div className="row">

        <div className="col-2 " style={{backgroundColor: "#f2bb9c"}}>
            .col-4 this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
        </div>
        <div className="col-10" style={{backgroundColor: "#fffdf0"}}>
            .col-8 Subsequent columns continue along the new line.
        </div>
    </div>
</div>
</div>