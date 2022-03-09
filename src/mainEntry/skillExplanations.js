
import { SiJavascript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiReactrouter } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiWebpack } from "react-icons/si";
import { SiW3C } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTerminalBoxFill } from "react-icons/ri";
import { SiSass } from "react-icons/si";

const htmlStrong = <strong> Why not rate myself at 10? </strong>
const jsLink = <a href="https://www.udemy.com/course/modern-javascript/">a deep-dive course</a>
const vmLink = <a href="https://leddfoot-test.herokuapp.com/">Oh SH!T! is my vinmonopolet still open?!?</a> 
const disclaimer = <strong> Unfortunately, demand for workers with this specific skillset in nearly null. </strong> 

const skillExplanations = [
        
    { id: 1, 
        title: 'Html', 
        icon: <ImHtmlFive className="skill-icon" />,
        rating: 8,
        description: [`I feel comfortable working with HTML. Haven't encountered much that intimidates me here.`, htmlStrong ,` It seems that there are some more advanced concepts that I haven't uncovered. However, if unearthed they shouldn't create problems. Everything else HTML related has been fairly self-explanatory.`] 
    },
    { id: 2, 
        title: 'CSS',
        icon: <SiCsswizardry className="skill-icon" />, 
        rating: 7,
        description: [`CSS taught me a lesson in humility. I taught myself and kept encountering mystery problems that I couldn't seem to overcome. Or used some "hacky" solution to fix things and was nearly afraid to change anything because the house of cards may come crumbling down. I took a quick course on CSS, and I'm glad I did. Now I can style confidently and understand what I am doing. For example I preferred just using id selectors because of their specificity they usually applied. Now I used mostly combinators instead because the course explained that id selectors are computated expensively. I still find working with images to be a bit of a pain, even after understanding the difference between background and regular images.`]
    },
    { id: 3, 
        title: 'Javascript', 
        icon: <SiJavascript className="skill-icon" />,
        rating: 8,
        description: [`I'll be honest. The first time around I thought that I was much more skilled than I actually was. I tried build a site called WTF@!(Where's the fish at), using JS and react. This experience humbled me. I also began reading "You don't know JS," which only further confirmed my need to bolster my JS skills. I took `, jsLink, ` , and learned alot. After that, I focused on developing a vanilla website, `, vmLink, ' that was a little complex. I want to get even better, and maybe even apply some JS skills in node. I rate this skill at an 8 because I have now written ten thousands of lines of code in it. I am comfortable whereever I wind up in JS, although I still spend some time on MDN making sure that I am setting up whatever properly. There is room for growth, and still a lot of work left before I rate myself a ten here']
    },
    { id: 4, 
        title: 'Web Accessibility', 
        icon: <SiW3C className="skill-icon" />,
        rating: 10,
        description: [`This is my specialty. I earned a masters degree focused specifically on accessibility. More specifically focused on design and usability implications for a mobile application for users with reading impairments. I designed a prototype application for the NLB (it was technically changes and improvements for their existing mobile audiobook application), who services for example both blind and dyslexic readers.`, disclaimer, `While developing my prototype, I had to learn about everything frontend, and found that I love it. I will be a successful professional frontend developer.`]
    },
    { id: 5, 
        title: 'React', 
        icon: <GrReactjs className="skill-icon" />,
        rating: 4,
        description: ['I may be a little over cautious rating my skills at only a four in React. I feel comfortable especially when using non class-based components and hooks. The hooks however, need more time and effort before I am totally comfortable with them. I also have only had limited to exposure to the "older" style react where many class based components were used. I understand constructors and binding ie:  this.something = this.something.bind(this), but it still does not come naturally to me and I often spend time looking at examples to the side to get it right. I can usually eventually solve whatever react problem I have, but sometimes it may be a little slow. Therefore the low rating here']
    },
    { id: 6, 
        title: 'React Router', 
        icon: <SiReactrouter className="skill-icon" />,
        rating: 8,
        description: ['I have used this many times. There was nothing particularly troubling with implementing it. Just wrap the app with it, set the default path, the not found path, and all of the other paths. However, I am sure that Router can do more than just that, that is why I am giving an 8 here to allow two points for the unknown router capabilities that I have yet to encounter.']
    },
    { id: 7, 
        title: 'WebPack',
        icon: <SiWebpack className="skill-icon" />,
        rating: 4, 
        description: ['I use webpack with nearly anything I develop, although recently it has been mostly the webpack that is build into create-react-app. I like just saving changes and getting a hot reload. That way I see errors rather quickly as I go along and do not have to spend much time searching for an error. I can and have before set up Webpack from scratch. The only time that I failed at setting up webpack to do what I needed, was when I tried to setup a script that runs a server and the page I am developing simultaneously. I bailed on that and just ran then from two consoles instead, becuase the time savings was substantial doing it that way. I still get a bit slow and have to follow the setup sort of line for line when setting up webpack manually, therefore the score of only 4']
    },
    { id: 8, 
        title: 'Node', 
        icon: <DiNodejs className="skill-icon node" />,
        rating: 2,
        description: ['Node really interests me, despite my lack of skills there. I have managed to setup a simple express server, to get around a cors problem I encountered when developing ', vmLink, '. I want to further my skills so as to be able to develop the full stack and connect a site to a proper database. And be able to develop other "backend" gadgets. Just not there yet. I know that Node is capable of way more than I have knowledge of or skills with, therefore the low 2 rating. This skill will be increased in the future.' ]
    },
    { id: 9, 
        title: 'Git',
        icon: <FaGitAlt className="skill-icon" />,
        rating: 5, 
        description: ['I use git every day and have a good grasp of it. However, I am pushing, pulling, and maintaining mostly my own repositories. I will have to sharpen my skills before I give myself a higher rating here. I remember being a little befuddled when trying to submit a pull request to Deichman.no, and had to ask for explanation about rebasing. I think I could quickly improve my skills here if working in a larger environment where the repository is not mine.']
    },
    { id: 10, 
        title: 'Terminal',
        icon: <RiTerminalBoxFill className="skill-icon" />, 
        rating: 5,
        description: ['The terminal in VScode editor is almost nearly always open. It gives me early warning from webpack or create-react-app or the linter when I am doing something wrong. I have used the terminal since before Windows and guis existed. That being said I mainly use it for NPM.']
    },
    { id: 11, 
        title: 'Sass',
        icon: <SiSass className="skill-icon" />, 
        rating: 1,
        description: ['I used Sass quite a bit in the past. I rate it at a meager one because it has been quite a while since I have used it. However, I feel that I could quickly regain my skills if necessary.']
    },
]

export default skillExplanations;