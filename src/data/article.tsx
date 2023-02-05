import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from "../assets"

export type ArticleType = {
    id: number,
    author: string,
    title: string,
    content: string,
    image: string,
    createAt: string
}

export const articles: ArticleType[] = [
    {
        id: 0,
        author: "Admin",
        title: "Mexico: A Culinary Journey",
        content: FakeContent(blog1),
        image: blog1,
        createAt: "Nov 29, 2022 - 1 min"
    },
    {
        id: 1,
        author: "Admin",
        title: "5 Tips For Budget Travelers",
        content: FakeContent(blog2),
        image: blog2,
        createAt: "Nov 29, 2022 - 1 min"
    },
    {
        id: 2,
        author: "Admin",
        title: "Lessons From a Digital Nomad",
        content: FakeContent(blog3),
        image: blog3,
        createAt: "Nov 29, 2022 - 1 min"
    },
    {
        id: 3,
        author: "Admin",
        title: "The Most Amazing Diving Spots",
        content: FakeContent(blog4),
        image: blog4,
        createAt: "Nov 29, 2022 - 1 min"
    },
    {
        id: 4,
        author: "Admin",
        title: "5 Food Markets Around The World",
        content: FakeContent(blog8),
        image: blog8,
        createAt: "Nov 29, 2022 - 1 min"
    },
    {
        id: 5,
        author: "Admin",
        title: "Top Hikes In Australia",
        content: FakeContent(blog6),
        image: blog6,
        createAt: "Nov 29, 2022 - 1 min"
    },
    {
        id: 6,
        author: "Admin",
        title: "Asia Trip: Off the Beaten Path",
        content: FakeContent(blog7),
        image: blog7,
        createAt: "Nov 29, 2022 - 1 min"
    },
    {
        id: 7,
        author: "Admin",
        title: "Top Hikes In Australia",
        content: FakeContent(blog5),
        image: blog5,
        createAt: "Nov 29, 2022 - 1 min"
    },
]


function FakeContent(img: string) {
    return `
        <h4>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</h4>
        <img src=${img} alt="blog image" />
        <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </p>
        <blockquote>Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.</blockquote>
        <p>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.</p>
        <h4>Create Relevant Content</h4>
        <p>Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. </p>
        <p>Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.</p>
    `
}