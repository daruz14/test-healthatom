-- 2 Nombre y altura del titán más alto que haya matado el “Batallón 1”.
SELECT t.nombre, t.altura, t.id
FROM titanes t
JOIN (SELECT * FROM muertes WHERE causa = 'Batallón 1') m ON t.id = m.id_titan
ORDER BY t.altura DESC
LIMIT 1;
