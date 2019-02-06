-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: CIMSDB
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Auth`
--

DROP TABLE IF EXISTS `Auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Auth` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Auth`
--

LOCK TABLES `Auth` WRITE;
/*!40000 ALTER TABLE `Auth` DISABLE KEYS */;
INSERT INTO `Auth` VALUES ('admin','adminabc123'),('akansha_shrivas','akanshaabc123'),('hemant_raisinghani','hemantabc123'),('JAKIR_SHAIKH','abc123'),('prabhav_gaunekar','prabhavabc123');
/*!40000 ALTER TABLE `Auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BOX_OWNER`
--

DROP TABLE IF EXISTS `BOX_OWNER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BOX_OWNER` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `INNOVATION_MANAGER_NAME` varchar(100) NOT NULL,
  `IDEA_BOX` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BOX_OWNER`
--

LOCK TABLES `BOX_OWNER` WRITE;
/*!40000 ALTER TABLE `BOX_OWNER` DISABLE KEYS */;
INSERT INTO `BOX_OWNER` VALUES (1,'hemant_raisinghani','BLOCKCHAIN'),(2,'hemant_raisinghani','AUTOMATION'),(3,'hemant_raisinghani','AI'),(4,'hemant_raisinghani','CLOUD'),(5,'hemant_raisinghani','ROBOTICS'),(6,'hemant_raisinghani','VR'),(7,'hemant_raisinghani','WEB'),(8,'hemant_raisinghani','ML'),(9,'hemant_raisinghani','SALESFORCE'),(10,'hemant_raisinghani','AR'),(11,'hemant_raisinghani','IOT'),(12,'hemant_raisinghani','SECURITY'),(13,'hemant_raisinghani','SECURITY'),(14,'hemant_raisinghani','SECURITY2'),(15,'hemant_raisinghani','test'),(16,'hemant_raisinghani','TEST'),(17,'jakir_shaikh','PRD'),(18,'jakir_shaikh','PRD DasHBOArd'),(19,'jakir_shaikh','PRD DasHBOArd'),(20,'jakir_shaikh','AUTOMATION');
/*!40000 ALTER TABLE `BOX_OWNER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DECISION`
--

DROP TABLE IF EXISTS `DECISION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DECISION` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `IDEA_ID` bigint(20) NOT NULL,
  `DECISION` varchar(50) NOT NULL,
  `COMMENT` varchar(200) DEFAULT NULL,
  `NEED_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `DECISION_fk0` (`IDEA_ID`),
  KEY `DECISION_fk1` (`DECISION`),
  KEY `DECISION_fk2` (`NEED_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DECISION`
--

LOCK TABLES `DECISION` WRITE;
/*!40000 ALTER TABLE `DECISION` DISABLE KEYS */;
INSERT INTO `DECISION` VALUES (1,5,'PENDING','---',3),(2,6,'SELECTED','can be implemented',4),(3,7,'PENDING','---',3),(4,8,'PENDING','---',1),(5,9,'PENDING','---',1),(6,10,'PENDING','---',5),(7,11,'PENDING','---',5),(8,12,'PENDING','---',6),(9,13,'PENDING','---',6),(10,14,'PENDING','on hold',5),(11,15,'PENDING','---',7),(12,16,'WAITING','More Features can be added.',7),(13,17,'PENDING','---',8),(14,18,'PENDING','Some more features can be added.',8),(15,1,'PENDING','---',2),(16,2,'PENDING','---',2),(17,3,'PENDING','---',1),(18,4,'PENDING','---',3),(19,19,'PENDING','---',8),(20,20,'PENDING','---',8),(21,21,'PENDING','---',8),(22,22,'PENDING','---',9),(23,23,'PENDING','---',9),(24,24,'PENDING','---',9),(25,25,'PENDING','---',6),(26,26,'PENDING','---',6),(27,27,'PENDING','---',6),(28,28,'PENDING','---',6),(29,29,'PENDING','---',10),(30,30,'PENDING','---',10),(31,31,'PENDING','---',11),(32,32,'PENDING','---',12),(33,33,'SELECTED','we can proceed',13),(34,34,'PENDING','---',14),(35,35,'PENDING','---',15);
/*!40000 ALTER TABLE `DECISION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DECISION_STATUS`
--

DROP TABLE IF EXISTS `DECISION_STATUS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DECISION_STATUS` (
  `VALUE` varchar(50) NOT NULL,
  PRIMARY KEY (`VALUE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DECISION_STATUS`
--

LOCK TABLES `DECISION_STATUS` WRITE;
/*!40000 ALTER TABLE `DECISION_STATUS` DISABLE KEYS */;
INSERT INTO `DECISION_STATUS` VALUES ('DEFERRED'),('PENDING'),('REJECTED'),('SELECTED'),('WAITING');
/*!40000 ALTER TABLE `DECISION_STATUS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IDEABOX`
--

DROP TABLE IF EXISTS `IDEABOX`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `IDEABOX` (
  `TYPE` varchar(50) NOT NULL,
  PRIMARY KEY (`TYPE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IDEABOX`
--

LOCK TABLES `IDEABOX` WRITE;
/*!40000 ALTER TABLE `IDEABOX` DISABLE KEYS */;
INSERT INTO `IDEABOX` VALUES ('AI'),('AR'),('AUTOMATION'),('BLOCKCHAIN'),('CLOUD'),('IOT'),('ML'),('PRD'),('PRD DasHBOArd'),('ROBOTICS'),('SALESFORCE'),('SECURITY'),('SECURITY2'),('test'),('VR'),('WEB');
/*!40000 ALTER TABLE `IDEABOX` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IDEAS`
--

DROP TABLE IF EXISTS `IDEAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `IDEAS` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `IDEA_TITLE` varchar(100) NOT NULL,
  `IDEA_DESCRIPTION` varchar(500) NOT NULL,
  `IDEA_OWNER` varchar(50) NOT NULL,
  `TAGS` varchar(50) NOT NULL,
  `SUBMISSION_DATE` datetime NOT NULL,
  `UPDATE_DATE` datetime NOT NULL,
  `CATEGORY` varchar(50) NOT NULL,
  `SUBMITTED_AGAINST` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `IDEAS_fk0` (`IDEA_OWNER`),
  KEY `IDEAS_fk1` (`CATEGORY`),
  KEY `IDEAS_fk2` (`SUBMITTED_AGAINST`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IDEAS`
--

LOCK TABLES `IDEAS` WRITE;
/*!40000 ALTER TABLE `IDEAS` DISABLE KEYS */;
INSERT INTO `IDEAS` VALUES (1,'Bandwidth monitor system.','Build a tool to track how much data you have downloaded or uploaded on the internet. Have it email you a weekly report of your usage. As a bonus challenge, predict peak usage times.','prabhav_gaunekar','Automation','2018-10-04 15:13:36','2018-10-04 15:13:36','AUTOMATION',2),(2,'Night Watch.','When you open a door outside at night, your system checks the time and turns on the outside lights on the side of the house of the door you opened. After you shut the door, the lights stay on for a few more minutes and then go off.','prabhav_gaunekar','MACHINE LEARNING','2018-10-04 15:18:43','2018-10-04 15:18:43','AUTOMATION',2),(3,'Property Management System.','Smart property allows ownership of both physical and non-physical property to be verified, programmable and tradeable. The ownership details of a property is written on the Blockchain.','prabhav_gaunekar','WEB','2018-10-04 15:19:56','2018-10-04 15:19:56','BLOCKCHAIN',1),(4,'Android Smart City Traveler.','The purpose of developing this android application is to create a schedule for the traveler travelling to city and wanted to explore the city by specifying the time in hours.','prabhav_gaunekar','MACHINE LEARNING','2018-10-04 15:20:27','2018-10-04 15:20:27','AI',3),(5,'Google Brain','A deep learning project part of Google X attempting to have intelligence similar or equal to human-level.','prabhav_gaunekar','Automation','2018-10-04 15:39:43','2018-10-04 15:39:43','AI',3),(6,'StratoSource','StratoSource is a backup and change tracking tool for Force.com Projects. It is designed to help fill the void in Cloud based development environments where multiple people are working in close proximity.','prabhav_gaunekar','WEB','2018-10-04 16:09:32','2018-10-04 16:09:32','SALESFORCE',4),(7,'Internet activism','Project for the analysis of public expenditures and detect discrepancies.','prabhav_gaunekar','Networking','2018-10-09 10:46:53','2018-10-09 10:46:53','AI',3),(8,'Improve Property Search Process','A blockchain-based multiple listing service (MLS) could enable data to be distributed across a peer-to-peer network, allowing brokers more control over their data and increased trust, because listings would be more freely accessible.','prabhav_gaunekar','WEB','2018-10-09 11:04:59','2018-10-09 11:04:59','BLOCKCHAIN',1),(9,'Ease leasing and subsequent property and cash flow management','Executing a real estate lease using smart contracts can address many of the challenges associated with property and cash flow management.','prabhav_gaunekar','WEB','2018-10-09 11:07:19','2018-10-09 11:07:19','BLOCKCHAIN',1),(10,'Personal Cloud using Raspberry Pi','Once you install all the software and configure your personal cloud you just need to login to your ownCloud account and upload the data which you want to store in your cloud drive, now you can store and access the data from any part of the world.','akansha_shrivas','CLOUD','2018-10-09 11:17:32','2018-10-09 11:17:32','CLOUD',5),(11,'Remote Monitoring and Controlling of Industry using IoT','The motion, gas, and vibration of the machine in the industry can be monitored, and for the contrtolling part you can take picture of the intruder, you can turn on the exhaust, and you can turn off or turn on the machines.  The data is uploaded to the cloud, and this data can be seen from the webaddress or the mobile app you have developed.','akansha_shrivas','CLOUD','2018-10-09 11:19:33','2018-10-09 11:19:33','CLOUD',5),(12,'BigMart Sales Prediction ML Project','The goal of the BigMart sales prediction ML project is to build a regression model to predict the sales of each of 1559 products for the following year in each of the 10 different BigMart outlets.','akansha_shrivas','MACHINE LEARNING','2018-10-09 12:26:52','2018-10-09 12:26:52','ML',6),(13,'Social Media Sentiment Analysis using Twitter Dataset','Social media platforms like Twitter, Facebook, YouTube, Reddit generate huge amounts of big data that can be mined in various ways to understand trends, public sentiments and opinions.','akansha_shrivas','MACHINE LEARNING','2018-10-09 12:28:27','2018-10-09 12:28:27','ML',6),(14,'Cloud Based Attendance System','This system allows to keep up to date record of the employee. As, the project files and a database file will be stored into the Azure cloud, the project will be accessed in the web browser through Azure link.','akansha_shrivas','CLOUD','2018-10-16 11:41:15','2018-10-16 11:41:15','CLOUD',5),(15,'Android Phone Controlled Robot','This project presents a robot that can be controlled using an app running on an Android phone.','akansha_shrivas','Automation','2018-10-19 12:16:07','2018-10-19 12:16:07','ROBOTICS',7),(16,'Fire Extinguishing Robot','The aim in this next project is to build a robot that can detect and extinguish fire. This fire extinguishing robot is a prototype of the actual one. Sensors used here are simple infrared (IR) photodiodes that detect IR rays coming out of the fire.','akansha_shrivas','Graphics','2018-10-19 12:23:01','2018-10-19 12:23:01','ROBOTICS',7),(17,'EmotiGlass','The EmotiGlass project explores ways in which a computer can modulate the user’s EMOTIONAL perception of reality. This aims to develop the first “Modulated-Emotion Reality” device.','akansha_shrivas','3D','2018-10-22 20:27:29','2018-10-22 20:27:29','AR',8),(18,'Black Mirror Project','A Portal to the Metaverse with current technologies and share it to the world. A Hardware Implementation of a Experimental Device for Research on Interactive Telepresence and Collaboration Tools based on JanusVR','akansha_shrivas','CLOUD','2018-10-22 20:30:14','2018-10-22 20:30:14','AR',8),(19,'Perceptoscope','Perceptoscope is a scalable public arts initiative devoted to engaging people with places through the deployment of mixed reality binocular viewers.','prabhav_gaunekar','Graphics','2018-10-23 11:53:12','2018-10-23 11:53:12','AR',8),(20,'Digitabulum: The last motion-capture glove','The goal of this project to provide an affordable, general open platform on which all other gloves can be emulated, and that does not require a host computer to be used as a high-level tool for sensing things in the environment that we ordinarily cannot.','akansha_shrivas','Tool','2018-10-23 12:20:18','2018-10-23 12:20:18','AR',8),(21,'The Holodeck: Whole-Room Environment Augmentation','This project started out as an attempt to make our weekly D&D sessions more immersive. The entire room is controllable via tablet with simple buttons for different landscapes, time of day, weather effects, and atmosphere.','akansha_shrivas','WEB','2018-10-23 12:22:57','2018-10-23 12:22:57','AR',8),(22,'DIY Virtual Reality Skateboard','On the bottom of the skateboard is an accelerometer/gyro with an Arduino board that transmits the angular motion of the board via Bluetooth to a little VR game I made in Unity for Android phones.','akansha_shrivas','Tool','2018-10-23 12:30:02','2018-10-23 12:30:02','VR',9),(23,'Augmented Reality Animatronic Box Head','Combining the power of Littlebits with Augmented Reality, this project creates a head moving talking Augmented Reality Robot.','akansha_shrivas','ML','2018-10-23 12:31:48','2018-10-23 12:31:48','VR',9),(24,'Control your \"Earth Rover\" in Virtual Reality','This Bot that can be controlled in Virtual Reality. When we went to Mars, we sent a Mars Rover. In Virtual Reality, I sent an Earth Rover to explore our world. I control the bot using browser using WebVR.','akansha_shrivas','Tool','2018-10-23 12:39:06','2018-10-23 12:39:06','AR',9),(25,'Iris Flowers Classification ML Project','Iris flowers dataset is one of the best dataset in classification literature. The classification of iris flowers machine learning project is often referred to as the “Hello World” of machine learning.','akansha_shrivas','MACHINE LEARNING','2018-10-24 15:22:31','2018-10-24 15:22:31','ML',6),(26,'Sales Forecasting using Walmart Dataset','The goal of this machine learning project is to forecast sales for each department in each outlet to help them make better data driven decisions for channel optimization and inventory planning.','akansha_shrivas','MACHINE LEARNING','2018-10-24 15:32:38','2018-10-24 15:32:38','ML',6),(27,'Learn to build Recommender Systems with Movielens Dataset','From Netflix to Hulu, the need to build an efficient movie recommender system has gain importance over time with increasing demand from modern consumers for customized content.','akansha_shrivas','MACHINE LEARNING','2018-10-24 15:54:18','2018-10-24 15:54:18','ML',6),(28,'Stock Prices Predictor','Stock prices predictor is a system that learns about the performance of a company and predicts future stock prices.','akansha_shrivas','ML','2018-10-24 17:14:04','2018-10-24 17:14:04','ML',6),(29,'IoT Based Smart Camera','Presented here is a project that lets your Raspberry Pi (RPi) turn into an IoT based smart camera and then control and watch live video being captured by this camera on your smartphone from anywhere on the planet.','akansha_shrivas','ML','2018-10-24 19:10:48','2018-10-24 19:10:48','IOT',10),(30,'Air Pollution Meter','Presented here is a IoT enabled air pollution meter to monitor air quality on your smartphone using Blynk application and Arduino board.','akansha_shrivas','Automation','2018-10-24 19:12:11','2018-10-24 19:12:11','IOT',10),(31,'Web Based Graphical Password Authentication System','Web Based Graphical Password Authentication System','prabhav_gaunekar','WEB','2018-10-25 14:13:54','2018-10-25 14:13:54','SECURITY',11),(32,'show employee attrition in HR dashboard using PRD','show employee attrition in HR dashboard using PRD','prabhav_gaunekar','Tool','2018-12-20 17:39:14','2018-12-20 17:39:14','PRD',12),(33,'we can show employee attrition report in dashboard','we can show employee attrition report in dashboard','prabhav_gaunekar','WEB','2018-12-21 11:12:55','2018-12-21 11:12:55','PRD DASHBOARD',13),(34,'we can have VM status on grafana dashboard','we can have VM status on grafana dashboard','prabhav_gaunekar','WEB','2019-01-07 10:11:59','2019-01-07 10:11:59','PRD DASHBOARD',14),(35,'office automation can be manage with ML','office automation can be manage with ML','prabhav_gaunekar','Python','2019-01-28 17:05:00','2019-01-28 17:05:00','AUTOMATION',15);
/*!40000 ALTER TABLE `IDEAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IDEA_ATTACHMENT`
--

DROP TABLE IF EXISTS `IDEA_ATTACHMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `IDEA_ATTACHMENT` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `IDEA_ID` bigint(20) NOT NULL,
  `ATTACHMENT` blob,
  `FILE_NAME` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `IDEA_ATTACHMENT_fk0` (`IDEA_ID`),
  CONSTRAINT `IDEA_ATTACHMENT_fk0` FOREIGN KEY (`IDEA_ID`) REFERENCES `IDEAS` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IDEA_ATTACHMENT`
--

LOCK TABLES `IDEA_ATTACHMENT` WRITE;
/*!40000 ALTER TABLE `IDEA_ATTACHMENT` DISABLE KEYS */;
INSERT INTO `IDEA_ATTACHMENT` VALUES (1,27,_binary 'Q0lNUyA=','test.txt'),(2,28,_binary 'Q0lNUyA=','test.txt');
/*!40000 ALTER TABLE `IDEA_ATTACHMENT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IDEA_NEEDS`
--

DROP TABLE IF EXISTS `IDEA_NEEDS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `IDEA_NEEDS` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `REQUIREMENT` varchar(100) NOT NULL,
  `DESCRIPTION` varchar(200) DEFAULT NULL,
  `IDEA_BOX` varchar(200) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `IDEA_NEEDS_fk0` (`IDEA_BOX`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IDEA_NEEDS`
--

LOCK TABLES `IDEA_NEEDS` WRITE;
/*!40000 ALTER TABLE `IDEA_NEEDS` DISABLE KEYS */;
INSERT INTO `IDEA_NEEDS` VALUES (1,'Solution for property management using blockchain.','Build an application for property management using blockchain.','BLOCKCHAIN'),(2,'Solution for home security.','Build an application for home security','AUTOMATION'),(3,'Solution for Artificial Intelligence Projects.','Build an application for Artificial Intelligence Projects.','AI'),(4,'Solution for salesforce application.','Build an application for salesforce application.','SALESFORCE'),(5,'Solution for cloud development.','Build an application for cloud development.','CLOUD'),(6,'Solution for Machine Learning development.','Build an application for Machine Learning development.','ML'),(7,'Solution for robotics development.','Build an application for robotics.','ROBOTICS'),(8,'Solution for AR development','Build an application for AR development','AR'),(9,'Solution for VR development','Build a project for VR development','VR'),(10,'Solution for IOT development','Build a solution for IOT development','IOT'),(11,'new solution for authentication','new solution for authentication','SECURITY'),(12,'Dashboard for HR Team','looking for solutions to implement HR dashboard','PRD'),(13,'Solution to have HR dashboard','Solution to have HR dashboard','PRD DASHBOARD'),(14,'Dashboard for CMS','Dashboard for CMS','PRD DASHBOARD'),(15,'solution of office automation','we need solution for office automation','AUTOMATION');
/*!40000 ALTER TABLE `IDEA_NEEDS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `INNOVATION_MANAGERS`
--

DROP TABLE IF EXISTS `INNOVATION_MANAGERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `INNOVATION_MANAGERS` (
  `MANAGER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `REQUEST_COUNT` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`MANAGER_ID`),
  KEY `INNOVATION_MANAGERS_fk0` (`NAME`),
  KEY `INNOVATION_MANAGERS_fk1` (`EMAIL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `INNOVATION_MANAGERS`
--

LOCK TABLES `INNOVATION_MANAGERS` WRITE;
/*!40000 ALTER TABLE `INNOVATION_MANAGERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `INNOVATION_MANAGERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REVIEWERS`
--

DROP TABLE IF EXISTS `REVIEWERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REVIEWERS` (
  `REVIEWER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `EXPERTIES` varchar(50) NOT NULL,
  `NUMBER_OF_REVIEWS` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`REVIEWER_ID`),
  KEY `REVIEWERS_fk0` (`NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REVIEWERS`
--

LOCK TABLES `REVIEWERS` WRITE;
/*!40000 ALTER TABLE `REVIEWERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `REVIEWERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REVIEWER_IDEA_MAPPING`
--

DROP TABLE IF EXISTS `REVIEWER_IDEA_MAPPING`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REVIEWER_IDEA_MAPPING` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `REVIEWER` varchar(100) NOT NULL,
  `IDEA_ID` bigint(20) NOT NULL,
  `REVIEW_COMMENT` varchar(200) DEFAULT NULL,
  `REVIEW_STATUS` varchar(20) DEFAULT 'PENDING',
  `REVIEW_DATE` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REVIEWER_IDEA_MAPPING`
--

LOCK TABLES `REVIEWER_IDEA_MAPPING` WRITE;
/*!40000 ALTER TABLE `REVIEWER_IDEA_MAPPING` DISABLE KEYS */;
INSERT INTO `REVIEWER_IDEA_MAPPING` VALUES (1,'jakir_shaikh',3,'','',NULL),(2,'jakir_shaikh',1,'Can be implemented','Done','2018-10-24 14:46:30'),(3,'jakir_shaikh',2,'Some more improvements can be done','Deferred','2018-10-04 15:24:50'),(4,'jakir_shaikh',4,'','',NULL),(5,'jakir_shaikh',5,'','',NULL),(6,'jakir_shaikh',6,'Idea is good, it can be implemented','Completed','2018-10-04 16:13:34'),(7,'sandeep_kedari',3,'','',NULL),(8,'sandeep_kedari',8,'','',NULL),(9,'jakir_shaikh',8,'','',NULL),(10,'sandeep_kedari',1,'','',NULL),(11,'jakir_shaikh',9,'','',NULL),(12,'jakir_shaikh',10,'','',NULL),(13,'sandeep_kedari',2,'','',NULL),(14,'sandeep_kedari',10,'','',NULL),(15,'sandeep_kedari',6,'','',NULL),(16,'jakir_shaikh',13,'','',NULL),(17,'sandeep_kedari',13,'','',NULL),(18,'sandeep_kedari',12,'','',NULL),(19,'jakir_shaikh',12,'','',NULL),(20,'sandeep_kedari',5,'','',NULL),(21,'sandeep_kedari',4,'','',NULL),(22,'jakir_shaikh',7,'','',NULL),(23,'jakir_shaikh',14,'','',NULL),(24,'sandeep_kedari',7,'','',NULL),(25,'jakir_shaikh',18,'Can be implemented.','Completed','2018-10-22 20:33:27'),(26,'sandeep_kedari',9,'','',NULL),(27,'jakir_shaikh',16,'Can add some more features.','Pending','2018-10-24 19:08:43'),(28,'jakir_shaikh',31,'this idea is good','Done','2018-10-25 14:17:04'),(29,'akansha_shrivas',33,'idea is good','Completed','2018-12-21 11:16:35'),(30,'akansha_shrivas',34,'','',NULL),(31,'akansha_shrivas',35,'','',NULL),(32,'akansha_shrivas',32,'','',NULL),(33,'akansha_shrivas',32,'','',NULL);
/*!40000 ALTER TABLE `REVIEWER_IDEA_MAPPING` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REVIEW_STATUS`
--

DROP TABLE IF EXISTS `REVIEW_STATUS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REVIEW_STATUS` (
  `STATUS` varchar(20) NOT NULL,
  PRIMARY KEY (`STATUS`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REVIEW_STATUS`
--

LOCK TABLES `REVIEW_STATUS` WRITE;
/*!40000 ALTER TABLE `REVIEW_STATUS` DISABLE KEYS */;
INSERT INTO `REVIEW_STATUS` VALUES ('Completed'),('Deferred'),('Done'),('Pending'),('Rejected');
/*!40000 ALTER TABLE `REVIEW_STATUS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ROLES`
--

DROP TABLE IF EXISTS `ROLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ROLES` (
  `ROLE` char(50) NOT NULL,
  PRIMARY KEY (`ROLE`),
  UNIQUE KEY `ROLE` (`ROLE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES`
--

LOCK TABLES `ROLES` WRITE;
/*!40000 ALTER TABLE `ROLES` DISABLE KEYS */;
INSERT INTO `ROLES` VALUES ('ADMINISTRATOR'),('INNOVATION_MANAGER'),('NORMAL'),('REVIEWER'),('USER');
/*!40000 ALTER TABLE `ROLES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TAGS`
--

DROP TABLE IF EXISTS `TAGS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TAGS` (
  `TAG` varchar(30) NOT NULL,
  `TAG_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`TAG_ID`),
  UNIQUE KEY `TAG` (`TAG`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TAGS`
--

LOCK TABLES `TAGS` WRITE;
/*!40000 ALTER TABLE `TAGS` DISABLE KEYS */;
INSERT INTO `TAGS` VALUES ('3D',2),('Automation',1),('BANKING',4),('CHEF',5),('CLOUD',6),('DEVOPS',7),('Graphics',8),('JAVA',9),('MACHINE LEARNING',10),('ML',11),('Networking',12),('Python',13),('SAVING',14),('Tensor Flow',3),('Tool',15),('WEB',16);
/*!40000 ALTER TABLE `TAGS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USERS` (
  `USER_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) NOT NULL,
  `ROLE` varchar(50) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `EMAIL` (`EMAIL`),
  UNIQUE KEY `unique_name` (`NAME`),
  KEY `USERS_fk0` (`ROLE`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS`
--

LOCK TABLES `USERS` WRITE;
/*!40000 ALTER TABLE `USERS` DISABLE KEYS */;
INSERT INTO `USERS` VALUES (1,'jakir_shaikh','INNOVATION_MANAGER','jakir_shaikh@persistent.co.in'),(2,'prabhav_gaunekar','USER','prabhav_gaunekar@persistent.co.in'),(3,'akansha_shrivas','REVIEWER','akansha_shrivas@persistent.co.in'),(4,'hemant_raisinghani','INNOVATION_MANAGER','prabhav_gaunekar@persistent.com'),(7,'admin','ADMINISTRATOR','jakirshaikh700@gmail.com'),(8,'sandeep_kedari','REVIEWER','sandeep_kedari@persistent.co.in');
/*!40000 ALTER TABLE `USERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add django migrations',7,'add_djangomigrations'),(26,'Can change django migrations',7,'change_djangomigrations'),(27,'Can delete django migrations',7,'delete_djangomigrations'),(28,'Can view django migrations',7,'view_djangomigrations'),(29,'Can add ideabox',8,'add_ideabox'),(30,'Can change ideabox',8,'change_ideabox'),(31,'Can delete ideabox',8,'delete_ideabox'),(32,'Can view ideabox',8,'view_ideabox'),(33,'Can add idea needs',9,'add_ideaneeds'),(34,'Can change idea needs',9,'change_ideaneeds'),(35,'Can delete idea needs',9,'delete_ideaneeds'),(36,'Can view idea needs',9,'view_ideaneeds'),(37,'Can add ideas',10,'add_ideas'),(38,'Can change ideas',10,'change_ideas'),(39,'Can delete ideas',10,'delete_ideas'),(40,'Can view ideas',10,'view_ideas'),(41,'Can add innovation managers',11,'add_innovationmanagers'),(42,'Can change innovation managers',11,'change_innovationmanagers'),(43,'Can delete innovation managers',11,'delete_innovationmanagers'),(44,'Can view innovation managers',11,'view_innovationmanagers'),(45,'Can add reviewers',12,'add_reviewers'),(46,'Can change reviewers',12,'change_reviewers'),(47,'Can delete reviewers',12,'delete_reviewers'),(48,'Can view reviewers',12,'view_reviewers'),(49,'Can add review status',13,'add_reviewstatus'),(50,'Can change review status',13,'change_reviewstatus'),(51,'Can delete review status',13,'delete_reviewstatus'),(52,'Can view review status',13,'view_reviewstatus'),(53,'Can add roles',14,'add_roles'),(54,'Can change roles',14,'change_roles'),(55,'Can delete roles',14,'delete_roles'),(56,'Can view roles',14,'view_roles'),(57,'Can add tags',15,'add_tags'),(58,'Can change tags',15,'change_tags'),(59,'Can delete tags',15,'delete_tags'),(60,'Can view tags',15,'view_tags'),(61,'Can add users',16,'add_users'),(62,'Can change users',16,'change_users'),(63,'Can delete users',16,'delete_users'),(64,'Can view users',16,'view_users');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(7,'DAO_API','djangomigrations'),(8,'DAO_API','ideabox'),(9,'DAO_API','ideaneeds'),(10,'DAO_API','ideas'),(11,'DAO_API','innovationmanagers'),(12,'DAO_API','reviewers'),(13,'DAO_API','reviewstatus'),(14,'DAO_API','roles'),(15,'DAO_API','tags'),(16,'DAO_API','users'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'DAO_API','0001_initial','2018-09-15 09:35:44.947576'),(2,'contenttypes','0001_initial','2018-10-17 09:28:02.715427'),(3,'auth','0001_initial','2018-10-17 09:28:03.313749'),(4,'admin','0001_initial','2018-10-17 09:28:03.476468'),(5,'admin','0002_logentry_remove_auto_add','2018-10-17 09:28:03.494858'),(6,'admin','0003_logentry_add_action_flag_choices','2018-10-17 09:28:03.517663'),(7,'contenttypes','0002_remove_content_type_name','2018-10-17 09:28:03.628941'),(8,'auth','0002_alter_permission_name_max_length','2018-10-17 09:28:03.643833'),(9,'auth','0003_alter_user_email_max_length','2018-10-17 09:28:03.664314'),(10,'auth','0004_alter_user_username_opts','2018-10-17 09:28:03.679947'),(11,'auth','0005_alter_user_last_login_null','2018-10-17 09:28:03.729897'),(12,'auth','0006_require_contenttypes_0002','2018-10-17 09:28:03.736204'),(13,'auth','0007_alter_validators_add_error_messages','2018-10-17 09:28:03.751718'),(14,'auth','0008_alter_user_username_max_length','2018-10-17 09:28:03.772355'),(15,'auth','0009_alter_user_last_name_max_length','2018-10-17 09:28:03.793221'),(16,'sessions','0001_initial','2018-10-17 09:28:03.834138');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-05 13:39:16
