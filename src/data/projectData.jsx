import Page from "../utils/Page";
import PersonalWebsite from "../pages/projects/PersonalWebsite";
import Studium from "../pages/projects/Studium";

export default [
  new Page(
    "Personal Website",
    "/projects/personal-website",
    <PersonalWebsite />
  ),
  new Page("Studium", "/projects/studium", <Studium />),
];
