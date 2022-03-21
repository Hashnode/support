---
id: create-team-blog
title: Create a Team Blog
---

### Hassle-free blogs for fast-growing teams!

**An end-to-end blogging platform for devtools, engineering, and open-source teams. Map the blog to your company's domain or any custom domain!**

Creators from the top tech teams choose Hashnode to publish their content. You're in good company.

![Companies logos](http://localhost:8080/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1647512010724%2FRY3K506gu.png%3Fauto%3Dcompress&w=3840&q=75)

---

## How to create a team blog on Hashnode:

1. Log into your Hashnode account.

2. Click on the **Dropdown button** beside the "Write button" on the Hashnode header.

![Hashnode's Feed](https://cdn.hashnode.com/res/hashnode/image/upload/v1647855676958/0Nstu9S0P.png?auto=compress)

3. Click on the **Start a team blog** option from the dropdown menu.

4. Decide the blog's destination. Hashnode gives you a sub-domain for free forever. If you intend to use hashnode.dev as your company's blog, enter your company's name in the input field. For ex: enter `google` for `google.hashnode.dev`. **Skip to step 9.** If you want to map a custom domain, proceed to step 5.

![Hashnode onboarding screenshot for teams](https://cdn.hashnode.com/res/hashnode/image/upload/v1647850630031/ssK3rX4Ko.png?auto=compress)

5. If you want to map a custom domain, click on **"Map my custom domain"**.

6. Enter your company's sub-domain or a new custom domain on this screen.

![Hashnode onboarding - map a custom domain screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1647850859209/jsmHJu1KB.png?auto=compress)

7. Head over to your DNS provider (the website that controls your domain name) and add a CNAME record where the hostname is `@` and the corresponding value is `hashnode.network`. We'll automatically provision an SSL certificate for you when you visit your blog for the first time.  <br/><br/>
*If you are using something like Cloudflare, please bypass it for this domain.*  <br/><br/>
**💡 PS:** It's not recommended to use CNAME record at root level. However, please make sure your DNS provider supports [CNAME flattening](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/) if you want to do it. If you are still unable to add CNAME at root, you can add an `A` record at the root whose value is `76.76.21.21`.

![Hashnode onboarding - custom domain DNS settings screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1647851015217/qIEN7Hoiq.png?auto=compress)

8. Click on "I've added the records".

9. **"You're all set".** Congrats! You've successfully created a blog. We’ll scan for your domain name and provision an SSL certificate automatically for free. Usually DNS propagation happens quickly. However, it may take up to 24 hours in the worst case.

![Hashnode onboarding final screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1647851482307/l7_fvI4cw.png?auto=compress)

10. Head over to the blog dashboard by appending `/dashboard` to the blog URL. If it's your first time visiting your blog, you need to login to your blog using the Hashnode account. This takes less than a second. Click on the "Sign in" button present inside the Dropdown menu in the blog header. 

![Hashnode blog screenshot](https://cdn.hashnode.com/res/hashnode/image/upload/v1647851265161/noyE_Nk9M.png?auto=compress)

