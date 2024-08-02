import { useEffect, useState } from "react";
import fetchData from "../../apis/apiMethods";
import APIS from "../../apis/apiEndpoints";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const getStartPage = (currentPage) => {
    const start = currentPage * recordsPerPage - recordsPerPage;
    return `?_start=${start}&_limit=${recordsPerPage}`;
  };

  const handleNext = async () => {
    setCurrentPage((currentPage) => currentPage + 1);
    const dynamicUrl = getStartPage(currentPage + 1);
    const postsRes = await fetchData(APIS.POSTS + dynamicUrl);
    setPosts(postsRes);
  };

  const handlePrevios = async () => {
    setCurrentPage(currentPage - 1);
    const dynamicUrl = getStartPage(currentPage - 1);
    const postsRes = await fetchData(APIS.POSTS + dynamicUrl);
    setPosts(postsRes);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const dynamicUrl = getStartPage(1);
      const data = await fetchData(APIS.POSTS + dynamicUrl);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h4>Posts</h4>
      {posts?.length > 0 ? (
        posts.map((post) => {
          return (
            <div className="d-flex" key={post.id}>
              <div>{post.id}</div>
              <div>{post.title}</div>
            </div>
          );
        })
      ) : (
        <div>No Posts</div>
      )}
      {currentPage > 1 && (
        <button onClick={handlePrevios} className="btn btn-primary m-2">
          Previous
        </button>
      )}
      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
