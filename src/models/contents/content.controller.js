import Content from "./content.model";

export const getAllContents = async (req, res) => {
  try {
    return res.status(200).json({
      contents: await Content.find({})
    });
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: `Error while getting contents of the list, ${error}`
    });
  }
};
