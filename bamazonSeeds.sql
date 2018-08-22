DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NULL,
  department_name VARCHAR(255) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("TCL 4K TV", 999.99, "electronics", 100), ("Chuck It Dog Frisbee", 19.99, "pet", 50), ("Toshiba Sound Bar", 199.99, "electronics", 80), ("Chuck It Dog Frisbee", 19.99, "pet", 50), ("GermGuardian 3-in-1 Pet Pure True HEPA Air Purifier", 169.95, "home appliance", 20), ("Eureka AirSpeed Unlimited Pet", 99.99, "home appliance", 30), ("IKEA SODERHAMN", 599.00, "home furniture", 5), ("Mr. Coffee Pump Espresso Maker", 99.00, "home furniture", 25), ("Nvidia GeForce 1080 TI", 595.00, "electronics", 15), ("1 BTC", 6446.00, "technology", 1), ("Refirbished Samsung Galaxy S7", 299.99, "electonics", 5), ("LIFX Z (Starter Kit) Wi-Fi Smart LED Light Strip ", 89.99, "electonics", 7), ("The Gravity Blanket", 249.00, "bedding", 7);
