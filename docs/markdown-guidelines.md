---
id: markdown-guidelines
title: Markdown Guidelines
---


Hashnode's Editor supports simple markdown and some unique tags for embeds.

This guide will help you create rich posts on Hashnode using markdown.

---

## Headers

Hashnode supports Atx-style headers. Use the 1-6 hash characters at the start of a line, corresponding to header levels H1 to H6. For example:

# This is Heading 1
## This is Heading 2
### This is Heading 3
#### This is Heading 4
##### This is Heading 5
###### This is Heading 6

## Embeds

Hashnode uses Embed.ly to support all kinds of embed on the platform. You DON'T have to paste the platform-specific embed code. Just follow the following syntax, and the magic will happen.

```
%[Paste link to embed]

//Embed Tweets
%[https://twitter.com/hashnode/status/1080795453115920384?s=20]

//Embed YouTube Videos
%[https://www.youtube.com/watch?v=vAKtNV8KcWg]

//Embed Github Repo
%[https://github.com/hashnode/hashnode-cli]

//Embed Codepen
%[https://codepen.io/zephyo/pen/MZbLwV]

//Embed Glitch
%[https://glitch.com/edit/#!/lithium-battery-recycling]

//Embed Soundcloud
%[https://soundcloud.com/androidauthority/024-prime-day-shmimeday]

//Embed any article on the web or website
%[https://hashnode.com]
```

## Code Snippets

### Inline code

Use the Grave accent keys **`** for the inline code snippets. In QWERTY keypads, this key can be written using Ctrl + 1.

```
This is a normal sentence with `console.log("yeah!")` in it.
```

The above will output the following:

This is a normal sentence with `console.log("yeah!")` in it.

### Block code

Wrap the code blocks with tripple Grave accent keys. **```** for showing big blocks of code in your content. For example:

```
if (isServer && user) {
    store.userStore.currentUser = user;
}
```

The above will look like:

```
if (isServer && user) {
    store.userStore.currentUser = user;
}
```

Hashnode supports generic code highlighting. This will be applied to the code blocks after you publish the content.

You can select which highlighting to use manually by appending the code language after the beginning Tripple Grave accent keys like so **```javascript**.

## Text Formatting

**Bold:** Wrap the text with double asterisks `**` to make it a **bold text**. We will wrap the text with the `<strong>` tag while parsing.

*Italics:* Wrap the text with single asterisks character `*` to make the text *italics*. We will wrap the text with the `<em>` tag while parsing.

The bold and italics markdown syntax works inside almost any block-level element, like Quotes, Lists, Inline code, etc.

## Quotes

Use the greater than sign to format a text as a quote. For example:

> Where there is a will, there is a way!
Where there is a will, there is a way!

## Links

I'm an inline hyperlink: `[Click here to signup](put-link-here).`

## Inline Images

Use Hashnode's image uploader to upload your image to Hashnode CDN or fetch the URL of the image uploaded elsewhere.

![Hashnode Uploader](https://cdn.hashnode.com/res/hashnode/image/upload/v1547978025630/SkGNSabX4.png)

`![Alt text of image](put-link-to-image-here)`

## Tables

Use the markdown format below to add a table into your article on Hashnode.

```
| I |HI |Hey|
|---|---|---|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |
```

## Math Equations

With Latext support on Hashnode, you can now add mathematical equations to your articles. Here are some examples:

```
$$
\lim\limits_{x \to \infty} \exp(-x) = 0
$$

---

$$
\cos (2\theta) = \cos^2 \theta - \sin^2 \theta
$$

---

$$ \left[
\begin{array}{cc|c}
  1&2&3\\\\
  4&5&6
\end{array}
\right] $$

```

![Latex examples](https://cdn.hashnode.com/res/hashnode/image/upload/v1609225790772/bwECSA7u4.png)

