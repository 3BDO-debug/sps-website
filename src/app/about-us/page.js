// sectoins
import Intro from "@/sections/aboutUsPage/Intro";
// mui
import { Box } from "@mui/material";
// assets
import bg from "../../../public/bg.png";
import Feedback from "@/sections/aboutUsPage/Feedback";
import VideoReview from "@/sections/aboutUsPage/VideoReview";

function page() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Intro />
      <Feedback />
      <VideoReview />
    </Box>
  );
}

export default page;
