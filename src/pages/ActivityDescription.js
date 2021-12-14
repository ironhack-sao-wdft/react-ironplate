// import mock from "../assets/mock/mock.json";
// import Navbar from "../components/Navbar";
// import { useRef, useEffect, useState } from "react";
// import { Carousel } from "react-material-ui-carousel";
// import { Button } from "@mui/material";

// export default function ActivityDescription() {
//   const [cardOptions, setCardOptions] = useState([]);
//   const cardArr = [];
//   const [blockedActivities, setBlockedActivities] = useState([1, 0, 2, 999]);
//   //   const pageRef = useRef(1);
//   //   const optionNumber = cardOptions.findIndex + 1;

//   function handleBlock(currentOption) {
//     if (!blockedActivities.includes(currentOption.id)) {
//       setBlockedActivities([...blockedActivities, currentOption.id]);
//     }
//     selectRandomOption();
//     console.log(blockedActivities);
//   }

//   function selectRandomOption() {
//     for (let i = 0; cardArr.length < 3; i++) {
//       let randomOption = mock[Math.ceil(Math.random() * 10 - 1)];
//       if (
//         !cardArr.includes(randomOption) &&
//         randomOption !== undefined &&
//         !blockedActivities.includes(randomOption.id)
//       ) {
//         cardArr.push(randomOption);
//         console.log(cardArr);
//         // setCardOptions(...cardArr);
//       }
//     }
//   }

//   selectRandomOption();

//   return (
//     <Carousel
//       navButtonsAlwaysInvisible={true}
//       animation={"slide"}
//       autoPlay={false}
//       indicators={false}
//       NavButton={({ onClick, next, prev }) => {
//         return (
//           <>
//             <Button
//               onClick={onClick}
//               className="mx-5 d-flex justify-content-center align-items-center"
//               style={{
//                 top: "86%",
//                 left: "15%",
//                 opacity: "0",
//               }}
//             >
//               {next && "next card"}
//             </Button>
//             <Button
//               className=""
//               style={{
//                 top: "20%",
//                 left: "15%",
//                 opacity: "0",
//               }}
//             >
//               {prev && "previous card"}
//             </Button>
//           </>
//         );
//       }}
//     >
//       {cardArr.map((currentOption, index) => {
//         return (
//           <div className="" key={currentOption.name}>
//             <div className="mx-3">
//               <Navbar />
//             </div>

//             <div className="d-flex flex-column justify-content-center align-items-center">
//               <section className="d-flex flex-column justify-content-center align-items-center pb-3">
//                 <span style={{ fontSize: "2.2rem", color: "#FBF8F3" }}>
//                   today's{" "}
//                 </span>
//                 <span style={{ fontSize: "2.2rem", color: "#FBF8F3" }}>
//                   suggestions
//                 </span>
//               </section>
//               <div
//                 className="mb-5 pb-5"
//                 style={{
//                   backgroundColor: "#FFF9F0",
//                   boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
//                   borderRadius: "15px",
//                   width: "90%",
//                   height: "390px",
//                 }}
//               >
//                 <div className="mb-5 pb-5">
//                   <section className="d-flex flex-column justify-content-center align-items-center pt-4 pb-3">
//                     <strong
//                       style={{ fontSize: "1.5rem", fontWeight: "bold" }}
//                       className="d-flex justify-content-center align-items-center pb-4"
//                     >
//                       option {index + 1}
//                     </strong>
//                     <h3>
//                       <strong style={{ fontSize: "2rem", fontWeight: "bold" }}>
//                         {currentOption.name}
//                       </strong>
//                     </h3>
//                     <p style={{ fontSize: "1.5rem" }}>
//                       {currentOption.duration} min
//                     </p>
//                   </section>

//                   <section className="d-flex flex-column justify-content-center align-items-center">
//                     <button
//                       className="px-4 py-2"
//                       style={{
//                         background: "linear-gradient(0deg, #965353, #965353)",
//                         border: 0,
//                         borderRadius: "10px",
//                         color: "#FBF8F3",
//                       }}
//                     >
//                       more info
//                     </button>
//                   </section>

//                   <section className="d-flex mx-3 mt-5 justify-content-between align-items-center">
//                     <button
//                       style={{
//                         background: "none",
//                         border: "none",
//                         color: "#3A3938",
//                       }}
//                       onClick={() => {
//                         handleBlock(currentOption);
//                       }}
//                     >
//                       block
//                     </button>
//                     <button className="d-none">next card</button>
//                   </section>
//                 </div>

//                 {/* <section className="d-flex justify-content-center align-items-center">
//               <p>{currentOption.description}</p>
//               <p>{currentOption.instructions}</p>
//             </section>
//             <section className="d-flex justify-content-center align-items-center">
//               <button>start activity</button>
//             </section> */}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </Carousel>
//   );
// }
