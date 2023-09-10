import mongoose,  {Schema} from "mongoose";

const productSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
      image:{
        type: Array,
        required:true
      },
      price :{
        type: Number, 
        required:true
      },
      description: {
          type: String, 
          required: true
      },
      location: {
        type: String,
        required:true
      }
    },
    {
      timestamps: true,
    }
  );

const Product = mongoose.models.Product || mongoose.model('Product',productSchema)

export default Product