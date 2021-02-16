-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Fev-2021 às 10:53
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbapisamel`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `atendimentos`
--

CREATE TABLE `atendimentos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataAtendimento` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MedicoId` int(11) DEFAULT NULL,
  `PacienteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `atendimentos`
--

INSERT INTO `atendimentos` (`id`, `descricao`, `dataAtendimento`, `createdAt`, `updatedAt`, `MedicoId`, `PacienteId`) VALUES
(1, 'Atendimento Preferencial', '2021-02-12 04:00:00', '2021-02-16 07:13:07', '2021-02-16 07:13:07', 1, 1),
(2, 'Cirugia Simples', '2021-02-16 00:00:00', '2021-02-16 07:31:30', '2021-02-16 07:31:30', 1, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `especializacaomedicas`
--

CREATE TABLE `especializacaomedicas` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `especializacaomedicas`
--

INSERT INTO `especializacaomedicas` (`id`, `nome`, `createdAt`, `updatedAt`) VALUES
(1, 'Clínico Geral', '2021-02-16 07:23:34', '2021-02-16 07:23:34');

-- --------------------------------------------------------

--
-- Estrutura da tabela `especializacaos`
--

CREATE TABLE `especializacaos` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `especializacaoMedicaId` int(11) DEFAULT NULL,
  `MedicoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `especializacaos`
--

INSERT INTO `especializacaos` (`id`, `createdAt`, `updatedAt`, `especializacaoMedicaId`, `MedicoId`) VALUES
(1, '2021-02-16 07:23:41', '2021-02-16 07:23:41', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `medicos`
--

CREATE TABLE `medicos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crm` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `medicos`
--

INSERT INTO `medicos` (`id`, `nome`, `sexo`, `telefone`, `crm`, `createdAt`, `updatedAt`) VALUES
(1, 'Glenda Pereira da Costa', 'F', '99112-9999', 'CRM123', '2021-02-16 07:02:45', '2021-02-16 07:02:45'),
(2, 'Pablo Santos', 'M', '9898988', 'CD125', '2021-02-16 07:27:25', '2021-02-16 07:27:25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `pacientes`
--

INSERT INTO `pacientes` (`id`, `nome`, `sexo`, `telefone`, `createdAt`, `updatedAt`) VALUES
(1, 'Demilson Pereira', 'Masculino', '99999-1111', '2021-02-16 07:02:57', '2021-02-16 07:02:57'),
(2, 'Fulano Silva', 'M', '9895959', '2021-02-16 07:27:43', '2021-02-16 07:27:43');

-- --------------------------------------------------------

--
-- Estrutura da tabela `planos`
--

CREATE TABLE `planos` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PacienteId` int(11) DEFAULT NULL,
  `planoSaudeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `planosaudes`
--

CREATE TABLE `planosaudes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `atendimentos`
--
ALTER TABLE `atendimentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MedicoId` (`MedicoId`),
  ADD KEY `PacienteId` (`PacienteId`);

--
-- Índices para tabela `especializacaomedicas`
--
ALTER TABLE `especializacaomedicas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `especializacaos`
--
ALTER TABLE `especializacaos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `especializacaoMedicaId` (`especializacaoMedicaId`),
  ADD KEY `MedicoId` (`MedicoId`);

--
-- Índices para tabela `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `planos`
--
ALTER TABLE `planos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PacienteId` (`PacienteId`),
  ADD KEY `planoSaudeId` (`planoSaudeId`);

--
-- Índices para tabela `planosaudes`
--
ALTER TABLE `planosaudes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `atendimentos`
--
ALTER TABLE `atendimentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `especializacaomedicas`
--
ALTER TABLE `especializacaomedicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `especializacaos`
--
ALTER TABLE `especializacaos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `medicos`
--
ALTER TABLE `medicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `planos`
--
ALTER TABLE `planos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `planosaudes`
--
ALTER TABLE `planosaudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `atendimentos`
--
ALTER TABLE `atendimentos`
  ADD CONSTRAINT `atendimentos_ibfk_1` FOREIGN KEY (`MedicoId`) REFERENCES `medicos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `atendimentos_ibfk_2` FOREIGN KEY (`PacienteId`) REFERENCES `pacientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `especializacaos`
--
ALTER TABLE `especializacaos`
  ADD CONSTRAINT `especializacaos_ibfk_1` FOREIGN KEY (`especializacaoMedicaId`) REFERENCES `especializacaomedicas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `especializacaos_ibfk_2` FOREIGN KEY (`MedicoId`) REFERENCES `medicos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `planos`
--
ALTER TABLE `planos`
  ADD CONSTRAINT `planos_ibfk_1` FOREIGN KEY (`PacienteId`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `planos_ibfk_2` FOREIGN KEY (`planoSaudeId`) REFERENCES `planosaudes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
