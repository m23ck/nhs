-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2020 at 04:35 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nhs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `id` int(11) NOT NULL,
  `roadmap_id` int(11) DEFAULT NULL,
  `vak_id` varchar(255) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `start_datum` date DEFAULT NULL,
  `inlever_datum` date DEFAULT NULL,
  `herkansingspunten` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gebruiker`
--

CREATE TABLE `gebruiker` (
  `id` int(11) NOT NULL,
  `gebruiker_type_id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `voornaam` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cohort` int(11) DEFAULT NULL,
  `telefoon` int(11) DEFAULT NULL,
  `adres` varchar(255) DEFAULT NULL,
  `wachtwoord` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gebruiker`
--

INSERT INTO `gebruiker` (`id`, `gebruiker_type_id`, `naam`, `voornaam`, `email`, `cohort`, `telefoon`, `adres`, `wachtwoord`) VALUES
(1, 1, 'Mack', 'Andojo', 'andojomack@gmail.com', 2016, 7254402, 'Mahadew Missierweg 43', '$2b$10$OTQrz6HNEuJvfr71UFgS3OPq1EfH..2Adozud9la3YjyqAC3Jt9WO');

-- --------------------------------------------------------

--
-- Table structure for table `klas`
--

CREATE TABLE `klas` (
  `id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `jaar` int(11) NOT NULL,
  `klassendocent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `resultaat`
--

CREATE TABLE `resultaat` (
  `id` int(11) NOT NULL,
  `assignment_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roadmap`
--

CREATE TABLE `roadmap` (
  `id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `start_datum` date DEFAULT NULL,
  `eind_datum` date DEFAULT NULL,
  `punten` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id`, `type`) VALUES
(1, 'admin'),
(2, 'docent'),
(3, 'student');

-- --------------------------------------------------------

--
-- Table structure for table `vak`
--

CREATE TABLE `vak` (
  `id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roadmap_id` (`roadmap_id`);

--
-- Indexes for table `gebruiker`
--
ALTER TABLE `gebruiker`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gebruiker_type_id` (`gebruiker_type_id`);

--
-- Indexes for table `klas`
--
ALTER TABLE `klas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `klassendocent_id` (`klassendocent_id`);

--
-- Indexes for table `resultaat`
--
ALTER TABLE `resultaat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roadmap`
--
ALTER TABLE `roadmap`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vak`
--
ALTER TABLE `vak`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gebruiker`
--
ALTER TABLE `gebruiker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `klas`
--
ALTER TABLE `klas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `resultaat`
--
ALTER TABLE `resultaat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roadmap`
--
ALTER TABLE `roadmap`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `vak`
--
ALTER TABLE `vak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assignment`
--
ALTER TABLE `assignment`
  ADD CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`roadmap_id`) REFERENCES `roadmap` (`id`);

--
-- Constraints for table `gebruiker`
--
ALTER TABLE `gebruiker`
  ADD CONSTRAINT `gebruiker_ibfk_1` FOREIGN KEY (`gebruiker_type_id`) REFERENCES `type` (`id`);

--
-- Constraints for table `klas`
--
ALTER TABLE `klas`
  ADD CONSTRAINT `klas_ibfk_1` FOREIGN KEY (`klassendocent_id`) REFERENCES `gebruiker` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
