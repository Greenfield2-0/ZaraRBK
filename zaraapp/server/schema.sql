SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` ;
USE `zara` ;
-- -----------------------------------------------------
-- Table `zara`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `userlastname` VARCHAR(255) NOT NULL,
  `useremail` VARCHAR(255) NOT NULL,
  `userpw` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `uniq_useremail` (`useremail`)
);
-- -----------------------------------------------------
-- Table `zara`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`products` (
  `productid` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(255) NOT NULL,
  `productprice` INT NOT NULL,
  `productquantity` INT NOT NULL,
  `productcolor` VARCHAR(255) NOT NULL,
  `productcategory` VARCHAR(255) NOT NULL,
  `productsub-category` VARCHAR(255) NOT NULL,
  `productsub-sub-category` VARCHAR(255) NOT NULL,
  `productimage` VARCHAR(400) NOT NULL,
  `orderid` INT NOT NULL,
  PRIMARY KEY (`productid`),
  INDEX (`orderid` ASC) VISIBLE,
  CONSTRAINT `fk_products_user`
    FOREIGN KEY (`orderid`)
    REFERENCES `zara`.`orders`(`orderid`)
);

CREATE TABLE IF NOT EXISTS `zara`.`orders` (
  `orderid` INT NOT NULL AUTO_INCREMENT,
  `orderdate` INT NOT NULL,
  `userid` INT NOT NULL,
  PRIMARY KEY (`orderid`),
  UNIQUE KEY `uniq_userid` (`userid`),
  CONSTRAINT `fk_orders_user`
    FOREIGN KEY (`userid`)
    REFERENCES `zara`.`users` (`userid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
INSERT INTO `users` (`username`, `userlastname`, `useremail`, `userpw`) 
VALUES 
  ('amrou', 'aln', 'amrou@gmail.com', 'password123'),
  ('sabrine', 'gsr', 'sabrine@gmail.com', 'password456');

  -- Inserting orders
INSERT INTO `orders` (`orderdate`, `userid`) 
VALUES 
  (UNIX_TIMESTAMP(), 1),
  (UNIX_TIMESTAMP(), 2);

INSERT INTO `products` (`productname`, `productprice`, `productquantity`, `productcolor`, `productcategory`, `productsub-category`, `productsub-sub-category`, `productimage`, `orderid`) 
VALUES 
  ('SHAWL LAPEL BLAZER', 299, 10, 'BLACK', 'WOMAN', 'BLAZER', 'OVERSIZE', 'https://static.zara.net/photos///2023/V/0/1/p/2761/240/800/15/w/730/2761240800_2_1_1.jpg?ts=1672608969680', 1),
  ('LONG DOUBLE-BREASTED BLAZER',299,3,'WHITE','WOMAN','BLAZER','DOUBLE-BREASTED','https://static.zara.net/photos///2023/V/0/1/p/2422/724/406/2/w/750/2422724406_1_1_1.jpg?ts=1679329374642',2),
  ('Skirt zara', 20, 3, 'Blue', 'Women', 'Skirt', 'mini', 'image2.jpg', 1),
  ('Jean zara', 15, 2, 'Green', 'Men', 'Jeans', 'slim', 'image3.jpg', 2),
  ('T-shirt zara', 25, 4, 'Yellow', 'Men','T-shirts', 'sleevless',  'image4.jpg', 2);


