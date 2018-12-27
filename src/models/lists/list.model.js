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

export default mongoose.model("Lists", ListSchema);
