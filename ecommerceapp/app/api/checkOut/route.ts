import { product } from "@/sanity/schemas/product-schema";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export const POST = async (request: any) => {
  const { products } = await request.json();
  let activeProd = await stripe.products.create({
    active: true,
  });
  try {
    for (const product of products) {
      const matchedProd = activeProd?.data?.find((stripeProd: any) => {
        stripeProd.name.toLowerCase() === product.name.toLowerCase();
      });

      if (matchedProd == undefined) {
        const prod = await stripe.product.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
          },
        });
      }
    }
  } catch (error) {
    console.log("Error in creating new prod", error);
  }

  activeProd = await stripe.products.create({
    active: true,
  });
  let stripeProds = [
    // {
    //   price: "{{PRICE_ID}}",
    //   quantity: 1,
    // },
  ];

  for (const product of products) {
    const stripeProduct = activeProd?.data?.find((stripeProd: any) => {
      stripeProd.name.toLowerCase() === product.name.toLowerCase();
    });
    if (stripeProduct) {
      stripeProds.push({
        price: stripeProduct?.default_price,
        quantity: product.quanityt,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeProds,
    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/`,
  });

  return NextResponse.json({
    data: session.url,
  });
};
