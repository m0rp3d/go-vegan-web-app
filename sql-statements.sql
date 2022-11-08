CREATE USER 'vstoreowner'@'localhost' IDENTIFIED BY 'vstoreowner';

GRANT ALL PRIVILEGES ON * . * TO 'vstoreowner'@'localhost';

ALTER USER 'vstoreowner'@'localhost' IDENTIFIED WITH mysql_native_password BY 'vstoreowner';

DROP SCHEMA IF EXISTS `go-vegan-storage`;

CREATE SCHEMA `go-vegan-storage`;


--Table `go-vegan-storage`.`food_category`


USE `go-vegan-storage` ;

CREATE TABLE IF NOT EXISTS `food_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `food_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- Table `go-vegan-storage`.`food_item`


USE `go-vegan-storage` ;

CREATE TABLE IF NOT EXISTS `food_item` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  `weight` VARCHAR(255) DEFAULT NULL,
  `serving` VARCHAR(255) DEFAULT NULL,
  `price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `calories` INT(8) DEFAULT NULL,
  `protein` INT(8) DEFAULT NULL,
  `saturated_fat` INT(8) DEFAULT NULL,
  `trans_fat` INT(8) DEFAULT NULL,
  `cholesterol` INT(8) DEFAULT NULL,
  `fiber` INT(8) DEFAULT NULL,
  `sugars` INT(8) DEFAULT NULL,
  `vitamin_a` INT(8) DEFAULT NULL,
  `vitamin_b12` INT(8) DEFAULT NULL,
  `vitamin_c` INT(8) DEFAULT NULL,
  `vitamin_d` INT(8) DEFAULT NULL,
  `vitamin_k` INT(8) DEFAULT NULL,
  `omega_3` INT(8) DEFAULT NULL,
  `sodium` INT(8) DEFAULT NULL,
  `calcium` INT(8) DEFAULT NULL,
  `iron` INT(8) DEFAULT NULL,
  `potassium` INT(8) DEFAULT NULL,
  `zinc` INT(8) DEFAULT NULL,
  `iodine` INT(8) DEFAULT NULL,
  `item_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fd_category` (`item_id`),
  CONSTRAINT `fd_category` FOREIGN KEY (`item_id`) REFERENCES `food_category` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

INSERT INTO food_category(food_name) VALUES ('Legumes'), ('Grains'), ('Fruits'), ('Vegetables'),  ('Nuts and Seeds'), ('Dairy Substitutes'),
 ('Meat Substitutes');


INSERT INTO food_item(name, weight, serving, price, image_url, calories, protein, saturated_fat, trans_fat, cholesterol, fiber,
 sugars, vitamin_a, vitamin_b12, vitamin_c, vitamin_d, vitamin_k, omega_3, sodium, calcium, iron, potassium, zinc, iodine, item_id) VALUES 
 ('Sweet Peas', '15 ounce', '1/2 cup', 1.63, 'assets/images/foodItem/SweetPeas.png', 50, 3, 0, 0, 0, 14, 5, 0, 0, 0, 0, 0, 0, 13, 0, 6, 2, 0, 0, 1),
 ('Garbanzo Beans', '.97 pounds', '1/2 cup', 0.99, 'assets/images/foodItem/GarbanzoBeans.png', 120, 6, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 1),
 ('Pinto Beans', '.97 pounds', '1/2 cup', 1.19, 'assets/images/foodItem/PintoBeans.png', 110, 7, 0, 0, 0, 32, 1, 0, 0, 0, 0, 0, 0, 4, 4, 8, 8, 0, 0, 1),
 ('Black Beans', '.94 pounds', '1/2 cup', 0.89, 'assets/images/foodItem/BlackBeans.png', 120, 8, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 6, 4, 15, 8, 0, 0, 1),
 ('Lentils', '0.39 Kilograms', '1/4 cup', 1.29, 'assets/images/foodItem/Lentils.png', 70, 8, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 1);
 
 
 INSERT INTO food_item(name, weight, serving, price, image_url, calories, protein, saturated_fat, trans_fat, cholesterol, fiber,
 sugars, vitamin_a, vitamin_b12, vitamin_c, vitamin_d, vitamin_k, omega_3, sodium, calcium, iron, potassium, zinc, iodine, item_id) VALUES 
 ('Bread', '1.5 pounds', '1 slice', 3.69, 'assets/images/foodItem/Bread.png', 110, 3, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 9, 2, 6, 0, 0, 0, 2),
 ('Corn', '15 ounces', '3 oz', 1.72, 'assets/images/foodItem/Corn.png', 20, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 2),
 ('Brown Rice', '2 pounds', '1/4 cup', 3.60, 'assets/images/foodItem/BrownRice.png', 160, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2),
 ('Jasmine Rice', '2 pounds', '1/4 cup', 4.71, 'assets/images/foodItem/JasmineRice.png', 150, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2),
 ('Oats', '1.21 pounds', '1/2 cup', 2.25, 'assets/images/foodItem/Oats.png', 150, 5, 3, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 2),
 ('Quinoa', '.78 pounds', '1/4 cup', 4.63, 'assets/images/foodItem/Quinoa.png', 160, 5, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 6, 0, 0, 2);
 
 
INSERT INTO food_item(name, weight, serving, price, image_url, calories, protein, saturated_fat, trans_fat, cholesterol, fiber,
 sugars, vitamin_a, vitamin_b12, vitamin_c, vitamin_d, vitamin_k, omega_3, sodium, calcium, iron, potassium, zinc, iodine, item_id) VALUES 
 ('Apples', '1.5 ounce', '1 bag', 8.38, 'assets/images/foodItem/Apples.png', 170, 1, 0, 0, 0, 25, 7, 0, 0, 410, 0, 0, 0, 4, 0, 0, 8, 0, 0, 3),
 ('Strawberries', '1.2 ounce', '1 bag', 10.78, 'assets/images/foodItem/Strawberries.png', 140, 2, 0, 0, 0, 4, 28, 0, 0, 100, 0, 0, 0, 0, 2, 0, 10, 0, 0, 3),
 ('Avocados', '10 ounce', '1/4 cup', 3.69, 'assets/images/foodItem/Avocados.png', 50, 1, 3, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 3),
 ('Grapes', '1.2 ounce', '1 pack', 3.50, 'assets/images/foodItem/Grapes.png', 130, 6, 0, 0, 0, 45, 7, 0, 0, 0, 0, 0, 0, 0, 35, 15, 6, 0, 0, 3),
 ('Bananas', '2.5 ounce', '1 cup', 6.89, 'assets/images/foodItem/Bananas.png', 120, 1, 0, 0, 0, 4, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 3);
 
 
INSERT INTO food_item(name, weight, serving, price, image_url, calories, protein, saturated_fat, trans_fat, cholesterol, fiber,
 sugars, vitamin_a, vitamin_b12, vitamin_c, vitamin_d, vitamin_k, omega_3, sodium, calcium, iron, potassium, zinc, iodine, item_id) VALUES 
('Lettuce', '0.5 pounds', '3 ounces', 3.39, 'assets/images/foodItem/Lettuce.png', 10, 1, 0, 0, 0, 4, 2, 8, 0, 4, 0, 4, 0, 0, 2, 2, 0, 0, 0, 4), 
('Kale', '12 ounces', '1 cup', 1.39, 'assets/images/foodItem/Kale.png', 20, 2, 0, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 8, 4, 8, 0, 0, 4), 
('Carrot', '10 ounces', '1/2 cup', 3.19, 'assets/images/foodItem/Carrot.png', 23, 0, 0, 0, 0, 9, 3, 144, 0, 3, 0, 0, 0, 2, 2, 2, 0, 0, 0, 4), 
('Spinach', '0.75 pound', '1 cup', 1.49, 'assets/images/foodItem/Spinach.png', 25, 3, 0, 0, 0, 7, 1, 0, 0, 67, 0, 0, 0, 3, 8, 10, 6, 0, 0, 4), 
('Broccoli', '0.75 pounds', '1 cup', 1.39, 'assets/images/foodItem/Broccoli.png', 30, 1, 0, 0, 0, 7, 2, 0, 0, 0, 0, 0, 0, 1, 2, 2, 4, 0, 0, 4);


INSERT INTO food_item(name, weight, serving, price, image_url, calories, protein, saturated_fat, trans_fat, cholesterol, fiber,
 sugars, vitamin_a, vitamin_b12, vitamin_c, vitamin_d, vitamin_k, omega_3, sodium, calcium, iron, potassium, zinc, iodine, item_id) VALUES 
 ('Pistachios', '48 ounces', '1/2 cup', 16.98, 'assets/images/foodItem/Pistachios.png', 160, 6, 8, 0, 0, 11, 2, 0, 0, 0, 0, 0, 0, 6, 2, 6, 6, 0, 0, 5),
 ('Pumpkin Seeds', '0.52 pounds', '1/4 cup', 4.29, 'assets/images/foodItem/PumpkinSeeds.png', 160, 8, 13, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 4, 15, 0, 5),
 ('Sunflower Seeds', '5.25 ounces', '1/4 cup', 1.82, 'assets/images/foodItem/SunflowerSeeds.png', 190, 8, 9, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 123, 2, 8, 4, 0, 0, 5),
 ('Peanuts', '2.75 pounds', '1/4 cup', 5.32, 'assets/images/foodItem/Peanuts.png', 170, 8, 12, 0, 0, 9, 1, 0, 0, 0, 0, 0, 0, 4, 0, 2, 4, 0, 0, 5),
 ('Walnuts', '6 ounces', '1/4 cup', 2.46, 'assets/images/foodItem/Walnuts.png', 180, 4, 9, 0, 0, 7, 1, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 0, 0, 5),
 ('Almonds', '1.5 pounds', '1/4 cup', 9.50, 'assets/images/foodItem/Almonds.png', 170, 6, 5, 0, 0, 11, 1, 0, 0, 0, 0, 0, 0, 2, 6, 6, 4, 0, 0, 5);
 

INSERT INTO food_item(name, weight, serving, price, image_url, calories, protein, saturated_fat, trans_fat, cholesterol, fiber,
 sugars, vitamin_a, vitamin_b12, vitamin_c, vitamin_d, vitamin_k, omega_3, sodium, calcium, iron, potassium, zinc, iodine, item_id) VALUES 
 ('Dressing', '0.02 pounds', '1 tbsp', 4.99, 'assets/images/foodItem/Dressing.png', 70, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 6),
 ('Cheese', '7.05 ounces', '1 slice', 5.69, 'assets/images/foodItem/Cheese.png', 60, 0, 20, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 6),
 ('Soy Milk', '32 ounces', '1 cup', 2.48, 'assets/images/foodItem/SoyMilk.png', 110, 8, 3, 0, 0, 7, 5, 15, 120, 0, 15, 0, 0, 5, 30, 6, 8, 6, 0, 6),
 ('Coconut Milk', '1.02 pounds', '1/3 cup', 2.69, 'assets/images/foodItem/CoconutMilk.png', 140, 1, 65, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 0, 0, 6),
 ('Almond Milk', '32 ounces', '1 cup', 2.16, 'assets/images/foodItem/AlmondMilk.png', 30, 1, 0, 0, 0, 0, 0, 15, 0, 0, 10, 0, 0, 6, 30, 2, 4, 0, 0, 6);
 
 
INSERT INTO food_item(name, weight, serving, price, image_url, calories, protein, saturated_fat, trans_fat, cholesterol, fiber,
 sugars, vitamin_a, vitamin_b12, vitamin_c, vitamin_d, vitamin_k, omega_3, sodium, calcium, iron, potassium, zinc, iodine, item_id) VALUES 
 ('Chicken Patties', '10 ounces', '1 patty', 4.29, 'assets/images/foodItem/ChickenPatties.png', 130, 11, 3, 0, 0, 7, 1, 0, 0, 0, 0, 0, 0, 17, 4, 8, 6, 0, 0, 7),
 ('Chicken Nuggets', '10.5 ounces', '4 nuggets', 3.99, 'assets/images/foodItem/ChickenNuggets.png', 140, 12, 3, 0, 0, 7, 1, 0, 0, 0, 0, 0, 0, 18, 4, 10, 6, 0, 0, 7),
 ('Italian Sausages', '15 ounces', '1 sausage', 2.93, 'assets/images/foodItem/ItailanSausages.png', 180, 15, 23, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 25, 6, 10, 2, 0, 0, 7),
 ('Eggs', '12 fl oz', '3 Tbsp', 3.59, 'assets/images/foodItem/Eggs.png', 70, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7),
 ('Ground Beef', '453 grams', '4 ounces', 8.36, 'assets/images/foodItem/GroundBeef.png', 230, 20, 0, 0, 0, 7, 0, 0, 100, 0, 0, 0, 0, 17, 8, 20, 6, 40, 0, 7);
 


USE `go-vegan-storage`;



DROP TABLE IF EXISTS `order_item`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `account`;


-- Table `go-vegan-storage`.`account`

CREATE TABLE `account` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `credit_card_number` varchar(255) DEFAULT NULL,
  `credit_card_code` int(4) DEFAULT NULL,
  `credit_card_name` varchar(255) DEFAULT NULL,
  `credit_card_expiration_month` int(2) DEFAULT NULL,
  `credit_card_expiration_year` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;


-- Table `go-vegan-storage`.`orders`

CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `total_price` decimal(19,2) DEFAULT NULL,
  `total_quantity` int DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `account_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `K_account_id` (`account_id`),
  CONSTRAINT `FK_account_id` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;


