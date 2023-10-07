import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        
      </nav>

      <h1 className='head_text'>
        Read with me <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI </span>
      </h1>
      <h2 className='desc'>
      Unleash the power of AI in digesting vast amounts of information swiftly with our OpenAI Summarizer App. Designed with efficiency and accuracy in mind, our app harnesses the capabilities of advanced machine learning to condense lengthy texts into concise, comprehensible summaries. Whether you're a student sifting through vast academic papers, a professional juggling multiple reports, or simply someone who wants to get the gist of a lengthy article without the time commitment, our app has got you covered. Streamline your reading process, save time, and enhance comprehension with the OpenAI Summarizer App - your intelligent reading assistant.
      </h2>
    </header>
  );
};

export default Hero;