import underConstruction1Url from "../assets/images/under-construction-1.gif";
import underConstruction2Url from "../assets/images/under-construction-2.gif";
import underConstruction3Url from "../assets/images/under-construction-3.gif";
import underConstruction4Url from "../assets/images/under-construction-4.gif";
import underConstruction5Url from "../assets/images/under-construction-5.gif";
import underConstruction6Url from "../assets/images/under-construction-6.gif";
import underConstruction7Url from "../assets/images/under-construction-7.gif";
import underConstruction8Url from "../assets/images/under-construction-8.gif";
import underConstruction9Url from "../assets/images/under-construction-9.gif";

export default function UnderConstruction() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <img src={underConstruction1Url} aria-hidden="true" className="h-8" />
      <img src={underConstruction2Url} aria-hidden="true" className="h-9" />
      <img src={underConstruction3Url} aria-hidden="true" className="w-20" />
      <img src={underConstruction4Url} aria-hidden="true" className="h-5" />
      <img src={underConstruction5Url} aria-hidden="true" className="h-56" />
      <img src={underConstruction6Url} aria-hidden="true" className="h-60" />
      <img src={underConstruction7Url} aria-hidden="true" className="h-10" />
      <img src={underConstruction8Url} aria-hidden="true" className="h-16" />
      <img src={underConstruction9Url} aria-hidden="true" className="h-24" />
    </div>
  );
}
