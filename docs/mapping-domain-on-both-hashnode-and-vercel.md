---
id: mapping-domain-on-both-hashnode-and-vercel
title: How to add my domain to both Vercel and Hashnode
---

Hashnode uses Vercel to manage custom domains. This means if you add a custom domain on Hashnode, and later try to use the same domain on Vercel, you will see an error.

For example, if you have added `blog.foo.bar` on Hashnode, you may not be able to use `foo.bar` on Vercel. Please follow the steps below to fix this:

1. Remove the custom domain `blog.foo.bar` from Hashnode.
2. Add `foo.bar` on Vercel.
3. Come back to Hashnode, and add `blog.foo.bar`.
4. You will get a confirmation email from Vercel to delegate the control of `blog.foo.bar` to Hashnode. Just click on it, and confirm.
5. Hashnode will now be able to issue SSL for your custom domain, and serve it as usual.
