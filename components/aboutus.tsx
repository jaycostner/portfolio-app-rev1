import React from 'react';


const AboutUs: React.FC = () => {

  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl  tracking-tight">
          <strong>We will help you develop better SaaS,Distributed systems, and microservices, faster.   </strong>
          Our team of expert engineers have created some of the best user experiences in some of the most popular applications worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2> Our Team</h2>
        <div className="mt-2">the &ldquo;Gr8Minds&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grids-cols-5 gap-6 lg:gap-20">
          <div>Members</div>
          <div>Members</div>
          <div>Members</div>
          <div>Members</div>
        </div>
      </div>
    </section>
  )

}
export default AboutUs;
