## Stripe.js for Meteor
####[Stripe](https://stripe.com) - Payment infrastructure for the Internet

This package includes [Stripe.js](https://stripe.com/docs/stripe.js) for use on the client

### Installation

```
meteor add grove:stripejs
```


### Usage

The same as in the [docs](<https://stripe.com/docs/stripe.js>). Example for reference:

    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');

To initiate a Stripe object:

    var Stripe = StripeAPI('YOUR_SECRET_API_KEY');

And then use it:

```
Stripe.charges.create({
amount: 1000, // this is in cents, not dollars
currency: "USD",
card: {
  number: "4242424242424242", // this is the test number
  exp_month: "03",
  exp_year: "2014"
  }
}, function (error, result) {
  // Do something with the result
});
```