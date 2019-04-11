<script>
alert("123");
Shopify.Checkout.OrderStatus.addContentBox(
    '<h2>Pick-up in store</h2>',
    '<p>{{ order.order_number }}We are open everyday from 9am to 5pm.</p>'
)
</script>