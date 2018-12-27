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

export const createContentOfList = async (req, res) => {
  const { title, quantity } = req.body;
  const { listId } = req.params;

  if (!listId) {
    return res.status(400).json({
      error: true,
      message: "List is missing, Give me list id!"
    });
  }

  try {
    const { content, list } = await Lists.addContent(listId, {
      title,
      quantity
    });

    return res.status(201).json({
      error: false,
      list,
      content
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: `Error while creating content for the list, ${error}`
    });
  }
};
