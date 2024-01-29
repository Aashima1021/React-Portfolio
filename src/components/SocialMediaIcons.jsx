
import linkedinimg from "../assets/linkedin.png"
import twitterimge from "../assets/twitter.png"
import fbimg from '../assets/facebook.png'
import instaimg from "../assets/instagram.png"




const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/aashima-bansal-b750b3180/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedinimg} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={twitterimge}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500 text-xl "
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="" alt="github-link" src={fbimg} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://instagram.com/travel_with_aashima?igshid=MzMyNGUyNmU2YQ== "
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instaimg} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
  