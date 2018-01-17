webpackJsonp([0x81b8806e4260],{406:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Trevor Richardson",description:"Thoughts on life & crafting software",url:"https://trevorrichardson.me",author:"richardson-trevor",twitter:"IntelXDesign"}},remark:{posts:[{post:{html:"<p>To be honest, I ended up here through being asked to present at the local Des Moines JavaScript user group. I wanted to be able to point people to a place where they can find me. The easiest way to do that for a bunch of developers is to point to a webpage. So, here I am. I think it’s a good thing, and I’m glad this kicked me over the edge to get started. We’ll see where it goes.</p>\n<p>I tend to think a lot. I plan to make this where I put those thoughts. If I think I have something actually useful, I may find a better way to communicate that out, but for now this will primarily be a place for me to brain dump and take notes on what I’m up to.</p>\n<p>The topics I’ll likely cover will be in the realm of software engineering (emphasis on craftsmanship), being a dad, and being a Christian in today’s society. If you’re interested in any or all of these, excellent.</p>\n<p>Craft on.</p>",frontmatter:{layout:"post",title:"Why this blog",path:"/articles/why-start",categories:["BRAND"],description:"This article touches on why I am starting.",date:"2017/10/16"}}},{post:{html:"",frontmatter:{layout:"post",title:"Choosing a task manager",path:"/articles/task-managers",categories:["PRODUCTIVITY","DRAFT"],description:"I discuss some of the task managers that I've tried, what I've liked, and what I've disliked about each.",date:"2017/10/16"}}},{post:{html:"<p>This is the content of the first blog (test) on the website.</p>",frontmatter:{layout:"post",title:"Hello World!",path:"/articles/hello-world",categories:["TESTS"],description:"This is a test first blog article.",date:"2017/10/11"}}},{post:{html:'<h1>Visual Studio</h1>\n<p>The first IDE I got experience with was Visual Studio Professional Edition as a student at the university. We were doing C++ development, so this made for a nice editor. At the time, I didn’t see the value of the refactoring tools that I saw in the IDE so I never used them. To be honest, I’m guessing they’ve got some nice stuff in there, but I never did dig in to get familiar with them. I primarily used it as a text editor that had some very imporessive autocompletion. To my experience, it was some of the best I have seen to date. Props to Microsoft in that regard.</p>\n<h1>IntelliJ / Webstorm</h1>\n<p>The second IDE I used was Jetbrains IntelliJ. I used it primarily for Scala, but also for Java. At this same time, I had a ton of people around me that were power users in regard to keyboard shortcuts and refactoring. This REALLY opened up my eyes to what could be done with a typed language and a good IDE. I haven’t found anything outside Jetbrains products that have the refactoring support that all of their tools do. The shortcuts to pull out a method and have all it’s args figured out dynamically was and is wonderful. This is the one thing I have found that may someday push me back to Jetbrains products away from Vim. I am still a huge fan of IntelliJ and Webstorm, but a little over a month ago decided to switch over to using Vim, as I’ll explain below.</p>\n<h1>Vim</h1>\n<p>The primary motivation for moving to Vim was the thought of open source, lightweight tools. Tools that would force me to learn the native tools that the OS gives me (in my case I’m a Mac OS user). I had always wanted to get familiar and felt like I show know the likes of grep, awk, etc. because they are generally available anywhere. There’s something in this that feels empowering. The inner ‘hacker’ has to love the idea of being able to have your same tools no matter what devide you sit on. Sure, you can purchase IntelliJ / Visual Studio on most devices, but the thought of using what for the most part comes out of the box on some major OSs is a huge win in my mind. So, that left me to change over to Vim.</p>\n<p>I wanted to start out with bare bones vim and see what additions I would need to make my list of ‘must-haves’ that I used all the time in other IDEs:</p>\n<ul>\n<li>Extract variables</li>\n<li>Rename variables</li>\n<li>Find all references to a given attribute / method</li>\n<li>Open files through search</li>\n</ul>\n<p>So, where I’m at.</p>\n<h2>Extract variables</h2>\n<p>If you have a situation like the following:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">method</span><span class="token punctuation">(</span><span class="token string">&apos;arg1&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>there are often situations when you want to pull out <code>arg1</code> into a variable like:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> arg1 <span class="token operator">=</span> <span class="token string">&apos;arg1&apos;</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>There is a native Vim way to do this. Select your quoted <code>arg1</code> using whatever visual selection shortcuts you want, then <code>&#x3C;c></code> then type your variable name <code>arg1</code>. At this point, you think you’re stuck and you’ll have to manually extract the var, but you don’t. Hop up to the line above and type <code>const</code> then <code>&#x3C;Ctrl-a></code> will paste in the last thing you typed, which was the variable name. next, finish this out by typing <code>=</code> then <code>&#x3C;p></code> to paste what you had originally captured with <code>&#x3C;c></code>. Seems like a lot, I know, but this gets to be really straightforward once you get the hang of the different pieces and use them in other contexts as well.</p>\n<p>What I really liked about this was that it didn’t require  plugin at all. It’s pure Vim. Win.</p>\n<h2>Rename variable</h2>\n<p>This was one of the first sets of plugins I used. For this I use a combination of <a href="https://github.com/ternjs/tern_for_vim">tern for vim</a> and <a href="https://github.com/Valloric/YouCompleteMe">YouCompleteMe</a>. Once installed, these will allow you to do things like <code>:YcmCompleter RefactorRename NEW_NAME</code> to rename the variable under the cursor. This combination of plugins also allows find all references, find definition if your cursor is over a function or variable. So, even though this was a little bit heavy-weight and thus not ideal, I felt the tradeoffs were worth it. I’m still not fully happy with the variable reference finding and definition resolving in ES6 JavaScript, but the support is supposedly there. Should I figure that out, I’ll try to get a post up saying how to do that and will link from here.</p>\n<h2>Find all references</h2>\n<p>See Refactor Rename explanation. This is a part of the combination of tern.js and YouCompleteMe.</p>\n<h2>Open files through search</h2>\n<p>So for this I originally started out by watching <a href="https://www.youtube.com/watch?v=XA2WjJbmmoM">a video on using vim without plugins</a>. You essentially set your path for vim to <code>**/*</code> so that it searches everything from your current directory on down. While this did work, and I stuck with it for 3-4 weeks, I was never able to make it as fast as I wanted. I tried lots of path limiting with wildignore, etc. but none seemed to speed it up. For this, I eneded up with the <a href="https://github.com/ctrlpvim/ctrlp.vim">Ctrl-P</a> plugin. This worked wonderfully out of the box, and I’ve been really happy with it thus far.</p>\n<h1>Summary</h1>\n<p>Although I am not fully happy with where I’m at with Vim, I can honestly say I have liked the move and have no currently plans to move back to Jetbrains products. The mindset behind the use of Vim is something I really appreciate, and it also drives some good habits in learning small tools to become powerful, wich I really like. I will say again, though, the one thing that may take me back to other products will be the refactoring support. Primarily the extraction of methods. However, thus far the pain caused by the lack of that functionality has not been enough to drive me to change. Should I find a good solution for this in Vim I will be sure to link here.</p>\n<p>Craft on.</p>',frontmatter:{layout:"post",title:"To Vim or Not to Vim",path:"/articles/using-vim",categories:["DEVELOPMENT"],description:"In this article I talk about my transition from Jetbrains products to Vim for software development.",date:"2017/10/24"}}},{post:{html:"<p>Over the last couple of days I’ve had the thought come to mind that I do a lot of what I’ll call striving. My wife and I often talk about the things we plan to do, the things we’re looking forward to, the things we would do, etc. My take away is often “you should make more” or “you should find a way to provide more than you do”. All of this has a condemning nature to it in my world. In a way, I start beating myself up about why we can’t do those things yet. Don’t get me wrong, there’s some great benefit to being driven and motivated to grow and build. God put it in us from the start. He literally set us out into the world as early as Adam and said “take care of this”. The unhealthy part comes in when it takes away from how content I am in the present.</p>\n<p>At first thougt a lot of it in my head comes down to wanting what other people have. It’s hard to not want some of the cool stuff you see. Again, there’s really nothing inherently wrong with this, it’s all about the extent to which it motivates or condemns. In reality, I’m certain what we have right now on our acreage is more than the overwhelming majority of the populace even a hundred years go. Potentially even today. But hey, air conditioning and a heated house and multiple bedrooms are must-haves, right? We have to have those. Expectations and norms change. As soon as we have something, we’re used to it. Hm. This is life, though.</p>\n<p>It makes me think of Job. The book of Job is pretty crazy. He’s literally had everything stripped from him, yet he praises God for just giving him life. I have no idea where he was at in life at that point and what things were like in practicality for him. Was he just very disciplined? Was he mad? Was he truly still joyful? It seems a mix of all of it can be found. What do we take of it? God was proud of him the whole time. He knew Job would stick through it. This is a characteristic that’s hard to find. Not only was he devoted in the good times, but he stayed devoted in the bad. He was ever confident where he was at in God’s eyes. Very cool.</p>\n<p>Back to ground zero. Are we going to be any happier if the things we’re striving for come? Not likely. There are certain conveniences that would be nice, but for the most part we’ll be used to the changes in a short time and be back to striving for the next thing. It really comes down to the things that will stick with us. Relationships, family, and craft are some at the top of my intellectual list if you would ask me. Do I carry this out in my day-to-day? Nope. I don’t have many friends. I’m an introvert by nature, so it’s much easier for me to hole up and enjoy a night in. I put a ton of mental energy into how to make the next move in business. Much more time than it deserves is put into this.</p>\n<p>So what to do. The biggest thing for me is remembering where I’m at. Remembering what I’m shooting for, and being willing to dig in a get after exactly those things. Much easier said than done, but very much worth persuing.</p>\n<p>Craft on.</p>",frontmatter:{layout:"post",title:"All the wealth in the world",path:"/articles/all-the-wealth",categories:["LIFE","STRIVING"],description:"Recent thoughts I've had on wealth and striving.",date:"2017/10/18"}}},{post:{html:"<p><em>Title: Good to Great</em>\n<em>Author: Jim Collins</em></p>\n<p>The book starts out giving some pretty strict credentials for what is thought of as a “Good to Great” company. A few of them are:</p>\n<ul>\n<li>First Who, then What</li>\n<li>Level 5 Leadership</li>\n<li>The Flywheel</li>\n<li>Hedgehog Concept</li>\n</ul>\n<h2>First Who, then What</h2>\n<p>This is all about getting the right people on board before you worry about finding the “right” product to make. He argues and backs the idea that most companies who did well did not worry so much about choosing the correct market right away, rather they focussed on getting people on board for the shared mission. Doing so takes away or mitigates concerns about keeping people motivated. He argues that if you get the right people on board this is a non-issue. You shouldn’t have to motivate, rather if you have people that share your vision, passion, and ethic, that takes care of itself.</p>\n<h2>Level 5 Leadership</h2>\n<p>The CEO is a humble, hard-working, dedicated person that has come from inside the company and slowly worked their way up. They are the type that, asked how they drove the company to its success, will almost assuredly reply “it was the people around me”. Though humble, they are hard-drivers. They expect hard work, but they also live a good life. He doesn’t say these are people that forgo their families in an effort to get rich by working all the time. He notes many who have at-home hobbies that they consistently attend to. The core comes back to having people around that you trust so that you don’t feel you have to do the work. You know the work is getting done by getting these people around you.</p>\n<h2>The Flywheel</h2>\n<p>Long story short, “get rich quick” doesn’t work. Slowly apply and drive progress bit by bit, but toward a goal. That is key. Knowing your hedgehog concept (described in the next section) is where this is at. Steady growth and development always.</p>\n<h2>Hedgehog Concept</h2>\n<p>The analogy here comes from a story that in which a hedgehog is constantly annoyed by a predator. Each and every day the predator (much more powerful in a human’s eyes like a fox) comes back and tries to attack it, and each and every day the hedgehog uses its go-to method of defense (flaring its quills) to make the fox go away. The high level concept is that we need one driving motivation that is at the lifeblood of the company. Decisions, meetings, they all come back to this as the core place to point. The concept needs to be an overlap of three chracteristics:</p>\n<ul>\n<li>You are passionate about it</li>\n<li>You can be the best in the world at it</li>\n<li>A measurement that drives the companies “engine” (profit per customer, etc.)</li>\n</ul>\n<h1>Summary</h1>\n<p>The major take away for me in this book was that the little things make all the difference. Shocker, right? But honestly, Collins shows that it was never the rockstar CEO but rather the person that climbed the ladder from inside. It was never the “get rich quick” schemes. It was never “motivating the employees” through quick motivational speakers or schemes. It was never paying more to “bring in the talent”. It was all the things we think of as boring stuff. Character and integrity come to mind. This is what it takes.</p>\n<p>Craft on.</p>",frontmatter:{layout:"post",title:"Book Review: Good to Great",path:"/articles/good-to-great",categories:["BUSINESS","REVIEW"],description:"My thoughts on the Jim Collins book entitled Good to Great.",date:"2017/10/17"}}},{post:{html:'<p>I was pointed to this book after a breif RFC from a friend wondering if anyone had recommendations for books on REST that weren’t just theory. Most suggested you need to learn by doing, which I agree with for the most part, but I also feel some theory is important to understand the big picture. This book was a perfect mix of both.</p>\n<p>The continuing app that is being built in the book is one of a coffee shop and the API (the baristas / servers / cashiers) it would take to run the place  The book instills the <a href="https://martinfowler.com/articles/richardsonMaturityModel.html">Richardson Maturity Model</a> from beginning to end, building up the coffee shop app with the different levels as a way to explain the benefits / tradeoffs of each level.</p>\n<p>The primary takeways I have are:</p>\n<ul>\n<li>A greater instilled mindset that resources should be thought of as such. Web resources can be acted on. By using something like RPC we aren’t using the web in the way the web works at scale. It can be done (and in some cases maybe should be done) but this is a different situation than ‘designing for the web’.</li>\n<li>Using RESTful concepts can lead to many free benefits from the way the web works. If we use GET in a way that is always safe from side effects, we can leverage web caching from middlewares that we may or may not even control. We have control over many of these potential free benefits by the response as well as <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching">request headers available for caching manipulation</a>. This was a topic I had never gotten into much, but this book does a great job of covering.</li>\n</ul>',frontmatter:{layout:null,title:"REST in Practice",path:"/articles/rest-in-practice",categories:["REVIEW"],description:"REST in Practice is one of the better tech books I&#x27;ve read. It was a nice mix of implementation and theory, of which I haven&#x27;t seen done this well very often.",date:"2017/12/07"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-f47bae5b72d086f69ba7.js.map