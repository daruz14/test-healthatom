-- Persona que más titanes mató durante el año 2020.

SELECT r.nombre AS responsable, COUNT(m.id) AS cantidad_titanes_matados
FROM muertes m
JOIN responsables r ON m.id_responsable = r.id
WHERE YEAR(m.fecha) = 2020
GROUP BY m.id_responsable, r.nombre
ORDER BY cantidad_titanes_matados DESC
LIMIT 1;
