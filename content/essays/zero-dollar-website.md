---
title: "The website costs $0 a month now"
date: "2026-07-07T12:00:00.000Z"
tags: [builds, money]
excerpt: "Four years of paying $12 USD a month for a blog server, and the static setup that replaced it."
---

So in July 2022 I wrote a whole tutorial about how to run your own blog on a $12 USD a month DigitalOcean server. I was proud of it. It had nginx configs in it. This month I moved everything off that setup, the new hosting bill is $0, and this is the story of the four years in between.

The old setup was Ghost on a virtual machine. Ghost is good software, that part was never the problem. The problem was that I had turned my writing into a server I had to run. There was a database to back up and a Linux box on the internet that was mine to patch (I run a homelab for fun, so I told myself this was fun too, and look, sometimes it was).

Here is the part nobody tells you about self-hosting your blog: the server does not care whether you are writing. Between December 2020 and June 2022 I published nothing. The droplet did not mind, it billed me $12 USD every month either way. Same story for most of 2024. I paid for the machine for about four years, which comes out to roughly $576 USD (about $790 CAD, and yes our dollar is really like that), and for long stretches of it the only thing the server was serving was my own guilt.

I want to be clear that the math was always available to me. I am the guy with the budgeting spreadsheet. I just never put this number in it, because the spreadsheet is for decisions and I had already decided the server was fine.

What changed: I rebuilt everything as two static sites. This one for the stories, and [Informal Engineer](https://informalengineer.com) for the technical procedures. Static means the pages are just files, they get built once and copied to Cloudflare's edge, there is no database and no admin panel, nothing that can go down at 2am. The old URLs from 13 years of impulse projects survive through a redirect map, which took longer to get right than the sites themselves (this is a known thing, nobody believes it until they do it).

The new bill: $0 a month for hosting on Cloudflare Pages' free tier, plus the domain renewals I was paying anyway. Publishing is a git commit. If my homelab burns down, the sites do not notice, and I say that as someone whose homelab is the single most monitored thing in the house.

The old me would probably not listen to any of this. He wanted to run a server, and the tutorial he wrote still holds up if that is the itch you have. But if the goal is writing on the internet, the answer is static files, and it took me $576 USD to be sure.
