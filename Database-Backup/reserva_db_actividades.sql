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
-- Table structure for table `actividades`
--

DROP TABLE IF EXISTS `actividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `actividades` (
  `id_act` int(11) NOT NULL AUTO_INCREMENT,
  `lugar_act` varchar(150) DEFAULT NULL,
  `nombre_act` varchar(100) DEFAULT NULL,
  `descripcion_act` varchar(500) DEFAULT NULL,
  `horainicio_act` varchar(20) DEFAULT NULL,
  `horafin_act` varchar(20) DEFAULT NULL,
  `itinerariofk` int(11) NOT NULL,
  PRIMARY KEY (`id_act`),
  KEY `fk_actividades_itinerario1_idx` (`itinerariofk`),
  CONSTRAINT `fk_actividades_itinerario1` FOREIGN KEY (`itinerariofk`) REFERENCES `itinerario` (`id_it`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividades`
--

LOCK TABLES `actividades` WRITE;
/*!40000 ALTER TABLE `actividades` DISABLE KEYS */;
INSERT INTO `actividades` VALUES (1,'Ruinas de Ingapirca','Paseo','Paseo por las ruinas de ingapirca','10am','11:30am',1),(2,'Quinta JLM','Paseo por la Quinta','Descripción de los lugares, pasillos, y istios de interes dentro de la Quinta','10 am ','11 am',2),(3,'Vulcano Park','Juegos','Hacer uso de todos los juegos a disposicion de los clinetes','9 am','11 am',3),(4,'Mitad del Mundo','Paseo','Visitar los lugares aledaños ','2pm','3pm',4);
/*!40000 ALTER TABLE `actividades` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-28 20:13:27
