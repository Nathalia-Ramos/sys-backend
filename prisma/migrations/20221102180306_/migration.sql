-- CreateTable
CREATE TABLE `tblpaciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_paciente` VARCHAR(500) NOT NULL,
    `telefone_paciente` VARCHAR(20) NOT NULL,
    `celular_paciente` VARCHAR(20) NOT NULL,
    `email_paciente` VARCHAR(200) NOT NULL,
    `nome_responsavel` VARCHAR(500) NOT NULL,
    `telefone_responsavel` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `tblpaciente_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
