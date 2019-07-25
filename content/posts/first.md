---
title: "Writing In Markdown"
description: "Markdown post content stress test. See how your post content is being styled with Tailwind CSS."
date: 2019-05-23
---

### Problem:
Over the past few months, I've toyed with the idea of starting a simple blog, with random thoughts, cool stuff I've found on the internet, etc. My biggest issue so far has been settling on a static website/blog generator framework.

Some things that I look for in a framework are:

1. Minimal design or an easy to apply minimal theme
2. Markdown support
3. Quick, easy deployments

I tried using some of the popular frameworks like Hugo and Jekyll, but with complex build processes and many dependencies, I knew it was way more than I needed.

### Solution:
Why, I made my own of course!

My Python minimal blog generator certainly doesn't have many of the features of the bigger static site generators, but it does exactly what I need.

The writing and deployment process looks something like this:

1. Write the new post in Markdown, with a Python config header section to define post properties.
    ```
    [post]
    title:The Search for a Simple Blog
    status:live
    date:11/15/2017
    =====

    ### Problem:
    Over the past few months, I've toyed with the idea of starting a simple blog, with random thoughts, cool stuff I've found on the internet, etc. My biggest issue so far has been settling on a static website/blog generator framework.
    ```
2. Run the generator script.
3. Commit and push the whole repo to GitHub, where it is then pulled by Netlify and deployed automatically.

### Comments:
Over the past year or so, I've started many small projects, but like many others, they never seem to make to completion. This generator and the blog in general will be a good motivator to help me complete and document my work.