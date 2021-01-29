---
id: mapping-cloudfare
title: Mapping Domain From Cloudflare
---

Cloudflare is a free CDN that protects against threats such as SQL injection and identity theft. It improves site performance and speeds up loading times by using multiple data centers that are located around the world.

Cloudflare makes mapping a domain to Hashnode easier because it supports CNAME Flattening, which allows you to create a CNAME record at the root level.

This document explains how to map a domain to Hashnode through Cloudflare.

## Create an account on Cloudflare

Here is how to create an account on Cloudflare:

1.  Go to [cloudflare.com](https://townhall.hashnode.com/cloudflare.com)
2.  Click on the Sign Up button at the top-right corner of the page on your desktop screen or the Hamburger menu > Sign Up button at the top-right corner of the page on your mobile screen.

![Sign Up button](https://i.imgur.com/hdf1e1g.png)

3.  On the sign-up page, enter your preferred email address and password.

![Create an account page](https://i.imgur.com/RdqHOFe.png)

4.  Click on the Create Account button to complete the account creation process.

After creating your [cloudflare](https://townhall.hashnode.com/cloudflare.com) account. You will be redirected to Cloudflare's Add Site page, where you will be required to enter the domain you want to map to Hashnode using Cloudflare.

## How to map the domain to Hashnode through Cloudflare

The steps below explain the entire process of mapping a domain to Hashnode through Cloudflare.

1. On Cloudflare's Add Site page, enter your root domain. For instance, if your website is `www.edidiongasikpo.com`, enter `edidiongasikpo.com` into the input field.

![Add your address](https://i.imgur.com/kGrjQaQ.png)

2. Click on the Add site button to enable Cloudflare to validate your domain.

3. After Cloudflare has validated your domain, you will be redirected to Cloudflare's payment page.

![Select a plan](https://i.imgur.com/NMmH2oA.png)

4. Here, select the Free plan and click on the Confirm plan button.

> Cloudflare will scan through the root domain you added for DNS records and import it automatically into your Cloudflare configuration.

5. When the scan is completed, your DNS records (if available) will appear on your screen. Go through the imported DNS records to confirm if they've been identified correctly. If they've not been added, you can manually add the missing DNS records.

6. To add Hashnode's DNS record, click on the Add record button.

![Hashnode's DNS record](https://i.imgur.com/yDTyUW1.png)

7. In the input field, add the details below:

| Type | Name | Target | TTL | Proxy Status |
| --- | --- | --- | --- | --- |
| CNAME | @ | hashnode.network | Auto | DNS Only |

This is what your DNS record should look like:

![DNS record](https://i.imgur.com/ixHuEI4.png)

> The Proxy status must be DNS Only. To ensure it is DNS only, click on the orange cloud icon (proxy enabled). Once you click on the orange cloud icon, it will automatically change to a grey cloud icon (DNS only).

Crosscheck that everything is correct and click on the **Save** button.

8. At this point, you've successfully mapped your domain to Hashnode through Cloudflare. But you need to do one more thing to enable Cloudflare to manage your DNS records. So, click on the Continue button to proceed.

![Proceed button](https://i.imgur.com/wLQkCpM.png)

## Enable Cloudflare to manage your DNS records

By allowing Cloudflare to manage your DNS records, you gain access to the different benefits that Cloudflare offers and optimize your site.

Here's how to enable Cloudflare to manage your DNS records.

1.  Log into your registrar account. In my case [namecheap.com](https://townhall.hashnode.com/namecheap.com).
2.  Remove your current nameservers.
3.  Replace it with Cloudflare's nameservers. Cloudflare will provide the nameserver for you. In my case, it was `daniella.ns.cloudflare.com` and `fred.ns.cloudflare.com`
4.  Click on the Save button to complete the update.
5.  You will receive an email when the nameservers associated with your domain has been updated.

> Registrars (In my case, Namecheap) typically process nameserver update with 24 hours.

You can use any DNS Propagation Checker of your choice to check the current state of your DNS propagation.
