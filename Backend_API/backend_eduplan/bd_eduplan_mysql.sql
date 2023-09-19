CREATE DATABASE bancodedados_eduplan;
USE bancodedados_eduplan;


-- Tabela de usuários
CREATE TABLE Users (
  UserID INT PRIMARY KEY AUTO_INCREMENT,
  Name VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  StudyHoursPerDay INT NOT NULL,
  CanStudyWeekends BOOLEAN NOT NULL
  );
  
  -- Tabela de Assuntos
  CREATE TABLE Subjects (
  SubjectID INT PRIMARY KEY AUTO_INCREMENT,
  UserID INT,
  SubjectName VARCHAR(255) NOT NULL,
  Importance INT NOT NULL,
  Difficulty INT NOT NULL,
  FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


-- Tabela de Plano de Estudo
CREATE TABLE StudyPlans (
  PlanID INT PRIMARY KEY AUTO_INCREMENT,
  UserID INT,
  StudyDate DATE NOT NULL,
  SubjectID INT,
  StudyHours INT NOT NULL,
  IsReviewDay BOOLEAN NOT NULL,
  FOREIGN KEY (UserID) REFERENCES Users(UserID),
  FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
);