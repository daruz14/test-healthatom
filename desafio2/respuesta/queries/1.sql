-- 1 Nombre, altura, y fecha de muerte de todos los titanes que hayan muerto por “Accidente”,
-- ordenados cronológicamente.

SELECT t.nombre, t.altura, m.fecha
FROM titanes t
JOIN muertes m ON t.id = m.id_titan
WHERE m.causa = 'Accidente'
ORDER BY m.fecha;