CREATE TABLE `gebruiker` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `gebruiker_type_id` int NOT NULL,
  `naam` varchar(255) NOT NULL,
  `achternaam` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `jaar_inschrijving` int,
  `telefoon` int,
  `adres` varchar(255),
  `wachtwoord` varchar(255) NOT NULL
);

CREATE TABLE `type` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL
);

CREATE TABLE `vak` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) NOT NULL
);

CREATE TABLE `klas` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) NOT NULL,
  `jaar` int NOT NULL,
  `klassendocent_id` int NOT NULL
);

CREATE TABLE `roadmap` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) NOT NULL,
  `start_datum` date,
  `eind_datum` date,
  `punten` int
);

CREATE TABLE `assignment` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `roadmap_id` int,
  `vak_id` varchar(255) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `start_datum` date,
  `inlever_datum` date,
  `herkansingspunten` int
);

CREATE TABLE `resultaat` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `assignment_id` int,
  `student_id` int,
  `status` varchar(255) NOT NULL,
  `type` varchar(255)
);

ALTER TABLE `gebruiker` ADD FOREIGN KEY (`gebruiker_type_id`) REFERENCES `type` (`id`);

ALTER TABLE `klas` ADD FOREIGN KEY (`klassendocent_id`) REFERENCES `gebruiker` (`id`);

ALTER TABLE `assignment` ADD FOREIGN KEY (`roadmap_id`) REFERENCES `roadmap` (`id`);

ALTER TABLE `assignment` ADD FOREIGN KEY (`vak_id`) REFERENCES `vak` (`id`);

ALTER TABLE `resultaat` ADD FOREIGN KEY (`assignment_id`) REFERENCES `assignment` (`id`);

ALTER TABLE `resultaat` ADD FOREIGN KEY (`student_id`) REFERENCES `gebruiker` (`id`);
