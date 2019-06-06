CREATE DATABASE  IF NOT EXISTS `reserva_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `reserva_db`;
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: reserva_db
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `localidad`
--

DROP TABLE IF EXISTS `localidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `localidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lugar_loc` varchar(150) DEFAULT NULL,
  `descripcion_loc` varchar(800) DEFAULT NULL,
  `imagen_loc` longtext,
  `creado_el_loc` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `direccion` varchar(150) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `lng` varchar(45) DEFAULT NULL,
  `duracion` varchar(100) DEFAULT NULL,
  `paquetefk` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_localidad_paquete1_idx` (`paquetefk`),
  CONSTRAINT `fk_localidad_paquete1` FOREIGN KEY (`paquetefk`) REFERENCES `paquete` (`id_paq`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localidad`
--

LOCK TABLES `localidad` WRITE;
/*!40000 ALTER TABLE `localidad` DISABLE KEYS */;
INSERT INTO `localidad` VALUES (1,'Ruinas de Ingapirca',' Es una construcción auténticamente incásica-cañari, hecha a principios del siglo XVI de nuestra era, que se presume pudo ser un observatorio del sol y la luna poco tiempo antes de la llegada de los españoles a esa zona.\n\n El conjunto de vestigios arqueológicos de Ingapirca es registrado por el mundo exterior al menos desde mediados del siglo XVIII.','https://sagacreativa.com/wp-content/uploads/2018/06/Destino-historico-Las-ruinas-de-Ingapirca-saga-travel-saga-creativa-2.jpg','2019-03-03 17:18:48','Calle San Ingacio, E35 y Av Libertadores.  Cuenca 10150','35345343','453453','12 horas',1),(2,'Quinta Juan Leon Mera','Quinta de Juan Leon Mera,Es un lugar muy hermoso donde se puede combinar historia, naturaleza, cultura.\nLa Quinta de Mera tiene una extensión de 9 hectáreas, de las cuales 2.5 hectáreas corresponden al jardín botánico que existe en su interior.','https://www.eltiempo.com.ec/images/3931028-11443835.jpg','2019-03-03 17:26:40',' Av Cevallos 05-76 y Montalvo , Ambato 180101','-12314','-231421','1 dia',2),(3,'Catedral de Cuenca','Catedral de Cuenca es una iglesia católica ubicado en la ciudad de Cuenca - Ecuador. De estilo gótico renacentista con tres cúpulas que sobresalen del tejado estuvo inspirada en la Basílica de San Pedro en Roma, la construcción comenzó en el año 1885 y terminó 100 años después en el año 1985, es uno de los más grandes atractivos arquitectónicos del país junto a la Basílica del Voto Nacional en Quito. ','https://www.elcomercio.com/files/content_thumbnail_large_guaifai/uploads/2016/12/12/584f0a3557293.jpeg','2019-03-03 19:17:22','Calle Benigno Malo y Mariscal Sucre. Cuenca 10150','-2.89740',' -79.00531','8 horas',1),(4,'Vulcano Park','Es uno de los principales atractivos de la ciudad de Quito, la que cuenta con juegos electrónicos, de video, deportivos en línea, de destreza, simuladores virtuales con tecnología de punta. Ofreciendo a su visitantes el entretenimiento a través de la atracción variada, adecuada para cada público.','data:image/jpeg;base64,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','2019-03-03 21:05:48','Av. Occidental y Fulgencio Araujo, Quito','-123123','-121412','4 horas',3),(5,'Mitad del Mundo','La principal atracción del lugar es el monumento a la Mitad del Mundo, el cual tiene como finalidad el resaltar la ubicación exacta de la línea Ecuatorial o Ecuador, del cual el país toma su nombre, y destacar también la misión geodésica franco-española del siglo XVIII que ubicó el sitio aproximado por el cual pasa la línea equinoccial','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFhUXFxUYGBgWFxgWFxcWFRcXFxUXFhUYHSggGBolGxUVITEhJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABFEAABAwIEAwYDBgMFBwQDAAABAAIRAyEEEjFBBVFhBhMicYGRMqGxB0JSwdHwFCNiM3KSwvEVQ3OCotLhU2ODshYXJP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAArEQACAgEDBAAGAQUAAAAAAAAAAQIRAxIhMQQTQVEUIjJhcZEFI0JTgaH/2gAMAwEAAhEDEQA/APYUpQSlKBEkpwVHKeUASSlKCU8oAMFPmUcp5QBICnUYKeUAHKRQymLkAOSmlDKaUASByQeo5ThAEoKLMoZWB2z46cLQlp8bzlaeQF3O9LepCAZu1sYxphz2tPIuAPspmOBEgyvCXcScSS55JMk6z6zqStjs/wBqalF4h+Zsw5hNteuhVUTqPYAEQVfh+LbVY2o3Rwn8iPcFWgkUEEkgnSGMmTpIECUJREJiEwI0kRCQagBgFIAmDUYQMSSSdIDKlNKFOmAUp5QJ0CbDlKUMpEoolyQYKeVE1ycuT0sWtEmZPnUUqIVU1Bsl5Ui1mUgYsyrWd6KT+OgSq7MiPiY+S+4KIqAYsb6pqleyXbkV341ZNmRByymYokkSrdKtorlhaM4dVGRazLzz7YWvFOhUGgNRp/vOyFv/ANHey72piAFh9sMXhzhqlKuR/MY/IDN3tEtI6hxas9Eluad6LdHz9/GmTJ0/f73V3DcVB0mefK6vt4Bh3ETScSTc53+LpGb0Wpwfs7hadVhqU3CmHAuvUcBubST0sJSND1vsJmGCo57Fwc6OjnEt9xB9V0jHLKwddr6bXsPgLQWwCLbWIBHspjioVaH4IWaK52NMJ1Uo4oHdWA8FQ1RopJ8BJJIXPASGEmhVjjm80TMUCq0v0SskfZMU6qVcWAVRqcRvbRVHHKXgzn1GOHLNlOqOGxEDxG5uB02UnfAzBUuLRcckWrLOZMq7CY3SSouyinVd1ipW1Vq8fo545t6ZInTAqOoVMY2ypTpEiZxVY1OqJlaVr22jn7yY2h1TYiqYnkq+LqZSCNFE+uC0zuLdCt1C6Zyyy1cR63E4aI1VV2NcTqq1WiRBmQdDr5oYhdMcUFwcM8+RvcuvxJRMfAGqoSVNQrxYpuG2wllt7lttWE7q9je/JVmObedULXjTZTpK7j9jtcRzFlDj+KuoUnP+IggAExMmNYO0lSkrA7YP/l02j71SdQLNa7n5hTldQbL6dassYgVu09Z4IZRAzAhr87jlJBGYgN2N9dllY7iOIqOY2rXE5iG+Bg1IBI8F9vRQ03Qzwi83ABB1NySYI009VM2s948MtcLEXFuma2206hebLJKXLPfhgxw+lFU4Z4cZqOjcty/IZOcDbdTig/RldzsxAILacgzePB58tEePxrWjxEudGjBO4EuO2ov9JU+HpFzWu78gECztJ9b6/koNC7guJ4qjlBqvcxk+B7WZYAIElrA62tjeN1qYTtNVqPptc2mGucG2zTcwIk6rBNZjWAAunmGuOvkEIeQ5jjENc10mxsQd/oqjNpmWTFCSex33eEaKajjXt3nzVUpL0nBPk8GOSUXszY/2vbS6z34px1KrpKY4ox4RpPqMk+WTd4kKxUUp5VaUZ6mG6qSnYOSAJwUUF+WSiuS6TurgBOkRvNtNFmqzTrnms5x9G2PJXJfOKcNpSQmeYSXPUfR3a5e2Uq9YAwd0HeRoocY0m6BtXmF1RgqOGeV6nZZZxAaFSVMUCFlVRvCiBKrsxe5HxU1sy6ytJupe/GuyzMydpVvGYrM0aZqA7gBVMVGgIsoMyTGTZNQrcJZNWxGmhG5pBgpQtDGgISyqy/CvDQ4tIadD+9FFlSUk+BuDXICdFlT5UWTQIC5ntlV8dJv9LzpOpaAf+n5rqQ1cZ2tJOJtPhptb0kku19Vz9U/6Z3dBG8yfqzJoYl8Q0mNDe3kCDdT0Kjrw90SJjxx5clWoYepqGm+tjE9FYpAtLg4QRqIvPlZeYe8HVoGo/KAQAIc8CBlkEh1uh+SuhhEDMC3YgbzuZnSR5LKq1TPxEA7W9jdE2vFu8jSGg8pSAtGtYXa4g7QTpIkbJ3vMHLINpsDt1lR0Hkn4bAHUHmFNUpkyfFF4t0QB6FRfma13MA+4lEqnB3TQpTrkaDPNogz7K3C9aLtJnzk1UmhwEkkyZIoTpkkAFKUoEbWoAeUpScmZqkUShxSWgxggaeySw7i9HUsD9kDnN81A9k8leo0vJSGPwKO5XBr2XJWzJr4YgSRZVXUV0we2FXq4Vh0VQ6nw0Tk6LzFnOupoe7K2n4YclC/CGCQNP3ouhZkccunkjJhExWn0wgDIWmqzHS0BUuZRYcgOBIEJ3NvKbKl4oe6dnQYbiDHQ0jp0VXifDQZewX3HPr0WYwkK/wAPxRDgM2trrleJ43qgd8eoWZdvKv8AZmiifwm2tjZWcLgDUEgieX6roXUWuva/5Jm0WsMgC+sKH1Ta2RrD+OSe7tGbS4OC25g3uPlI5LyztQ9oxNXwEuDsrtY8ADbGenIL2ly8L4pihUq1HhlnPe4mSSS5xOh81hLJKWzO3HghjdxX2K4dflect9OXsjY+HE5QLDWT7Sost9D7fmlQgkjWANdpnX2WZrZXxDzJMT00m40JlJgte0GCNbTY6bqR1RhkZW6nZ1ocBe3lboqeImW5QYMTEwIJMZTAIvaOSAOgq2NhsL3vPr0Cge4MdPhEzu6CnefEAGknLsLzO4m2yZ9A2hpbzuZnyvtCBnddln5sMydQXj/qJHyIWtCwuxDf5NRoPw1TblLW2v1BXQFq9HFK4I8PqIVkl+QIShEktDnojhKEcJIsKBDU6MGLhPASspIjR0iAjgdChEJXY0qZeZEahJUy/oks9DN+79jYp0Go3sVSk2N1YbU5rkkn7PRhKNVVCOHCB1KNFMENRqSk7KlCNWkVwIN1I2qqtbMo21it+3qRyd7S6LhZTOo+SB+EYeXpYoabsxgi6nfw/qo+l8miWtWopmbVwI1a8HodVXo0ZcG81utwZtL9OQgx1lRu4dDgQ62/P0haRz7U2Yy6NtppfkxatEtMEXTNeQujrYcPBBPtqosPgGN2zHm6/wAtE11KrdBLoJavlexmUceWx/orv+0Gka+6ocRwxa8nLDSbRpp8lWaq7cJrUZd/Libgy5j+KFlOo+PhY907eFpP5LyKhTpd21znHQ6EiTJ2GkRHXVei9pHBuErHm3L/AIyGf5l5jSxYaACyk6JuWkkzzM/kufNFRdI7+knKUW5CrOBMsHhHNxv18V09B1zeZAtERd0X3ULamli6Ba/6oqcF2nhIbblrM6bysjpZE0Q53i3cd+fJP3ZId4tB79LocwkyDqZ8QG+0ommGzEE9Qdzy9UhGiAJ8VQg5RbKCAI2f96+6dzoaQapdqc0AawNM1781Xr1SHhmUGdM1y6YsOnmpHUyAA0NB6t29B5IGdh9nsk4hodP9m4WA/GDof7q6tzSuK7B1SMS4SYdSJE7kPbGw2legG+3qP0XVhlUTzepgnMo5UsivfwvIo24PmFr3YmC6eT8Gf3VplNC06uBGypVGQnHIpCyYZQ5IUoTwnhWYjQlCJJFjoGEkcJIsKLZfOhhAHvHVRAIwsdKR0a2yVuKcNWqduMad1VD1Xx+JpUqb6tQ5WsaXOPQfmdAOZUShF8o1hlmtk7NQuaUOQLxWt2/rVaktxFKk0nK2mTliTAJcAXE6SSI6Qun7Mdqa5qd3WcHszZRUaRIlxaJA5WmQDBGupxUldJnU8cqtpHo7LIu+Ko944dUQxJ3Cp4mRHqEtuDQaTujzrP8A4kHWUYdOhUODRss8XwWc6Y146qEFZuK49hqbyx9em1zdWucARIBEjyIKmi9V8Gw57XCDodigcKeXLlEchb1soGvBAIIIIBBBkEHQg7hPZNEOXtI5D7QJp4QWs+o0D0zPE/4V5xVJIAJBOvQe2q7/AO1Ct4KFO/idUdAgfAGi8/3yuDaG3zAkAfdge8jROUnJ2x4sahGkRPNoPiJ2HTqE/dZvYfQo6TmzAkEnW1hNzYTCNzg2S17XG1ruvfytb5qDWiBzHXkgXP18uiB9MxBiwM7c409FM5hdALmSdYDrfNKphXN8JLLwAA1w1Fjc2GiBJDA3mTDjMBgNuRMyCjztAhptuMoA+v7hWG03N16aF3rGyFpBEZQJI0ETNoMi9ygdGr2MdlxVLxA5s4tl3Y4jQ8wvTGjkvLuCgU8RQsY7xgvNszoP3RFiV6gWrowvZo8/q1UkyxRJ6rSpussYA6qE9oaFNxY+vTBbYguEg8j7oywvcfT5adUzaquVapRB2UrKgeA4GQQCCORuCmCzg64Nci1PcoVsPHkow1awpyoKuFjdbRzeGcs+ma3RSDVKykEtNETa7hy9lbb8GcVFPcIUvJJP/Ev6eySj5jT5Pv8AotnD0xsjNBh+6PS30UTXbqUOXNqfs9JQj6RC7BjYrzf7bqzqeBbSa0nvqzWmASTkBqAADfMxp9CvTKmLDddeixcfV7wiRMTAG07yY/eybyOqJWGCdpHyc0ua42hw1BFx5grd7L4msa7SJLfv5W/C0FsvcGjRpymTaYuvfuJdncNihGIpB42nUTaWvPiB6tHqsZ/2W0adKq3DVHRUjOXlpd3bfEWUy1o+81mp21CizZJHU8M7Qtr5M7S01BmpOIhtRvRbGTouf4p2ca3Cd1RkvpHO3dziBDwI5tsABqGrQ7O8T71kO+NovO469QhTcXQp4VljrSp+UXzTCHuVYJ6ISVrrZy9qJi9qsSaWDrODiDlyggkEGoQwEEXBGaZ2heRVnvc7M95cSb5iXOO0yR+a9H+0jFAUKbPx1JPVrGmfm5q86JBM2+U2/wBVDdm0I6UekfZ7jnvoOY93hpZQ0mBDSDYnkCCtfhnH6Nd2RhdmuQHMc2WjcFwF4M5Tf2K884Xji3h3ESxuZ4ZQDWi5L3F7W2Fz4gLBZGGpOqUmVKuHbRcC8mnd2cBjQ5wNF9M0wDADfERJMOIEy3RrDGp/k6f7S6gOIptJ+CkDHVz3fk0Lk3GddPRUcfjqweWQKxZDQ81TVDAAPAapy5sri4eISBAIMIHnEH4qlFog/Cxr3AmIIloHO87e2iSaux9qlyjTpPaCHOaY25GDqCJkSCPQqLE1GFxuBItAPiMRpHh5fNBVxLnHM4zm8tuQGgsom1bgZj0EC9+eygl+g6VCRoDoQfnp5wpsO0EhpeGzBb4SZJAtNo1I9FCIvpqDBFwQOYMOHsp8NQc4gzAEW8JkAbkExN7TZAki09ty0mdLRp1NwozEmI9hp5IaxAMB0EDTKDtzDvJKpVtMg77XsPFr8kAyWjWDHB27SHaC0X0XtjqC8JqVxI8V40GgBv8AFK9x4TWz0KTx96nTd7sBTUmuCJQjLkqcbqGjh61RvxMpvc2dMwaS2R5wvGnOLiXOMkklznXLi4ySXRczK9h7YPH8FiDvkI9yB+a8fc+BciPOf3om5NihjUeD0D7OMY9wqsL3ODe7Lczi6AQ5pa2dAMrbCy7dgXmf2a4gNxRaDZ9N7Y0uCHj5Nd7r1JrktQdtXYIpp3UypU4SsrSjOfSurDaAAVhzUKtzbM44Ip2VjTCSs5UktTH2kVXyBc2GqzsTjjtIH7/fquD7R/aTmrUadAEUCR3r3C5BeWBoBFvhdve/IrpadSwgmCAdZmdFnZqkaIqSg0Mqs16LXn7oGGK4YQbagm+sbKYY8hwIcXRO2reRA/JVHBvl++iimP8AQ/UhIZtMx2Z2YNEAazJ0mABtoZ/RFSo03ONQAsf+Jtp55mkQfUTZZ1GjV7t1QAubmnKHHvDEAloIgmw5m1r63G0GVWBzm1WNaD4TLCdzmBE7ag7lBUXTNCnUDgDzC5ntB2uZhH5SGVfFDwyo1tSmIETTcZeTO3rC4ih2zxrGADu8oG1IwD7TrKwOJVX13vq1IzvMmxF7W+FUiJJXsdR2x4sMa5jsPmcymw5tntc53iBZMxDWeISOq5R9drWkl8ZYkE6XI0Drm2ihqUmxrLhyLwfIQNvZT4d2IfUaynXrAOIHje52UEwTmLQDAvEbKlQIu8Jp1M76ncsq02ENNJz3td3rqbHtd4JAIFUtEzAbUiCTOXie0hcKpDQ4MrVCzPlsMznNaXfiAtNwYmSr54CXfxWSq4HEuzOeGwRLz/LzTeQ4Hex5xPL8O4FQrtpsZVcHtLg4OENqSRJYB4s0gDIRcQQQbGeTVz0paTsKvB2VaNN+CAdLT/Lpy/M2SczTq5w3aQHX3gxl0MDUH+7qgmxPdui206bKPsHxxtKi9ri4Oa8DQyLdNNItyC3cR2gouOY1HyTJ8BEuJub9ZT3Iel7oxhgngHK2pM28B2t+quNwbrT3gMXhpjebkLUw/FKR59XOm/TprtyVOrxii0kOdffwExPWLoEkiucO6S0mt/gOXSRB9U7MAPEC11xqQZaS0iR7qanxmgfvx/8AE79PPZSU+N4Zt+9JJ2FOpp1zNQPYzf4EtEGk8xoQxxnXl6IW4V1y1jhlv8Ma66n5Lap9oqGjKj4/4bx/ltuhZ2gw+a9Zw5/yqh6/gQTSMg0Tc924ehM381qcT4riCygxxexlOm1jAMzOjpg3Nh8lucP7R4Fl31p5Huqp/wAkpu0XbmnWpupUKbatMgg1KjLZ4t3bH7t5ka7cwKReqceNbhFbvHtNUObTvAcQKlKPCNfC7XoVxjjpA+em/wBVm+EbOOgEkSfPqnFBpFi/nFoQI6Xs7ji3G4d7vxtbM6B8s9h3huvYf4ln4m+4/VfPrGAOsLgHceu/kjZe+XU8x+qAPoZjlIHLzKl9otUNA/h2GAB8Z2C7rs7xL+Jw9OsRlL80gGYLXubr/wAqANIvTGohDZKlyoAg7wpKbu0k7I0y9nzhjMJSHdOqMdVNKkabw1+UvIJqtdVgEuyj+IBIAtk0XpPAnn+FoF13Gkwk6SXNBJ1PNefjhL8QXPNAyHSWy01CKpA/lhu4AEz+ACeforajsjMwAdlbmAIMOyjMLdZWMXaNFuWDiI2+f/hCzEHfmfYkwNBoIHoqhcnBTKLras7K3gmDNOUA9BdZtPyW1wejJBj5C/lfSd/qUxFGp2ypUcUcO4P7oNANUNlrKge/OHRePhGaLRfpf4xxZhoVzTe12XD1X+Eg3ykMFtJIdryPIryviOLLq1U5iC57zltbvHuOmjtXC1xl6haPAuzWIrtHhLaZmS4wbxYdCcxvmukpN+BLc5mo2RbMHToYDSPKJMJNbYWaT1iNT0mV23GOxjKdF1RtR5ewOcRIh7WiXkEt+KAT6R1XN4LDh1M1jJY2LFzdXODBdrRo52siVdje3JRr1BMmnTGujGi0nS/MR6K5wusymKmIdDe7Y/K1oylxy6i9iC5nmSFBWoAAZmt0lx5EuI2IPpJ9VQ4if5NRkEOfkaBmERnaXnKbxlabzuNdqSb2Q099zeo8a/k1XCAGsbd/xFzyQ1ovoD3YA2glW+yfZzCVMOO9pNL3uc9z/E14JcYyvB0Ajwm0k2uubw1ai+hVaalOZptkuAy/Gbzpdo16LS7Pvqtq52PPdupzlOVzSDUc5rpiJioG2/AdbQVR6P8AKYsUcl4pJx+zT8L17t/oHtjgf4PFNo1SararA6lVcGsqkAkZTUiHua6PC6xDhGUm2SzDSJDy+BLgGgOZe5qUs2ZouPERluLlbP2kUv4gU6VzUoszNcNnvObJpIlrWxfcHZc72Y4iatPxGoXtlrsrozNGUguESdYN+XNI8uiYMI+8TBtr+zKlLzls1g65SSJtAPqrNP4KpyWGS1/FLwCTN7CLKvVqMm4ftpAaDJkQ5pPPUoAi7sxrI10dc8kwkX0FvizXJ/0Uje7Gmf2bqd9P3CtcPINVrGgw7Nc2Js47ACLaddUDZTaNSXgx93xGBuYKcs18QPoYA5wNFYZXY5t2mdiwQII/qzT5qJ8HZ3S4kxO/doFRn4uoCDcSd408iVHweqYLbwM1tp8K0nsJBLWSQNHSR7Na0zbmjfRa2qJFzSZJaTGkXa/eGC4PoUACKvSfWFK+o4jwgjncGfQqzUoNa3xZxMiC5g06uaB7GyBlJh0zfC5x3ADdZLWkb+XkixkDXO0zEegvb5JxWcLAE84t03UgII0bEi8tBi83y/3bHr5piGEDxH0DIHqDf2QAdPEEiC0jzM/kvUOwb3mhQy1Iph1djmQPE8/zGXLcwgZzYjyO3mAyDcmeQB+sQtnhnF6lDCvFF7vDVDxYAyWtabNOhAI13QJ0ke1F8IG115zjO0ddgzd6YluthDnBsyGnQOn01GqbHccrtY4tqPLgLDNqZgCJG/VOiFkTPSu96pLzdvFapv31S9/jdv6p0g1/Y5jB9ocRUA//AJi6AJIY8C5JGUQSYaGg63J5X6mlUPdszCHZG5uWaBmgAmRMxf31XX5Oh/xOH01XJ8XEVHf3j9VzrFGG8UbLdkPe9AfWPzTiqOUerSqikbKaLov0HN2Hyafzj5FbvDyDq15H9Li4nSCbADyB5arm8OVr8ONQuAD3NAknLy3WiM2cXx3EVMJUq5TJpuc8kMBLmtILmtcSPEGEG7rwCOTtHAcRIzZ3u3LSHWdlADmSDLo1DnAOuLARNbt7X7rEnw3q4d+fUy9niph27nBpqtnWHlZPZ+ia1SlSLg3M5/jI0YKTKbAwg3k06kCwBuZ0TopHQU8W7F1G0GPc0ObU7w7tptbkfaCJc6swC9sp/DfSb2KpAQa1a8T/ADAJi4kZCJudOvMrd4dwqlQEUwBIEn7zomMxnmXGLASYAlSV8EX2aR7T+ZUuKfIpO2YtPsVhhqHO1MuLZgiIlrQYiy8t7Y9hOIYVmIrio19AOLvC45xTc7TK5tolswdAvXn8Bqk3xJb0ytd9ZWbxfsSMRTdTqYqoWuicrKTTYyLwdwDpsPNNbcE8niOD4d3TMzjeJc7WANb8oXZdn2mlTf3hDAXtZTEgtFNzRWpultiXHEEkCToNl0GD+yTDscSa9d4M+EkAQTpYXFo6+66V3Y/DOFMPosd3bAynmLzkaAIDRIA+EaLaeROKSREYU22BiuxODrvdWdTzGpcnvqom4IsHwBYWAhctjPs6o0sdRdSdloVMxqU5qOdnbLQWP+6096JkiIMdPQMPgxTaGhjYE7vdvzdM/krVKAdAPJrh84WVs0Zzp7EYSIyvIgCO9eRA0tmg6bof/wAFwn/puj/iH9V0wqCY3/uu+uWCnEHlPkR9QixHLP7CYQn4HizRGZ33QAPkPqlS7C4UQ4d6114Ocgi0biy6dzB++qJoH9Pt+iLA5L/9eYXUOxAn/wBy3oMsJ6PYHDt+/Xfr8b2nXyZddUwOM3b7HTbe6I0jNyP3shvYdnF4nsMRmNKpFjDXNJgmdCJO+haVlYrsxUpm7G1bAF2ZgIj4QGvAOpOxudBqvSRQB+7H72KLu/6RGnpy10WUsd8MDyfEDu2AYilUyzucghzQJboASA6L8o1EyYRuDb+NhcCCS+obOMEauizxOi9PODZpYC9g5wHqAYKo4rgGGqCKlOk7qWNk/wDML7BZ9mXt/sRwX+ycI0XqhoMEE1JBuZGYugbaGUY7N0nghtd5M6sc0m8GWiHctxuY0EdRjexGDcDlZUplwgmlVLT5+IkfJVT2Uq0xFHGuAuR3rGvJdI+9mA2gwz6KJYc39s2FGHT7NUx/vXuOniymTAEkBkagnzJ5CI6XZkNFq9VwJJPePBHiiL5JsdPP3kxvZ/ilOXAmtMeGlXLQ0BxIIFSOml7R1WNxLieJw5JezEMtd1VjiBlvZ7hD26EmYJzekdrqf8n/AAW/s3ncFJbldiCWm0RTi2lw2bEN9hzhSVOBvcMrsQ4h2xbT9vCBInrK53A8YIGdpDWyJeQMsBrB4fu6ydzY7m+rgu0tOpIcW5rFoYLmdom5kAyT97QwVm/ilxOyK/AqtFzDl79tg0XawHQbF9kln43iBzuuPRsjTYkgwkuhPJX1FnsLXDYOPnm+pN151xbHF1aoM7XAPe0Funhe4EGPvAgg9QVLV41jXEhriTyGWfZjJXMcQwePZVdVZRb/ADDmqNruaxpdA/mNlzXNeQADAg6kSumfHJpB78GwMaBtJ+SdvEAdZ9CsR1SubOwsdWVsw+bQPYlE3C4k/BgqruXjj5gFTFOhyavY6zBYim4SaoYRsYHtOqt4jtTRwzc7jqAGuJl7iNQxluY5Ab81wtfg3F3/ANlhadL+pzw5w9TA9wVXofZjxOo/PWq0Z5ue95i/JugnQQFaRBo9sOKtrUDXc5rnvcD3bXAmCSGMDhf+yzAnqSm+zxjqmKa43IcHuNgGNZfKBsJgQN3Hqui4X9m1FoYazi9w2aQGSfiOUgkrrsPgGUxDWEdATf0lOwZod5/S32n6pOqHc+8fQqJo6InSBp8yPoClQEhBjX2A/ROfP9+SiZm3EHoZHzARE9EAHH7hIjoPVV++M6W8z/2oWk62v/UT66XH7sgCyQBeB6CfyTZAdW9bT87fVRNnpv8AeP8A2p3Pd0nzJH0QBIRyA9bf5fNA+ABNugE/RvRRB5kjMJ6Ez5Efv9U1ubWbEj4iJ6iD+/qASEDWx8wNOXwyd/dP4eTf8P8A4QGhH+pPXcqNzOjz6u+Qn/wgCwHC8xrvvoo6lJh3A8jCbugY+PW9yNup5wne1v8AV6OeD7SmATKbW6RPnfnqjFR07RbnPWVGWt08X+N36pgxgIOUztc7+t9JSAnc4n/UoXVXDX3gn6G3shp1W5iIcDtcwRzHP0Rhxj4Xe4k+V/rGiAHzHkPYpg69gPdET/S75W87oQ9wgZXHS5LRHz/IIAVx92fIhM57ho13oW/qpMzvwu92+2qEud+B/oWX/wCpAGdjOE0K39rh2uPNzG5vRwuLdVg1fs9wV+7a6mbHwuLtDp481tZXZB7uR9cv5FC+qB8VvMCPU6BFAee1vs3JcSMSADsaJMeucfRJehOoA3LQT/db+iSVIVGNxuoWVGtYS1v4WmBodhZWeFYWm4XY0+bQUklMPpLlyXxhmNNmNHk0BEGA7D2SSVMEVsUwDKQADOu6EUxyHtyEj5pJJiYTKY5D28k5H790kkxAtN/31U1GmCJIBvySSSAEsE6DQ/KIULhp6fokkgAaziGGDs36haTGAgWHsmSQAQpjkPZRNaI0Gv5hJJADgafvkqr7Ntax06TCSSAKlaq4Ew4/EdzyWqBZOkgAHC58/wAlFTFj5/okkgAqY8I8kmC3okkgChiXGHdASOhAkEdVpNNh5JJJgGUpTpJAATdOCnSQASSSSAIKlJoMBoA6AJJJJiP/2Q==','2019-03-26 19:35:19','Av. Manuel Córdova Galarza Km. 13/5 SN, Quito','-7856382','-7835241','6 horas',3);
/*!40000 ALTER TABLE `localidad` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-28 20:13:28
