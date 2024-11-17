CREATE DATABASE skatepark; 
CREATE TABLE skaters (
id SERIAL,
email VARCHAR(50) NOT NULL,
nombre VARCHAR(25) NOT NULL,
password VARCHAR(25) NOT NULL,
anos_experiencia INT NOT NULL,
especialidad VARCHAR(50) NOT NULL,
foto VARCHAR(255) NOT NULL,
estado BOOLEAN NOT NULL
);

INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado)
VALUES 
  ('tonyhawk@email.com', 'Tony Hawk', 'passwordTony', 12, 'Kickflip', 'img/tony.jpg', TRUE),
  ('evelien@email.com', 'Evelien Bouilliart', 'passwordEvelien', 10, 'Heelflip', 'img/Evelien.jpg', TRUE),
  ('dannyway@email.com', 'Danny Way', 'passwordDanny', 8, 'Ollie', 'img/Danny.jpg', FALSE);



DELETE FROM skaters
WHERE id IN (
  SELECT id FROM skaters
  ORDER BY id ASC
  LIMIT 5 /* ya habia gregado 5 registro */
);