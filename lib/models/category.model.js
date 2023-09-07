import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
  },
  products: {
    type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
