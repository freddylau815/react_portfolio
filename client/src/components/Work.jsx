function Work() {
  return (
    <>
      <main id='work'>
        <div className='mx-2'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6'>
            <div className='col-span-2 md:col-span-1 flex flex-col justify-end'>
              <div className='project-1 col-span-2 h-96 rounded-md p-6 md:col-span-1 flex flex-col justify-end'></div>
              <a href='#'>
                <h2 className='font-bold text-xl mt-3'>Always Sunny</h2>
                <p className='mb-3 description'>
                  Weather and sun times display using APIs with a location
                  history features.
                </p>
              </a>
            </div>
            <div className='col-span-2 md:col-span-1 flex flex-col justify-end'>
              <div className='project-2 col-span-2 h-96 rounded-md p-6 md:col-span-1 flex flex-col justify-end'></div>
              <a href='#'>
                <h2 className='font-bold text-xl mt-3'>Student Link</h2>
                <p className='mb-3 description'>
                  Collaborative learning platform that connects students for
                  study sessions.
                </p>
              </a>
            </div>
            <div className='col-span-2 md:col-span-1 flex flex-col justify-end'>
              <div className='project-3 col-span-2 h-96 rounded-md p-6 md:col-span-1 flex flex-col justify-end'></div>
              <a href='#'>
                <h2 className='font-bold text-xl mt-3'>Project 3</h2>
                <p className='mb-3 description'>
                  Short Description of project goes here
                </p>
              </a>
            </div>
            <div className='col-span-2 md:col-span-1 flex flex-col justify-end'>
              <div className='project-4 col-span-2 h-96 rounded-md p-6 md:col-span-1 flex flex-col justify-end'></div>
              <a href='#'>
                <h2 className='font-bold text-xl mt-3'>Project 4</h2>
                <p className='mb-3 description'>
                  Short Description of project goes here
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Work;
