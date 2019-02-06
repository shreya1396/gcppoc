CREATE TABLE `USERS` (
	`USER_ID` bigint NOT NULL AUTO_INCREMENT,
	`NAME` varchar(50) NOT NULL,
	`ROLE` varchar(50) NOT NULL,
	`EMAIL` varchar(50) NOT NULL UNIQUE,
	PRIMARY KEY (`USER_ID`)
);

CREATE TABLE `ROLES` (
	`ROLE` char(50) NOT NULL UNIQUE,
	PRIMARY KEY (`ROLE`)
);

CREATE TABLE `IDEAS` (
	`ID` bigint NOT NULL AUTO_INCREMENT,
	`IDEA_TITLE` varchar(100) NOT NULL,
	`IDEA_DESCRIPTION` varchar(500) NOT NULL,
	`IDEA_OWNER` varchar(50) NOT NULL,
	`TAGS` varchar(50) NOT NULL,
	`SUBMISSION_DATE` DATETIME NOT NULL,
	`UPDATE_DATE` DATETIME NOT NULL,
	`CATEGORY` varchar(50) NOT NULL,
	`SUBMITTED_AGAINST` bigint NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `REVIEWERS` (
	`REVIEWER_ID` int NOT NULL AUTO_INCREMENT,
	`NAME` varchar(50) NOT NULL,
	`EMAIL` varchar(50) NOT NULL,
	`EXPERTIES` varchar(50) NOT NULL,
	`NUMBER_OF_REVIEWS` int NOT NULL DEFAULT '0',
	PRIMARY KEY (`REVIEWER_ID`)
);

CREATE TABLE `TAGS` (
	`TAG` varchar(30) NOT NULL UNIQUE,
	`TAG_ID` bigint NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`TAG_ID`)
);

CREATE TABLE `INNOVATION_MANAGERS` (
	`MANAGER_ID` int NOT NULL AUTO_INCREMENT,
	`NAME` varchar(50) NOT NULL,
	`EMAIL` varchar(50) NOT NULL,
	`REQUEST_COUNT` int NOT NULL DEFAULT '0',
	PRIMARY KEY (`MANAGER_ID`)
);

CREATE TABLE `REVIEW_STATUS` (
	`STATUS` varchar(20) NOT NULL,
	PRIMARY KEY (`STATUS`)
);

CREATE TABLE `IDEABOX` (
	`TYPE` varchar(50) NOT NULL,
	PRIMARY KEY (`TYPE`)
);

CREATE TABLE `IDEA_NEEDS` (
	`ID` bigint NOT NULL AUTO_INCREMENT,
	`REQUIREMENT` varchar(100) NOT NULL,
	`DESCRIPTION` varchar(200),
	`IDEA_BOX` varchar(200) NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `Auth` (
	`username` varchar(100) NOT NULL AUTO_INCREMENT,
	`password` varchar(100) NOT NULL,
	PRIMARY KEY (`username`)
);

CREATE TABLE `BOX_OWNER` (
	`ID` bigint NOT NULL AUTO_INCREMENT,
	`INNOVATION_MANAGER_NAME` varchar(100) NOT NULL,
	`IDEA_BOX` varchar(50) NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `REVIEWER_IDEA_MAPPING` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`REVIEWER` varchar(100) NOT NULL,
	`IDEA_ID` bigint NOT NULL,
	`REVIEW_COMMENT` varchar(200),
	`REVIEW_STATUS` varchar(20) DEFAULT 'PENDING',
	`REVIEW_DATE` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `DECISION` (
	`ID` bigint NOT NULL AUTO_INCREMENT,
	`IDEA_ID` bigint NOT NULL,
	`DECISION` varchar(50) NOT NULL,
	`COMMENT` varchar(200),
	`NEED_ID` bigint NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `DECISION_STATUS` (
	`VALUE` varchar(50) NOT NULL,
	PRIMARY KEY (`VALUE`)
);

ALTER TABLE `USERS` ADD CONSTRAINT `USERS_fk0` FOREIGN KEY (`ROLE`) REFERENCES `ROLES`(`ROLE`);

ALTER TABLE `IDEAS` ADD CONSTRAINT `IDEAS_fk0` FOREIGN KEY (`IDEA_OWNER`) REFERENCES `USERS`(`NAME`);

ALTER TABLE `IDEAS` ADD CONSTRAINT `IDEAS_fk1` FOREIGN KEY (`CATEGORY`) REFERENCES `IDEABOX`(`TYPE`);

ALTER TABLE `IDEAS` ADD CONSTRAINT `IDEAS_fk2` FOREIGN KEY (`SUBMITTED_AGAINST`) REFERENCES `IDEA_NEEDS`(`ID`);

ALTER TABLE `REVIEWERS` ADD CONSTRAINT `REVIEWERS_fk0` FOREIGN KEY (`NAME`) REFERENCES `USERS`(`NAME`);

ALTER TABLE `INNOVATION_MANAGERS` ADD CONSTRAINT `INNOVATION_MANAGERS_fk0` FOREIGN KEY (`NAME`) REFERENCES `USERS`(`NAME`);

ALTER TABLE `INNOVATION_MANAGERS` ADD CONSTRAINT `INNOVATION_MANAGERS_fk1` FOREIGN KEY (`EMAIL`) REFERENCES `USERS`(`EMAIL`);

ALTER TABLE `IDEA_NEEDS` ADD CONSTRAINT `IDEA_NEEDS_fk0` FOREIGN KEY (`IDEA_BOX`) REFERENCES `IDEABOX`(`TYPE`);

ALTER TABLE `BOX_OWNER` ADD CONSTRAINT `BOX_OWNER_fk0` FOREIGN KEY (`IDEA_BOX`) REFERENCES `IDEABOX`(`TYPE`);

ALTER TABLE `REVIEWER_IDEA_MAPPING` ADD CONSTRAINT `REVIEWER_IDEA_MAPPING_fk0` FOREIGN KEY (`IDEA_ID`) REFERENCES `IDEAS`(`ID`);

ALTER TABLE `REVIEWER_IDEA_MAPPING` ADD CONSTRAINT `REVIEWER_IDEA_MAPPING_fk1` FOREIGN KEY (`REVIEW_STATUS`) REFERENCES `REVIEW_STATUS`(`STATUS`);

ALTER TABLE `DECISION` ADD CONSTRAINT `DECISION_fk0` FOREIGN KEY (`IDEA_ID`) REFERENCES `IDEAS`(`ID`);

ALTER TABLE `DECISION` ADD CONSTRAINT `DECISION_fk1` FOREIGN KEY (`DECISION`) REFERENCES `DECISION_STATUS`(`VALUE`);

ALTER TABLE `DECISION` ADD CONSTRAINT `DECISION_fk2` FOREIGN KEY (`NEED_ID`) REFERENCES `IDEAS`(`SUBMITTED_AGAINST`);
