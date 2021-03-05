---
id: mapping-domain
title: Setup Custom Domain
---

When you create your Hashnode blog, we provide a free **yourdomain.hashnode.dev** subdomain for you. However, you can set up your own **yourdomain.tld** domain or **blog.yourdomain.tld** subdomain to your Hashnode blog.

In this guide, you will learn how to accomplish this alongside some additional specific guides for different domain DNS providers.

---

1. Log in to your Hashnode account.

2. Click on your **profile picture** at the bottom-left corner of the page on *desktop* screen or top-right corner on *mobile* screen.

![Hashnode's Feed](https://cdn.hashnode.com/res/hashnode/image/upload/v1614932849541/cBNDGKXMj.png?auto=compress)

3. Click on the **Blog Dashboard** option from the popup modal to access your blog's dashboard.

![Hashnode's Feed](https://cdn.hashnode.com/res/hashnode/image/upload/v1614937218081/InvxVHXDy.png?auto=compress)

4. Navigate to the **DOMAIN** tab and enter your domain without the **www** or **https://** prefix in the text field provided. Then click on the **Update** button to proceed.

![Hashnode's Blog Domain Tab](https://cdn.hashnode.com/res/hashnode/image/upload/v1614937377176/0cwddAywO.png?auto=compress)

5. If your DNS provider supports CNAME record, head over to your DNS provider and add a **CNAME record** where the hostname is **@**, and the corresponding value is **hashnode.network**. This CNAME record will point your domain or subdomain to Hashnode's IP address.

![Hashnode CNAME](https://cdn.hashnode.com/res/hashnode/image/upload/v1611129787591/FS5aU9ZC5.png?auto=compress)

> It's not recommended to use the CNAME record at the root level (e.g., **yourdomain.tld**) unless your DNS provider supports [CNAME flattening](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root) as this will affect your domain's MX records and email service.

6. If your DNS provider does not support CNAME flattening, add an **A record** at the root whose value is **192.241.200.144**. However, you will lose the benefits of our global CDN and edge caching with this approach.

![Hashnode A record](https://cdn.hashnode.com/res/hashnode/image/upload/v1611129845211/FqAlp-zMZ.png?auto=compress)

---

Here is how to setup custom domain for your Hashnode blog using the most popular DNS providers:

- [NameCheap guide](mapping-namecheap)
- [Cloudflare guide](mapping-cloudflare)
- [GoDaddy guide](mapping-godaddyx)

---

Still not sure if your DNS provider supports CNAME flattering or when to use CNAME or A record? Here is a quick summary to guide you:

- If you are setting up a domain at the root level (e.g., yourdomain.tld**), and your DNS provider supports CNAME flattening, **use a CNAME record**.
- If you are setting up a root domain and your DNS provider does not support CNAME flattening, **use an A record**.
- If you set up a sub-domain (e.g., **blog.yourdomain.tld**), **use a CNAME record** without any worries.

| DNS Provider                   | Supports CNAME Flattering | Use CNAME Record (Root) | Use A Record (Root) |
|--------------------------------|---------------------------|-------------------------|---------------------|
| Namecheap                      | No                        | -                       | ✅                  |
| Cloudflare                      | Yes                       | ✅                      | -                   |
| GoDaddy                        | No                        | -                       | ✅                  |
| OpenDNS                        | No                        | -                       | ✅                  |
| Oracle Dyn Managed DNS         | No                        | -                       | ✅                  |
| Cisco Umbrella                 | No                        | -                       | ✅                  |
| Amazon Route 53                | No                        | -                       | ✅                  |
| Google Cloud DNS               | No                        | -                       | ✅                  |
| IBM Domain Name Services (DNS) | Yes                       | ✅                      | -                   |
| Azure DNS                      | Yes                       | ✅                      | -                   |