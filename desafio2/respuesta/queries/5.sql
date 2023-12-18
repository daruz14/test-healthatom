-- 5 Lista de recursos que se han usado (recurso, cantidad, unidad) en matar titanes
-- pequeños (<= 5 metros), agrupados por recurso y ordenados por cantidad.
SELECT r.nombre as recurso, SUM(mr.cantidad) as cantidad, r.unidad
FROM recursos r
JOIN movimientos_recursos mr ON r.id = mr.id_recurso
JOIN muertes m ON mr.id_muerte = m.id
JOIN titanes t ON m.id_titan = t.id
WHERE t.altura <= 5
GROUP BY r.id, r.nombre, r.unidad
ORDER BY cantidad DESC;
