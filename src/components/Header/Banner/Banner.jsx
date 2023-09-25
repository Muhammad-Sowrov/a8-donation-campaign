const Banner = () => {
  return (
    <div>
      {/* <div className="bg-slate-400 h-[70vh] ">
                
            </div> */}

      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2f-YZr0Mb718ZjuWOoOQN0FurWDRehPKagEyuFaNrh0R2jgggDwkJuQp4)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
