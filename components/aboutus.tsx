import React from 'react';


const AboutUs: React.FC = () => {

  return(
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
        <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl  tracking-tight">
               <strong>We will help you develop better distributed systems, faster.   </strong> 
               Our team of experts engineers have created some of the best user experiences in some of the most popular applications worldwide
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
           <h2> Our Team</h2>
           <div>the &ldquo;spec-ops&rdquo;</div>
        </div>
    </section>
  )

}
export default AboutUs;
