import React from 'react'
import TagList from '../Component/TagList_temp'
import PostList from '../Component/PostList';

const Home = () => {
  return (
    
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:flex-row">
     <PostList />
     <TagList />
      
    </div>
  )
}

export default Home