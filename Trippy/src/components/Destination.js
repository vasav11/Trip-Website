import Mountain1 from "../assests/1.jpg"
import Mountain2 from "../assests/2.jpg"
import Mountain3 from "../assests/5.jpg"
import Mountain4 from "../assests/8.jpg"
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination =()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to world</p>
           <DestinationData
           className="first-des"
           heading="Taal Volcano,Bantangas"
           text="One of the most iconic views in luzon, Mt.Taal boasts
           volcano inside a lake inside an island.If you fancy a closer
           look,the hike up to the crater is a mere 45 minutes,and is 
           easy enough for beginners.Guides will assist you the most of 
           the way,and you'll see the peculiar environment found on
           an active volcano,including volcanic rocks and steam 
           vents.The hike can be dusty and hot, so plan for an early
           morning trip, and then unwind with some bulalo before
           heading back home!"
           img1={Mountain1}
           img2={Mountain2}
           />
            <DestinationData
            className="first-des-reverse"
           heading="Mt.Daguldul ,Bantangas"
           text="If you're looking for a hike that's a little more challenging but still
           good for a beginner mountaineer,check out Mt.Daguldul in San
           Juan,Batangas.You'll start your hike from the beach and pass
           through tropical forest,different rock formations,and small
           streams.There's a small store halfway up the trail where you can
           take a break and drink buko juice,and through the summit itself
           may not have the best view,the breeze is fantastic.Once you've
           made it back down,head straight to the beach for refreshing
           well-deserved swim!"
           img1={Mountain3}
           img2={Mountain4}
           />
        </div>
    );
};
export default Destination;