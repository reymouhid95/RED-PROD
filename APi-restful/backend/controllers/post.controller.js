const PostModel = require("../models/post.models");

module.exports.getPosts = async (req, res) => {
  const post = await PostModel.find();
  res.status(200).json(post);
};
module.exports.setPosts = async (req, res) => {
  if (!req.body.message || !req.body.author) {
    res
      .status(400)
      .json({ message: "Merci de fournir à la fois le message et l'auteur" });
    return;
  }

  try {
    const post = await PostModel.create({
      message: req.body.message,
      author: req.body.author,
    });

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création du post" });
  }
};

module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce poste n'existe pas!" });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json({ updatePost });
};

module.exports.deletePost = async (req, res) => {
  const post = await PostModel.deleteOne({ _id: req.params.id });

  if (!post) {
    res.status(400).json({ message: "Ce poste n'existe pas!" });
  }

  res.status(200).json("Message supprimmé");
};

module.exports.likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.dislikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};
