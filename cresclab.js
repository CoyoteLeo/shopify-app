var v = "{{ order.order_number }}";
Shopify.Checkout.OrderStatus.addContentBox(
    '<h2>' + v + 'Pick-up in store</h2>',
    '<p>We are open everyday from 9am to 5pm.</p>'
);