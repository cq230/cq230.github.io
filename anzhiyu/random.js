var posts=["posts/80c02825.html","posts/9a542ee1.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };