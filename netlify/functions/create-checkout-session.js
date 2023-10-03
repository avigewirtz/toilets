//  const stripe = require("stripe")("sk_test_51NuR0LB1tqdkd8US28H2tVA892GHkHcXmYDRYcjH7N4Lx2jZUSV7twnvKGALCnjtusmhCHerNmaASntH739JgYUZ00q2yFzfyL");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Check HTTP method
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Check if STRIPE_SECRET_KEY is set (Note: This is not strictly necessary if you're hardcoding your secret key as you did above)
  if (!process.env.STRIPE_SECRET_KEY) {
    return { statusCode: 500, body: "STRIPE_SECRET_KEY not set" };
  }

  // Parse amount from request body
  let amount;
  try {
    ({ amount } = JSON.parse(event.body));
  } catch (err) {
    return {
      statusCode: 400,
      body: `Invalid request body: ${err.message}`,
    };
  }

  // Validate amount
  if (!amount || typeof amount !== "number") {
    return { statusCode: 400, body: "Invalid amount" };
  }

  // Create Stripe session
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Your Product",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://johnnyanytime/orderConfirm",
      cancel_url: "https://johnnyanytime/cart",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (err) {
    console.error('Stripe error:', err);  // Log the complete error object to server logs
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
        type: err.type,
        code: err.code,
        param: err.param,
      }),
    };
  }
};
