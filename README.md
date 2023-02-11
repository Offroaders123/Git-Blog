# Git-Blog

A statically-generated site setup that showcases your programming growth from your Git commit history!

This isn't actually working, yet, but I got something started initially, at least. The plan is to make a statically-generated site that is essentially a blog-like page, which is built from you commit messages on your GitHub profile.

I want to be able to have a blog, without having to specifically make a blog. I already write my commits with a lot of cool and great stories to keep track of, so it would be awesome to have a nice way to showcase those, more easily to other people (outside of my code-land).

I could also use this to more visually keep track of my open source contributions, to see which days I have done a lot of work on. I plan to show all of my commit contributions in order, as-is across all of my repos and projects. Then rather than seeing only that I contributed to one of my repos a fair amount one day, I can also see that I did 5 other commits in my other repo over there too, making it more of a timeline in a way.

Going to use TypeScript, and a modern Front End setup for this project, as my goal. Not going to take the vanilla route like my other projects. Looking to hopefully envolve React, Vite, and possibly Tailwind CSS, as I haven't looked into using that yet.

Since this will most likely end up relying on the Octokit API, I will simply use it to build the site before I make any updates to it, and it will use that stored data from the build to then load the site from, after that. It sounds like Octokit has a rate limit of 60 requests per day, so I can't make it fully live-updating, since that would be too bulky, and it would exceed the rate limit.

While writing this, I realized this will actually work fairly nicely, since the Octokit REST API simply returns plain JSON, and that can be stored very nicely in a site build. Maybe I can use NBTify and ZLIB to store the data extra small! That's a super awesome and overboard idea, I love it.

I think a Virtual Scroll kind of implementation will probably be used for this, as it will be like an article/blog-based site, which will need to responsively load the different articles on the home page, having all of them load at once won't be necessary, since there are gonna be a TON of articles, since they are the commits for ALL of projects.

I guess, eventually this will also be an article that you are reading on the site itself! Well, actually this is the README. Maybe I'll somehow add this in there too. Not sure.