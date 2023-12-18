-- 4 Lista de titanes que hayan sido vistos más de una vez el mismo año,
-- ordenados por nombre incrementalmente.
SELECT t.nombre, COUNT(*) as veces_visto
FROM titanes t
JOIN avistamientos a ON t.id = a.id_titan
GROUP BY t.id, t.nombre, YEAR(a.fecha)
HAVING veces_visto > 1
ORDER BY t.nombre;
