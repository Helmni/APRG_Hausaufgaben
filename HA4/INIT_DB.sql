/* Initiallisiert die Datenbank */

CREATE TABLE studierende (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    matrikelnummer TEXT NOT NULL,
    vorname TEXT NOT NULL,
    nachname TEXT NOT NULL,
    email TEXT NOT NULL,
    semester TEXT NOT NULL
);

/* Datensätzehinzufügen */

INSERT INTO studierende (matrikelnummer, vorname, nachname, email, semester) VALUES ('1234ABCD', 'Max', 'Mustermann', 'max-mustermann@haw-hamburg.de', '4');
INSERT INTO studierende (matrikelnummer, vorname, nachname, email, semester) VALUES ('1678ABCD', 'Jan', 'Müller', 'Jan-müller@haw-hamburg.de', '3');
INSERT INTO studierende (matrikelnummer, vorname, nachname, email, semester) VALUES ('4578ABCD', 'Tom', 'Schneider', 'Tom-Schneider@haw-hamburg.de', '5');