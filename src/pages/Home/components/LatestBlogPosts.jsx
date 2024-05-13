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
              <Link>05/24 - Aute Iure</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link>04/24 - Excepteur Sint</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link>03/24 - Anim id Est</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
