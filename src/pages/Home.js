import Slider from "../components/Slider";
import Album from "../components/Album";

function Home(){

  return(
    <>
    <div className="container-fluid">
      <Slider/>
    </div>
    
    <div>
      <Album/>
    </div>
     
</> 
 )
}
export default Home;