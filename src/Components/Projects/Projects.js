import project1 from '../../images/project1.jpg';
import project2 from '../../images/project2.jpg';
import person1 from '../../images/person1.jpg';
import person2 from '../../images/person2.jpg';

const Projects = () => {
  return (
    <section className="Projects">
      <div className="FeaturedProjects">
        <header className="FeaturedProjects-Header">
          <div>
            <h3>Featured Projects</h3>
            <p>Brief details of new and popular projects. To view full listings, you will be required to sign up and become a member.</p>
          </div>
          <button><div>Become a Member</div></button>
        </header>
        <div className="FeaturedProjects-List">
          <div className="FeaturedProject">
            <div className="FeaturedProject-ProjectImage FeaturedProject-ProjectImage_new">
              <img src={project1} alt="city" />
              <span className="FeaturedProject-PriceBadge">From <b>GBP 3600</b></span>
            </div>
            <div className="FeaturedProject-Content">
              <div className="FeaturedProject-Text">
                <h4>Ontario Tower , LONDON</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="FeaturedProject-Funde FeaturedProject-Funde_percents_10">
                <div className="FeaturedProject-FundeScale"></div>
                <div className="FeaturedProject-FundeValues">8 Days Left</div>
              </div>
              <a href="#2" className="FeaturedProject-ProjectDetails">
                See Project Details
                </a>
            </div>
          </div>
          <div className="FeaturedProject">
            <div className="FeaturedProject-ProjectImage FeaturedProject-ProjectImage_new">
              <img src={project2} alt="city" />
              <span className="FeaturedProject-PriceBadge">From <b>GBP 3600</b></span>
            </div>
            <div className="FeaturedProject-Content">
              <div className="FeaturedProject-Text">
                <h4>Ontario Tower , LONDON</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="FeaturedProject-Funde FeaturedProject-Funde_percents_60">
                <div className="FeaturedProject-FundeScale"></div>
                <div className="FeaturedProject-FundeValues">8 Days Left</div>
              </div>
              <a href="#2" className="FeaturedProject-ProjectDetails">
                See Project Details
                </a>
            </div>
          </div>
          <div className="FeaturedProject">
            <div className="FeaturedProject-ProjectImage FeaturedProject-ProjectImage_new">
              <img src={project1} alt="city" />
              <span className="FeaturedProject-PriceBadge">From <b>GBP 3600</b></span>
            </div>
            <div className="FeaturedProject-Content">
              <div className="FeaturedProject-Text">
                <h4>Ontario Tower , LONDON</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="FeaturedProject-Funde FeaturedProject-Funde_percents_10">
                <div className="FeaturedProject-FundeScale"></div>
                <div className="FeaturedProject-FundeValues">8 Days Left</div>
              </div>
              <a href="#2" className="FeaturedProject-ProjectDetails">
                See Project Details
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Reviews">
        <header className="Reviews-Header">
          <h2>Be Part of a Growing International Community</h2>
          <p>One of the challenges in networking is everybody thinks it's making cold calls to strangers. Actually, it's the people who already have strong trust relationships with you</p>
        </header>
        <div className="Reviews-List">
          <div className="Review">
            <div className="Review-MessageShape">
              <div className="Review-Message">
                <h3>One of the Best</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="Review-Person">
              <div className="Review-PersonImgContainer">
                <img src={person1} alt="David Beckham" />
              </div>
              <span>David Beckham</span>
            </div>
          </div>
          <div className="Review">
            <div className="Review-MessageShape">
              <div className="Review-Message">
                <h3>Exellent Service </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="Review-Person">
              <div className="Review-PersonImgContainer">
                <img src={person2} alt="David Beckham" />
              </div>
              <span>David Beckham</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;
