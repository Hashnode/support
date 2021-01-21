---
id: mapping-godaddy
title: Mapping Domain from GoDaddy
---

his section covers how to map a domain hosted or purchased on GoDaddy to Hashnode.

1. Create an account on [GoDaddy](https://www.godaddy.com/hosting). 

![GoDaddy Homepage](https://cdn.hashnode.com/res/hashnode/image/upload/v1611179630405/GdUQMW8EU.png?auto=compress)

2. Purchase your preferred domain.

3. After completing the purchase, you will be redirected to the product page. Here, you will see your domain.

![Domain name](https://cdn.hashnode.com/res/hashnode/image/upload/v1611180845987/xntjkGFbX.png?auto=compress)

4. On the domain card, click on the **Kebab menu icon** and select **Manage DNS**.

![Domain Card](https://cdn.hashnode.com/res/hashnode/image/upload/v1611179781074/zkCvOsACE.png?auto=compress)

5. Click on the **Add** button on the DNS management page to add the `A record` on your domain.

![Add Button](https://cdn.hashnode.com/res/hashnode/image/upload/v1611180996708/jNpmbSdZX.png?auto=compress)

6. Select `A` as the type, and add `@` or  `blog` as the host. Finally point it to `192.241.200.144`.

![A record](https://cdn.hashnode.com/res/hashnode/image/upload/v1611179878013/XY7ZtaCrx.png?auto=compress)

7. Click on **Save**.

> ⚠️ Domain propagation (the process whereby nameservers update across the internet to reflect a change in a domain's DNS record) takes 0 - 48 hours to fully start working in all locations across the internet. Once your domain propagates, we will automatically provision an SSL certificate for you when you visit your blog for the first time.
