

const Banner = () => {
    
    
    return (
        
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/nnXvMHK/383078141-3644654482490315-1210490901510264079-n.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
      <div>
        <input className="px-8 py-2 text-black rounded-l" type="text"  placeholder="Search here..." />
        <button className="bg-red-600 text-white px-5 py-2 rounded-r-lg ">Search</button>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default Banner;