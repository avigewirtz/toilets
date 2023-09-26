const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Check HTTP method
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Check if STRIPE_SECRET_KEY is set
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
      success_url: "/orderConfirm",
      cancel_url: "https://your-cancel-url.com",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (err) {
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
