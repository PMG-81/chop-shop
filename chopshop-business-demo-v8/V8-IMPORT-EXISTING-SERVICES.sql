-- Chop Shop V8: Run once in Supabase SQL Editor to import the original displayed services
-- Only adds an original service if no matching service already exists.
insert into public.services (name,description,price_text,duration_text,display_order,is_visible)
select v.name,v.description,v.price_text,v.duration_text,v.display_order,true
from (values
('Fade or Regular Haircut', 'Detailed men''s haircut with optional eyebrows', '$30', '45 minutes', 1),
('Fade & Beard Trim', 'Haircut & beard with optional hot towel and eyebrows', '$40', '45 minutes', 2),
('Beard w/ Optional Hot Towel', 'Beard service', '$15', '30 minutes', 3)
) as v(name,description,price_text,duration_text,display_order)
where not exists (select 1 from public.services s where lower(s.name)=lower(v.name));
