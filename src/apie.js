import React from "react";
import As from "./images/as.png"; // Import the image

function Apie() {
  return (
    <>
          <h2 class="api">About Me</h2>
      <div className="apie">
        <p>
          I am a digital artist who loves to design charaters, draw illustrations and various 2D animations.<br/><br/>
          I had been born Lithuania but I also lived in other countries, which has given me a lot of experience 
          in communicating with people from different cultures and backgrounds. 
          I find it important to understand the client's needs 
          and fulfill their vision by helping to enahnce it with my artistic skills.
          Studying in various art schools and graduating from "Vienožinskis Art School" helped me to improve my design skills 
          and gave me a basic understanding of things like proportion, colour, shape language and etc.
          In addition, while volunteering in highschool student council, 
          I had the opportunity to learn how to create advertising visualizations. 
          After that I also attended a 2 year filmschool course in "Skalvijos Movie Academy" which 
          enlightened me on the topic of film and visual storytelling.
          In my University I have continued to improve my artistic skills while harboring knowledge from IT field.
        </p>
        <img
          src={As}
          width="300px"
          height="auto"
          alt="As"
        />
      </div>
    </>
  );
}

export default Apie;



