import { Link } from "react-router-dom";

export default function LatestBlogPosts() {
  return (
    <div className="sunken-panel h-72">
      <table className="text-wrap" id="latest-blog-posts">
        <thead className="text-xl text-center">
          <tr>
            <th>Latest Blog Posts</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr>
            <td>
              <Link to="/blog/14-05-24-first-post">14/05/24 - First Post</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
