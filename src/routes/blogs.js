import { getAllBlog, getBlogBySlug } from "../services/directus.js";

import Router from "@koa/router";

const router = new Router({
  prefix: "/api/blogs",
});

router.get("/", async (ctx) => {
  try {
    const blogs = await getAllBlog();

    ctx.body = {
      success: true,
      data: blogs,
    };
  } catch (error) {
    ctx.body = {
      success: false,
      data: error.message || "Internal Server error in fetching data",
    };
  }
});
router.get("/:slug", async (ctx) => {
  try {
    const { slug } = ctx.params;
    const blog = await getBlogBySlug(slug);
    if (blog) {
      ctx.body = {
        success: true,
        data: blog,
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        success: false,
        message: `Blog post with slug "${slug}" not found.`,
      };
    }
  } catch (error) {
    ctx.body = {
      success: false,
      data: error.message || "Internal Server error in fetching data",
    };
  }
});

export default router;
