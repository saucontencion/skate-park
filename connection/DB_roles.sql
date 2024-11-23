CREATE TABLE roles(
    id SERIAL,
    role VARCHAR,
    CONSTRAINT pk_roles PRIMARY KEY (id)
);

INSERT INTO roles(role)
VALUES('ROLE_ADMIN');
INSERT INTO roles(role)
VALUES('ROLE_participante');
INSERT INTO roles(role)
VALUES('ROLE_VISIT');