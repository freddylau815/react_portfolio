function About() {
  return (
    <section className='mx-2'>
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:gap-6 my-12'>
        <h2 className='font-bold text-2xl col-span-2 md:col-span-1 flex'>
          ABOUT ME
        </h2>
        <div className='col-span-2 md:col-span-1 flex flex-col'>
          <p>
            I am Freddy Lau and am currently a student aspiring to be a Full
            Stack Developer. I have a passion for problem solving, design, and
            web applications. I am constantly learning and trying new things.
            I'm excited to contribute my new found skills to innovative projects
            and collaborations. Let's build something great together!
          </p>
          <button className='h-10 w-36 bg-green-500 text-lg font-bold mt-4'>
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
