import { product } from "@/sanity/schemas/product-schema";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export const POST = async (request: any) => {
  const { products } = request.json();
  let activeProd = await stripe.products.create({
    active: true,
  });
  try {
    for (const product of products) {
      const matchedProd = activeProd?.find((stripeProd: any) => {
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
    const stripeProduct = activeProd?.find((stripeProd: any) => {
      stripeProd.name.toLowerCase() === product.name.toLowerCase();
    });
    if (stripeProduct) {
      stripeProds.push({
        price: "{{PRICE_ID}}",
        quantity: 1,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeProds,
    mode: "payment",
    success_url: ``,
    cancel_url: ``,
  });

  return NextResponse.json({
    data: "Hello World!",
  });
};
