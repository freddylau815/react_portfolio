function Contact() {
  return (
    <>
      <section className='mx-2'>
        <div className='mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:gap-6 my-12'>
          <div className='col-span-2 md:col-span-1'>
            <h1 className='font-bold text-2xl col-span-2 md:col-span-1'>
              CONTACT
            </h1>
            <p>EMAIL</p>
            <br />
            <p>GITHUB</p>
            <p>LINKEDIN</p>
            <br />
          </div>

          <div className='flex flex-col col-span-2 md:col-span-1'>
            <h1 className='font-bold text-2xl col-span-2 md:col-span-1'>
              Let's Get in Touch!
            </h1>
            <form>
              <h3 className='font-bold mb-1'>Full Name</h3>
              <input
                className='p-3 w-80 rounded-md'
                type='text'
                placeholder='Enter full name'
              />
              <h3 className='font-bold mb-1 mt-3'>Email Address</h3>
              <input
                className='p-3 w-80 rounded-md'
                type='text'
                placeholder='Enter email address'
              />
              <h3 className='font-bold mb-1 mt-3'>Leave Message Here</h3>
              <div className='flex flex-col'>
                <textarea
                  cols='30'
                  rows='10'
                  placeholder='Enter your message'
                  className='p-3 rounded-md'
                />
                <button className='h-10 w-36 bg-green-500 text-lg font-bold mt-4 rounded-md'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
