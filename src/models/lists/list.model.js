import mongoose, { Schema } from "mongoose";

const ListSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    contents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Content"
      }
    ]
  },
  {
    timestamps: true
  }
);

ListSchema.statics.addContent = async function(id, args) {
  const Content = mongoose.model("Content");
  const content = await new Content({ ...args, list: id });
  const list = await this.findByIdAndUpdate(id, {
    $push: { contents: content.id }
  });

  return {
    list,
    content: await content.save()
  };
};

export default mongoose.model("Lists", ListSchema);
