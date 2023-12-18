-- 6 Recurso que se utiliza más comúnmente para matar titanes de 9 metros, ordenado
-- por cantidad de usos descendiente.
SELECT r.nombre as recurso, COUNT(*) as cantidad_usos
FROM recursos r
JOIN movimientos_recursos mr ON r.id = mr.id_recurso
JOIN muertes m ON mr.id_muerte = m.id
JOIN titanes t ON m.id_titan = t.id
WHERE t.altura = 9
GROUP BY r.id, r.nombre
ORDER BY cantidad_usos DESC
LIMIT 1;
