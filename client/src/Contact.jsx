function Contact() {
  return (
    <>
      <section className='mx-2'>
        <div className='mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:gap-6 my-20'>
          <div className='col-span-2 md:col-span-1'>
            <h1 className='font-bold text-2xl col-span-2 md:col-span-1'>
              CONTACT
            </h1>
            <p className='font-bold'>
              <a href='mailto:freddylaudesign@gmail.com'>
                EMAIL <p className='font-normal'>freddylaudesign@gmail.com</p>
              </a>
            </p>
            <br />
            <p className='font-bold'>
              <a href='https://github.com/freddylau815'>GITHUB</a>
            </p>
            <p className='font-bold'>
              <a href='https://www.linkedin.com/in/freddy-lau-113734116/'>
                LINKEDIN
              </a>
            </p>
            <br />
          </div>

          <div className='flex flex-col col-span-2 md:col-span-1'>
            <h1 className='font-bold text-2xl col-span-2 md:col-span-1'>
              Let's Get in Touch!
            </h1>
            <form action='https://api.web3forms.com/submit' method='POST'>
              <input
                type='hidden'
                name='access_key'
                value='22120732-5a80-48b0-a841-cbd2f0973f4d'
              ></input>

              <h3 className='font-bold mb-1'>Full Name</h3>
              <input
                className='p-3 w-80 rounded-md'
                type='text'
                placeholder='Enter full name'
                name='name'
                required
              />
              <h3 className='font-bold mb-1 mt-3'>Email Address</h3>
              <input
                className='p-3 w-80 rounded-md'
                type='email'
                placeholder='Enter email address'
                name='email'
                required
              />
              <h3 className='font-bold mb-1 mt-3'>Leave Message Here</h3>
              <div className='flex flex-col'>
                <textarea
                  cols='30'
                  rows='10'
                  placeholder='Enter your message'
                  className='p-3 rounded-md min-h-12'
                  name='message'
                  required
                />
                <input
                  type='hidden'
                  name='redirect'
                  value='http://localhost:5174/'
                ></input>
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
