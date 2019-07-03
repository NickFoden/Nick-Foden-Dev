import Cards from "../images/cards.png"
import FodenDev from "../images/fodenDev.png"
import Icon from "../images/theiconorg.png"
import Sustain from "../images/sustain.png"
import Wallplay from "../images/wallplay.png"
import UseReact from "../images/useReactNYC.png"

export default [
  {
    id: "1",
    image: Wallplay,
    title: "wallplay network",
    subTitle: "A marketplace for pop-up experiences",
    summary:
      "2 React SPA's. A public facing platform and an internal cms for editing the content, managing the projects, the spaces and the users and their profiles. Wrapping the apps in session HOC's to ensure appropriate auth for routing, organizing database structure and writing the rules to enforce security.",
    siteLink: "https://wallplay.com/",
    sourceLink: "",
  },
  {
    id: "2",
    image: Icon,
    title: "Industrial & Commerical Operations Network",
    subTitle: "The definitive tool for energy professionals",
    summary:
      "A platform for Energy Utility information and compliance in the UK. The platform keeps users up to date on latest Energy news, allows them to check they are compliant with the current and future regulations and chat in forums about Energy issues.",
    siteLink: "https://theicon.org.uk/",
    sourceLink: "",
  },
  {
    id: "3",
    image: Sustain,
    title: "Sustain Investing",
    subTitle: "A community-driven investment fund",
    summary:
      "Formed a company with few like minded individuals, where users are voting on the sustainablity of public companies actions under a context of a few different lenses. I built the community platform for web and the (near approved) React Native app for AppStore/GooglePlay.",
    siteLink: "https://app.sustaininvesting.com/",
    sourceLink: "",
  },
  {
    id: "4",
    image: UseReact,
    title: "useReactNYC",
    subTitle: "Website 2.0 for NY's newest and most exciting React Meetup",
    summary:
      "The organizers of Use React NYC reached out to the commmunity for assistance with the revamp of the website over to a new Gatsby site configured in Typescript. Working from a design mock and a folder of shared assets, I put up multiple PR's adding sections to the site.",
    siteLink: "https://usereact.nyc/",
    sourceLink: "https://github.com/usereactnyc/usereact.nyc",
  },
  {
    id: "5",
    image: FodenDev,
    title: "Foden Dev Blog",
    subTitle: "Blogging up in here",
    summary:
      "Myself and 2 of my cousins in other countries are working in web dev, and I started this blog as a way for us all to blog what we learn and share with the web. More posts to come. Many more.",
    siteLink: "https://foden.dev/",
    sourceLink: "https://github.com/NickFoden/foden-dev-blog",
  },
  {
    id: "5",
    image: Cards,
    title: "Cards",
    subTitle: "Node + Pug JavaScript methods flashcards app",
    summary:
      "This node app project is supported by a mongo db at mLab and the code is deployed on HEROKU. PassportJS handle user authentication and if they are succesfully logged in then users have option to add more cards.",
    siteLink: " https://cards-js.herokuapp.com/",
    sourceLink: "https://github.com/NickFoden/cards-pug",
  },
]
