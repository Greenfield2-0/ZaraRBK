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
  ('SHAWL LAPEL BLAZER', 299, 10, 'BLACK', 'Woman', 'BLAZER', 'OVERSIZE', 'https://static.zara.net/photos///2023/V/0/1/p/2761/240/800/15/w/730/2761240800_2_1_1.jpg?ts=1672608969680', 1),
  ('TRF WIDE-LEG MID-RISE EXTRA-LONG JEANS',149,9,'LIGHT BLUE','Woman','JEANS','Wide-leg','https://static.zara.net/photos///2023/V/0/1/p/6688/029/406/13/w/430/6688029406_1_1_1.jpg?ts=1679502261590',2),
  ('RIBBED STRAPPY VEST TOP', 36, 14, 'STRIPED', 'Woman', 'T-SHIRT', 'RIBBED', 'https://static.zara.net/photos///2023/V/0/1/p/3253/306/104/2/w/730/3253306104_1_1_1.jpg?ts=1677146757733', 1),
  ('SHIMMERY MINI CITY BAG',129, 2,'SILVER','Woman','BAGS','FANCY','https://static.zara.net/photos///2023/V/1/1/p/6281/010/909/2/w/282/6281010909_15_3_1.jpg?ts=1678116161646',2),
  ('TRANSPARENT HIGH-HEEL SANDALS',159, 4,'LIGHT BEIGE','Woman','SHOES','High-heel sandals','https://static.zara.net/photos///2022/I/1/1/p/2324/910/111/2/w/282/2324910111_2_1_1.jpg?ts=1656408025933',2),  
  ('BASIC HOODIE', 129, 6, 'BLACK', 'Men', 'BASICS', 'HOODIE', 'https://static.zara.net/photos///2023/V/0/2/p/0761/300/800/2/w/129/0761300800_15_3_1.jpg?ts=1681827749797', 2),
  ('TEXTURED CROCHET SHIRT', 179, 15, 'LIME', 'Men','SHIRTS', 'CROCHET', 'https://static.zara.net/photos///2023/V/0/1/p/1300/413/520/2/w/164/1300413520_2_1_1.jpg?ts=1684251771534', 1),
  ('SLIM FIT SUIT', 359, 3, 'BLACK', 'Men','SUITS', 'SLIM SUITING', 'https://static.zara.net/photos///2023/V/M/2/p/0000/000/802/2/w/302/0000000802_15_1_1.jpg?ts=1680610347677', 2),
  ('TIE-DYE CARGO TROUSERS', 199, 7, 'CAMEL', 'Men','CARGO', 'TIE-DYE', 'https://static.zara.net/photos///2023/V/0/2/p/2553/431/707/2/w/164/2553431707_1_1_1.jpg?ts=1675340206311', 1),
  ('TEXTURED DRESS WITH PASSEMENTERIE AND RUFFLES', 90, 4, 'WHITE', 'Kid','SUMMER CAMP','NEW' , 'https://static.zara.net/photos///2023/V/0/3/p/6462/604/250/104/w/329/6462604250_15_1_1.jpg?ts=1683532819623', 1),
  ('SMOCKED PRINTED JUMPSUIT', 119, 10, 'BROWN', 'Kid','GIRL', 'JUMPSUIT','https://static.zara.net/photos///2023/V/0/3/p/0340/600/700/2/w/213/0340600700_6_1_1.jpg?ts=1682669258355', 1),
  ('DENIM CARGO BERMUDA SHORTS', 90, 6, 'ECRU', 'Kid','BOY','SHORTS', 'https://static.zara.net/photos///2023/V/0/3/p/4110/688/712/303/w/282/4110688712_15_1_1.jpg?ts=1681898488065', 1),
  ('FLORAL EMBROIDERED TULLE DRESS', 119, 2, 'BEIGE-PINK', 'Kid','BABY-GIRL','DRESSES', 'https://static.zara.net/photos///2023/V/0/3/p/1148/359/942/202/w/282/1148359942_1_1_1.jpg?ts=1677231020820', 1),
  ('TEXTURED LEAF PRINT JUMPSUIT', 70, 9, 'ECRU', 'Kid','BABY-BOY','DUNGAREES', 'https://static.zara.net/photos///2023/V/0/3/p/6061/802/712/402/w/329/6061802712_1_1_1.jpg?ts=1683211845587', 1),
  ('CULT SATIN', 60, 12, '122 SHOWTIME', 'Beauty','LIP','VIEW ALL', 'https://static.zara.net/photos///2021/V/2/1/p/4130/306/122/2/w/209/4130306122_6_1_1.jpg?ts=1619772366760', 1),
  ('PERFECTING NAIL VARNISH', 30, 3, '4400', 'Beauty','NAIL POLISH','NIAL POLISH', 'https://static.zara.net/photos///2022/I/2/1/p/4400/451/154/2/w/323/4400451154_6_1_1.jpg?ts=1654256307396', 2);
