import React from "react";

function Card(props) {
  return (
    <> 
  
      <div
        onClick={() => {
          props.onpress({
            name: props.name,
            age: props.age,
            img: props.img,
         lwt:"helooo"
          });
        }}
        style={{
          marginTop:"30px",
          
          width: "200px",
        }}
      >
      
        <div >
          <h4
            style={{
              border:"1px solid black",
              // width:"200px",
              backgroundColor: "black",
              color: "white",
              
              marginTop: "-5px",
            }}
          >
           {props.ind+1} . Name : {props.name}
          </h4>
       
        </div>

      </div>

    </>
  );
}

export default Card;
