-- Crear tabla de responsables
CREATE TABLE IF NOT EXISTS `responsables` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Modificamos la tabla de avistamientos para incluir el id del responsable y fecha del reporte
ALTER TABLE `avistamientos`
-- Si agregamos el column not null nos pedira que tenga un id válido los registros anteriores
ADD COLUMN `id_responsable` INT(11) NOT NULL,
-- Si agregamos el column not null nos pedira que tenga una fecha los registros anteriores
ADD COLUMN `fecha_reporte` DATETIME NOT NULL,
ADD CONSTRAINT `avistamientos_id_responsable` FOREIGN KEY (`id_responsable`) REFERENCES `responsables` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Modificamos la tabla de movimientos_recursos para incluir el id del responsable de la gestión del recurso
ALTER TABLE `movimientos_recursos`
-- Si agregamos el column not null nos pedira que tenga un id válido los registros anteriores
ADD COLUMN `id_responsable` INT(11) NOT NULL,
ADD CONSTRAINT `movimientos_recursos_id_responsable` FOREIGN KEY (`id_responsable`) REFERENCES `responsables` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Modificamos la tabla de muertes para incluir el id de responsable de la ejecución de la muerte
ALTER TABLE `muertes`
-- Si agregamos el column not null nos pedira que tenga un id válido los registros anteriores
ADD COLUMN `id_responsable` INT(11) NOT NULL,
ADD CONSTRAINT `muertes_id_responsable` FOREIGN KEY (`id_responsable`) REFERENCES `responsables` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
