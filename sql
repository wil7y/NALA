ALTER TABLE arch_patient
ADD COLUMN analyse_biologiques TEXT,
ADD COLUMN capteurs TEXT;
DESCRIBE arch_patient;
INSERT INTO arch_patient (nom, analyse_biologiques, capteurs)
VALUES ('Dupont', 'Hémogramme complet', 'Capteur ECG');
