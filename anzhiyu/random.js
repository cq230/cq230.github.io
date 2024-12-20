var posts=["posts/9a542ee1.html","posts/4a17b156.html","posts/4d40bec4.html","posts/d449ef7e.html","posts/3a478e52.html","posts/d3242b67.html","posts/4a2d7add.html","posts/cd52de3f.html","posts/ba55eea9.html","posts/545b8f85.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };