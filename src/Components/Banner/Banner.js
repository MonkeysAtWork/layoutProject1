const Banner = () => {
  return (
    <section className="Banner">
      <span className="Banner-Header">Intellectual Property has the Shelf Life</span>
      <span className="Banner-Text">of a Banana.</span>
      <button className="Banner-Button">Become a Member</button>
      <div className="Banner-Control">
        <div className="Banner-PrevButton Arrow"></div>
        <div className="Banner-NextButton Arrow"></div>
      </div>
    </section>
  )
};

export default Banner;
