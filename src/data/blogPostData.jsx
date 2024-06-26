import Page from "../utils/Page";
import FirstPost from "../pages/blogs/14-05-24-first-post";
import TheReactArcContinues from "../pages/blogs/29-05-24-the-react-arc-continues";
import TheBackendArc from "../pages/blogs/17-06-24-the-backend-arc";

export default [
  new Page("14/05/24 - First Post", "/blog/14-05-24-first-post", <FirstPost />),
  new Page(
    "29/05/24 - The React Arc Continues",
    "/blog/29-05-24-the-react-arc-continues",
    <TheReactArcContinues />
  ),
  new Page(
    "17/06/24 - The Backend Arc",
    "/blog/17-06-24-the-backend-arc",
    <TheBackendArc />
  ),
];
