import React from "react";

import Home from "./Home";
import TaskCategories from "./TaskCategories";
import OtherJobs from "./OtherJobs";
import MeetTasker from "./MeetTasker";
import ThingsToKnow from "./ThingsToKnow";
import Articles from "./Articles";
import TopCategories from "./TopCategories";
import Footer from "./Footer";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        article:
        [
          {
            id: 1,
            articleImg: require("../../assets/article-bedroom.png"),
            articleTitle: "40 Wonderfully white bedroom ideas",
            articleContent:
              "Gone are the days of boring, stuffy white bedrooms. Infuse light and life into your space with pops of colour and boho touches.",
          },
          {
            id: 2,
            articleImg: require("../../assets/article-bedroom-black.png"),
            articleTitle: "35+ Black and white bedroom ideas",
            articleContent:
              "Renovating your bedroom? You simply can’t go wrong with this classic colour pairing.",
          },
          {
           id: 3,
            articleImg: require("../../assets/article-curtain.png"),
            articleTitle: "35 Modern bedroom curtain ideas",
            articleContent:
              "It’s time to ditch the old musty curtains and frame your windows with something beautiful.",
          },
        ],

        tasker: [
          {
            img: {
              taskerImg: require("../../assets/tasker-samantha.png"),
            },
            profile: {
              name: "Samantha",
              spec: "Specialities: assembly, pet care, gardening",
              details:
                "Returning to the workforce as a single mum, Sam had to find something that could be flexible and cover the cost of childcare.",
              stars: "4.9 stars from 185 review",
              reviews:
                "Very nice and caring in trying circumstances! Thanks again",
              viewer: "---Tim S.",
            },
          },
          {
            img: {
              taskerImg: require("../../assets/tasker-Emily.png"),
            },
            profile: {
              name: "Emily",
              spec: "Specialities: delivery, cleaning, packing",
              details:
                "In-between jobs, Emily was looking for a way to earn some extra cash... Maybe even using her clown school skills!",
              stars: "5 stars from 6 reviews",
              reviews:
                "She was an absolute lifesaver. Quick, friendly and super efficient!",
              viewer: "---Myles B.",
            },
          },
          {
            img: {
              taskerImg: require("../../assets/tasker-Brandon.png"),
            },
            profile: {
              name: "Brandan",
              spec:
                "She was an absolute lifesaver. Quick, friendly and super efficient!",
              details:
                "A sparky by trade, Brendon jumped onboard when he went back to studying. Here's how Airtasker fit in with his busy lifestyle...",
              stars: "5 stars from 6 reviews",
              reviews:
                "Nice work and will use Brendon again if any other lighting task",
              viewer: "---Steven Z.",
            },
          },
        ],

      
    };
  }

  render() {
    return (
      <>
      <Home />
      <TaskCategories />
      <OtherJobs />
      <TopCategories />
      <MeetTasker data={this.state.tasker}/>
      <ThingsToKnow />
      <Articles data={this.state.article}/>
      <Footer />
    </>
    );
  }
}

export default Landing;
