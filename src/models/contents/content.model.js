import mongoose, { Schema } from "mongoose";

const ContentSchema = new Schema({
  title: {
    type: String,
    required: [true, "Give title to your new list content"]
  },
  quantity: {
    type: Number
  },
  list: {
    type: Schema.Types.ObjectId,
    ref: "Lists"
  }
});

export default mongoose.model("Content", ContentSchema);
