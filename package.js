Package.describe({
  summary: "Stripe.js for Meteor",
  version: "0.1",
  name: "grove:stripe.js",
  git: "https://github.com/grovelabs/meteor-stripe.js.git"
});

Package.onUse(function (api) {
  api.addFiles('stripe.js', 'client');
});
