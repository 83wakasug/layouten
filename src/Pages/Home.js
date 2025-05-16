import React from 'react'
import TagList from '../Component/TagList_temp'
import PostList from '../Component/PostList';

const Home = () => {
  return (
    
    <div className="flex flex-row">
     <PostList />
     <TagList />
      
    </div>
  )
}

export default Home