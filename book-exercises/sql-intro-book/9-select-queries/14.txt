SELECT customer_name, customer_email, customer_loyalty_points
FROM orders
WHERE customer_loyalty_points >= 20
ORDER BY customer_loyalty_points DESC;
