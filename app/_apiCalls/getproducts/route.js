// import { NextResponse, NextRequest } from "next/server";
// import Category from "@/lib/models/category.model";
// import Product from "@/lib/models/product.model";

// export async function GET(category) {
//     console.log('finding products...')
//     const result =  await Category.findOne({name:category}).populate({
//         path: 'products'
//     })
//     if (!result.products) {
//         result.products = []
//     }
//     return NextResponse.json({data:result.products})
// }

// export async function GET(category, restaurant) {
//   console.log("finding products...");
//   const products = await Product.find({
//     $expr: {
//       $or: [{ $eq: [restaurant, "$location"] }, { $eq: ["both", "$location"] }],
//     },
//   }).populate({
//     path: "categoryId",
//     match: { name: { $eq: category } },
//   });
//   const newProducts = products.filter((item) => item.categoryId);
//   return NextResponse.json({ data: newProducts });
// }
