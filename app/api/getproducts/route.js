import { NextResponse, NextRequest  } from "next/server";
import Category from "@/lib/models/category.model";
import Product from "@/lib/models/product.model";

export async function GET(NextRequest) {
    console.log('finding products...')
    console.log(NextRequest.url)
    const url = new URL(NextRequest.url)
    const category = url.searchParams.get('category')
    console.log(category)
    const result =  await Category.findOne({name:category}).populate({
        path: 'products'
    })
    return NextResponse.json({data:result.products})
}