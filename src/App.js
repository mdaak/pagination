import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(20);

  // get corrent post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost)  
  useEffect(()=>{
    const fetchPosts = async()=>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setPost(res.data);
      setLoading(false);
    }
    fetchPosts()
  },[])
  console.log(post)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='App'>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={post.length}
      paginate = {paginate}
      />
     alamin
    </div>
  );
}

export default App;
