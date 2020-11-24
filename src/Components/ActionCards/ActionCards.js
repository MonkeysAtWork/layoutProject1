import armchair from '../../images/armchair.png';
import cash from '../../images/cash.png';

const ActionCards = () => {
  return (
    <section className="ActionCards">
        <div className="ActionCard ActionCard_Blue">
          <img className="ActionCard-Img" src={armchair} alt="armchair" />
          <div className="ActionCard-Content">
            <h3 className="ActionCard-Header">Find Properties</h3>
            <p className="ActionCard-Text">Sign up to browse the portfolio. Your journey to becoming a real<br /> estate baron starts here.</p>
            <button className="ActionCard-Btn">Become A Member</button>
          </div>
        </div>
        <div className="ActionCard">
          <img className="ActionCard-Img" src={cash} alt="armchair" />
          <div className="ActionCard-Content">
            <h3 className="ActionCard-Header">Find Buyers</h3>
            <p className="ActionCard-Text">Sign up to browse the portfolio. Your journey to becoming a real<br /> estate baron starts here.</p>
            <button className="ActionCard-Btn">Submit Your Project</button>
          </div>
        </div>
      </section>
  )
};

export default ActionCards;
