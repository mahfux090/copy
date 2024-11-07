import Post from "../models/post.model.js";

export const addPost = async (req, res) => {
  try {
    const { img, title, content } = req.body;
    const post = await Post.findOne({ title });

    if (post) {
      return res
        .status(404)
        .json({ success: false, message: "Post already exist!" });
    }

    const newPost = await Post({
      img,
      title,
      content,
    });

    await newPost.save();

    res.status(201).json({ success: true, message: "Post added", newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const removePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);

    res.status(201).json({ success: true, message: "Post removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find({});

    if (posts) {
      return res.status(401).json({ success: false, message: "No Posts Yet!" });
    } else {
      return res.status(200).json({ success: true, posts });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    post.img = req.body.img || post.img;
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    await post.save();

    res.status(200).json({ success: true, message: "Post Updates" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
