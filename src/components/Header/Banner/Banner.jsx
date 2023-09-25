const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2f-YZr0Mb718ZjuWOoOQN0FurWDRehPKagEyuFaNrh0R2jgggDwkJuQp4)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-base md:text-2xl lg:text-4xl font-bold text-black mb-5">I Grow By Helping People In Need</h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
