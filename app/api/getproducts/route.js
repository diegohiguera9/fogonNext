import { NextResponse, NextRequest  } from "next/server";
import Category from "@/lib/models/category.model";
import Product from "@/lib/models/product.model";

export async function GET(category) {
    console.log('finding products...')
    const result =  await Category.findOne({name:category}).populate({
        path: 'products'
    })
    return NextResponse.json({data:result.products})
}