-- Table `go-vegan-storage`.`order_items`

CREATE TABLE `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(19,2) DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `K_order_id` (`order_id`),
  CONSTRAINT `FK_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

USE `go-vegan-storage` ;

INSERT INTO account(first_name,
 		last_name,
 		email,
 		user_name,
 		password,
 		address, 
 		city,
 		state,
 		country,
 		zipcode,
 		credit_card_number,
 		credit_card_code,
 		credit_card_name,
 		credit_card_expiration_month,
 		credit_card_expiration_year) VALUES ('Winston', 'Smith', 'smith22@gmail.com', 'wilsonsmith22',
							  'mypassword22', '123 Scholar Roads',
 							'London', 'London State', 'United Kingdom',
							 '220220', '4422336644885500', 234, 'Winston Smith', 
							5, 2025);

INSERT INTO orders(total_price,
		total_quantity,
		date_created,
		shipping_address,
		account_id) VALUES(10.17, 3, 20220905, '123 Scholar Roads, London, United Kingdom', 1),
						  (3.37, 3, 20220909, '123 Scholar Roads, London, United Kingdom', 1);
		
INSERT INTO order_item(name, image_url, quantity, price, order_id) VALUES('Lettuce', 'assets/images/foodItem/Lettuce.png', 3, 3.39, 1),
																   ('Pinto Beans', 'assets/images/foodItem/PintoBeans.png', 1, 1.19, 2),
																   ('Black Beans', 'assets/images/foodItem/BlackBeans.png', 1, 0.89, 2),
																   ('Lentils', 'assets/images/foodItem/Lentils.png', 1, 1.29, 2);
																   