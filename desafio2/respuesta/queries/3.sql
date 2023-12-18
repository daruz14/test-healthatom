-- 3 Nombre y altura de titanes que no se han podido matar aún, junto con
-- su último avistamiento (más reciente), ordenados por altura incrementalmente.

-- V1
SELECT s.nombre, s.altura, MAX(a.fecha) as ultimo_avistamiento 
from (
    SELECT t.id, t.nombre, t.altura
    from titanes t
    left join muertes m on t.id = m.id_titan
    where m.id_titan is null
) as s
left join avistamientos a on s.id = a.id_titan
group by s.id, s.nombre, s.altura
order by s.altura;


-- v2
SELECT t.nombre, t.altura, MAX(a.fecha) as ultimo_avistamiento
FROM titanes t
LEFT JOIN avistamientos a ON t.id = a.id_titan
WHERE t.id NOT IN (SELECT id_titan FROM muertes)
GROUP BY t.id, t.nombre, t.altura
ORDER BY t.altura;
