delete from house
where property_id = $1;

select *
from house;
