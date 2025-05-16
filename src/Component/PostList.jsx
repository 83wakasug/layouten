import React from 'react'
import Post from './Post'; 

const PostList = () => {
    const list = [
      {title:"This is the Post title1",body:"The post body1"},
      {title:"This is the Post title2",body:"The post body2"},
      {title:"This is the Post title3",body:"The post body3"}

    ];
      

  return (
    <div className="flex flex-col  space-y-5  ml-4">
    {list.map((item, i) => (
      <Post key={i} title={item.title} body={item.body} />
    ))}
  </div>
);
}

export default PostList