import Lists from "./list.model";

export const createList = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      error: true,
      message: "Give a sutaible name to your shopping list"
    });
  }

  const list = new Lists({ name });

  try {
    return res.status(200).json({
      error: false,
      list: await list.save()
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: `Error when creating new list: ${error}`
    });
  }
};

export const getAllLists = async (req, res) => {
  try {
    return res.status(200).json({
      error: false,
      lists: await Lists.find({})
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: `Error while getting all list: ${error}`
    });
  }
};
