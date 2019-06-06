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
-- Table structure for table `guia`
--

DROP TABLE IF EXISTS `guia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `guia` (
  `id_guia` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_guia` varchar(150) DEFAULT NULL,
  `cedula_guia` varchar(45) DEFAULT NULL,
  `idioma_guia` varchar(45) DEFAULT NULL,
  `imagen_guia` longtext,
  `paquetefk` int(11) NOT NULL,
  PRIMARY KEY (`id_guia`),
  KEY `fk_guia_paquete1_idx` (`paquetefk`),
  CONSTRAINT `fk_guia_paquete1` FOREIGN KEY (`paquetefk`) REFERENCES `paquete` (`id_paq`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guia`
--

LOCK TABLES `guia` WRITE;
/*!40000 ALTER TABLE `guia` DISABLE KEYS */;
INSERT INTO `guia` VALUES (1,'Jorge Andrade','1278456732','Inglés','http://2.bp.blogspot.com/-itYtAL5lBeE/TkFdlIhhacI/AAAAAAAABHI/HYGHzdl85UI/s400/111433_aerogenerador.jpg',1),(2,'Jennifer Estrada','1234786572','Español','https://cmujer.com.mx/wp-content/uploads/2016/10/Lentes-personas-m%C3%A1s-inteligentes.jpg',2),(3,'Paula Hernández','1745876129','Español','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDx-lW7jFxxuyqSBYZ8SOHPowYKw32W-I15m07B50_yjjqURYIJA',3);
/*!40000 ALTER TABLE `guia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-28 20:13:29
