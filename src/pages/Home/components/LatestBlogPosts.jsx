import { Link } from "react-router-dom";
import blogPostData from "../../../utils/blogPostData";

export default function LatestBlogPosts() {
  const last = blogPostData.length - 1;
  const latest = [
    blogPostData[last],
    blogPostData[last - 1],
    blogPostData[last - 2],
  ];

  return (
    <div className="sunken-panel h-72 max-w-40">
      <table className="text-wrap" id="latest-blog-posts">
        <thead className="text-xl text-center">
          <tr>
            <th>Latest Blog Posts</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          {latest.map((blogPost, index) => {
            return blogPost ? (
              <tr key={index}>
                <td>
                  <Link to={blogPost.path}>{blogPost.name}</Link>
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
}
