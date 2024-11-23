
CREATE TABLE admins (
id SERIAL PRIMARY KEY,
email VARCHAR(50) NOT NULL,
nombre VARCHAR(25) NOT NULL,
password VARCHAR(100) NOT NULL,
rol INTEGER NOT NULL,
CONSTRAINT fk_admins_roles FOREIGN KEY (rol) REFERENCES roles(id)
);


INSERT INTO admins(email,nombre,password)
VALUES('email_admind1@mail.com','adminuno','passworduno');
INSERT INTO admins(email,nombre,password)
VALUES('email_admind2@mail.com','admindos','passwordtres');
INSERT INTO admins(email,nombre,password)
VALUES('email_admind2@mail.com','admindos','passwortres');
select * from admins