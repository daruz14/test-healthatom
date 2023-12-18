-- 7 Lista de titanes con incongruencias en torno a sus fechas de muerte y avistamientos,
-- ordenados por su identificador, incrementalmente.
SELECT t.id, t.nombre, t.altura, a.fecha as fecha_avistamiento, m.fecha as fecha_muerte
FROM titanes t
LEFT JOIN avistamientos a ON t.id = a.id_titan
LEFT JOIN muertes m ON t.id = m.id_titan
WHERE 
  (a.fecha IS NULL AND m.fecha IS NOT NULL) OR
  (a.fecha IS NOT NULL AND m.fecha IS NULL) OR
  (a.fecha > m.fecha)
ORDER BY t.id;


