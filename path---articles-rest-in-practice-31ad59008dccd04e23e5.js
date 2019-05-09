webpackJsonp([53222572955646],{425:function(e,t){e.exports={data:{site:{meta:{title:"Trevor Richardson",description:"Thoughts on life & crafting software",url:"https://trevorrichardson.me",author:"richardson-trevor",twitter:"IntelXDesign"}},post:{id:"/Users/trevorr/Development/Home/website/src/pages/articles/2017-12-07-rest-in-practice/index.md absPath of file >>> MarkdownRemark",html:'<p>I was pointed to this book after a brief RFC from a friend wondering if anyone had recommendations for books on REST that weren’t just theory. Most suggested you need to learn by doing, which I agree with for the most part, but I also feel some theory is important to understand the big picture. This book was a perfect mix of both.</p>\n<p>The continuing app that is being built in the book is one of a coffee shop and the API (the baristas / servers / cashiers) it would take to run the place  The book instills the <a href="https://martinfowler.com/articles/richardsonMaturityModel.html">Richardson Maturity Model</a> from beginning to end, building up the coffee shop app with the different levels as a way to explain the benefits / tradeoffs of each level.</p>\n<p>The primary takeways I have are:</p>\n<ul>\n<li>A greater instilled mindset that resources should be thought of as such. Web resources can be acted on. By using something like RPC we aren’t using the web in the way the web works at scale. It can be done (and in some cases maybe should be done) but this is a different situation than ‘designing for the web’.</li>\n<li>Using RESTful concepts can lead to many free benefits from the way the web works. If we use GET in a way that is always safe from side effects, we can leverage web caching from middlewares that we may or may not even control. We have control over many of these potential free benefits by the response as well as <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching">request headers available for caching manipulation</a>. This was a topic I had never gotten into much, but this book does a great job of covering.</li>\n</ul>',frontmatter:{layout:"post",title:"REST in Practice",path:"/articles/rest-in-practice",categories:["REVIEW"],date:"2017/12/07"}}},pathContext:{path:"/articles/rest-in-practice"}}}});
//# sourceMappingURL=path---articles-rest-in-practice-31ad59008dccd04e23e5.js.map