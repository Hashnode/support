---
id: github-as-source
title: GitHub as source
---

### Installation

- Go to integrations tab
- Click on "Connect Hashnode App on GitHub"
- You will be taken to our app's installation page on GitHub
- Proceed to install
- Select an organisation where the repo you are trying to permit the app to have access lives on
- Make sure you have the permissions to do that, else your administator will recieve a notification and they will have to approve it.
- After proceeding with the above step, now select the repository/repositories you want our app to have access to
- Now, you will be taken back to hashnode.com where you will see the repository you selected in previous step or a list of repositories if you selected more than one in the previous step
- Once you confirm, you will be taken back to the dashboard with a respective success toast or a red error toast based on if the installation was successful

### Publishing content

Once the installation is successful, you can checkout the template repository https://github.com/Hashnode/Hashnode-source-from-github-template, copy the example post present there or, you can also clone the repo and keep it ready before you install. So that you can select the cloned repository during installation procedure

Simply create a new file, write down your content following the instructions in this doc or the README.md of the template repository and commit it.

If you want to edit the post that you just created, you can push another commit with the updated content and it should be picked up.

### Example markdown post
```
---
title: YOUR_TITLE_HERE **(Required)**
subtitle: YOUR_SUBTITLE_HERE
/* The pathname of your article url 
 * Ex. In https://engineering.hashnode.com/how-we-autodetect-spam-using-googles-vertex-ai 
   "how-we-autodetect-spam-using-googles-vertex-ai" is the slug */ 
slug: CUSTOM_ARTICLE_SLUG_HERE (Will be created automatically if not provided)
tags: TAG_SLUG_1, TAG_SLUG_2 **(Required)** - You can find the list of tags <a href="https://github.com/Hashnode/support/blob/main/misc/tags.json" className="font-bold text-brand-blue"  target="_blank">here</a>
/* You need to upload your image to https://hashnode.com/uploader 
and use the uploaded image URL as COVER_IMAGE_URL */ 
cover: COVER_IMAGE_URL
domain: YOUR_HASHNODE_BLOG_DOMAIN_NAME_HERE (e.g. sandeep.dev or sandeep.hashnode.dev) **(Required)** 
/* When you have a team publication and a publication member has created an article */ 
/* Please note that this param is only supported while creating an article and not updating */ 
publishAs: USERNAME_OF_AUTHOR_OF_ARTICLE 
/* When your article is republished and you want to use  the origin url as canonical url */ <br/>
canonical: CANONICAL_URL_OF_ARTICLE 
/* Only if you don't want this article to be published yet */ 
ignorePost: true
---

Enter article body here
```        

### Few instructions to care of

Please note: A **README.md** at the root is always ignored.

If you don't find a log in your publication dashboard on Hashnode, but have made a commit to your connected repo, then make sure

*   the file ends with .md extension, we support markdown files only.
*   you have connected the same repo as you made a commit to.
*   you added the correct blog domain in your markdown file.
*   Frontmatter: Make sure each article has these details at the top of the file.
    
### Debugging
*   Make sure you haven't included **ignorePost** in the frontmatter by mistake.
*   Uninstalling app via GitHub will remove it from all the publications that the repo was connected to. If you want to specifically remove the installation from a particular publication, do it from it's Dashboard (Integrations section).
*   Creating an article with same slug as another article in the publication will overwrite the old article.
*   Do note that maximum of 10 file changes are respected in one particular commit.


### Feedback
This feature is under active development and we plan to support as many properties as possible w.r.t to the properties available in the UI. So, we would love to hear your feedback/suggestion/feature requests. Please do let us know at https://feedback.hashnode.com