import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import profileimage from "../assets/logo.png";

const Home = () => {
  // with  object
  const amimations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...amimations.h1}>
            Hi I Am <br /> Gagan Tirpude
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor: "",
            }}
          />

          <div>
            <a href="mailto:gagan@gmail.com">Here Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +<span>100</span>
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +<span>500</span>
              </p>
              <span>Project Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>officail_gagan@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={profileimage} alt="gagan" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
