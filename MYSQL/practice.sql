-- MySQL Commands with Comments

-- 1. Database Management
-- Create a new database
CREATE DATABASE SchoolDB;

-- Select a database for use
USE SchoolDB;

-- Show all databases
SHOW DATABASES;


-- 2. Table Management
-- Create a new table
CREATE TABLE Students (
    StudentID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT
);

-- Alter table to add a column
ALTER TABLE Students ADD Gender VARCHAR(10);

-- Modify an existing column
ALTER TABLE Students MODIFY COLUMN Age TINYINT;



-- Create another table for advanced examples
CREATE TABLE Courses (
    CourseID INT AUTO_INCREMENT PRIMARY KEY,
    CourseName VARCHAR(100),
    Credits INT
);

CREATE TABLE Enrollments (
    EnrollmentID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    EnrollmentDate DATE,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

-- 3. Data Manipulation
-- Insert data into a table
INSERT INTO Students (FirstName, LastName, Age) 
VALUES ('Alice', 'Smith', 20);
INSERT INTO Students (FirstName, LastName, Age) 
VALUES ('Bob', 'Brown', 22);

INSERT INTO Courses (CourseName, Credits) 
VALUES ('Math', 4), ('Science', 3);

INSERT INTO Enrollments (StudentID, CourseID, EnrollmentDate) 
VALUES (1, 1, '2024-01-01'), (2, 2, '2024-01-02');

-- Update data in a table
UPDATE Students SET Age = 21 WHERE StudentID = 1;

-- Delete data from a table
DELETE FROM Students WHERE Age < 18;

-- 4. Data Retrieval
-- Select specific columns from a table
SELECT FirstName, LastName FROM Students;

-- Use WHERE clause for filtering
SELECT * FROM Students WHERE Age > 20;

-- Sort results with ORDER BY
SELECT * FROM Students ORDER BY LastName ASC;

-- Retrieve unique values with DISTINCT
SELECT DISTINCT Age FROM Students;

-- Use LIKE for pattern matching
SELECT * FROM Students WHERE FirstName LIKE 'A%';

-- 5. Joins
-- Inner Join example
SELECT Students.FirstName, Courses.CourseName 
FROM Students 
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
INNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID;

-- Left Join example
SELECT Students.FirstName, Courses.CourseName 
FROM Students 
LEFT JOIN Enrollments ON Students.StudentID = Enrollments.StudentID;

-- Right Join example
SELECT Students.FirstName, Courses.CourseName 
FROM Students 
RIGHT JOIN Enrollments ON Students.StudentID = Enrollments.StudentID;

-- Full Outer Join simulated with UNION
SELECT Students.FirstName, Courses.CourseName 
FROM Students
LEFT JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
UNION
SELECT Students.FirstName, Courses.CourseName 
FROM Students
RIGHT JOIN Enrollments ON Students.StudentID = Enrollments.StudentID;

-- 6. Subqueries
-- Single-row subquery
SELECT * FROM Students WHERE Age = (SELECT MAX(Age) FROM Students);

-- Multi-row subquery
SELECT * FROM Students WHERE Age IN (SELECT DISTINCT Age FROM Students);

-- Correlated subquery
SELECT * FROM Students s WHERE Age > (SELECT AVG(Age) FROM Students WHERE s.StudentID <> StudentID);

-- 7. Aggregate Functions
-- Count, Average, and other aggregate functions
SELECT COUNT(*) AS TotalStudents, AVG(Age) AS AverageAge FROM Students;

-- 8. Grouping and Filtering
-- Group by example
SELECT Gender, AVG(Age) AS AverageAge 
FROM Students 
GROUP BY Gender;

-- Having clause example
SELECT Gender, AVG(Age) AS AverageAge 
FROM Students 
GROUP BY Gender 
HAVING AVG(Age) > 20;

-- 9. Transactions
-- Begin, commit, and rollback transactions
START TRANSACTION;
UPDATE Students SET Age = Age + 1 WHERE StudentID = 2;
ROLLBACK; -- Cancel the transaction

START TRANSACTION;
UPDATE Students SET Age = Age + 1 WHERE StudentID = 2;
COMMIT; -- Save the transaction

-- 10. Views
-- Create a view
CREATE VIEW StudentCourses AS
SELECT Students.FirstName, Students.LastName, Courses.CourseName
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
INNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID;

-- 11. Indexes
-- Create an index
CREATE INDEX idx_age ON Students(Age);

-- Drop an index
DROP INDEX idx_age ON Students;

-- 12. Backup and Restore
-- (Commands to be used in MySQL CLI)
-- mysqldump -u username -p database_name > backup_file.sql
-- mysql -u username -p database_name < backup_file.sql

-- 13. User and Permissions
-- Create a new user
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

-- Grant permissions to the user
GRANT ALL PRIVILEGES ON SchoolDB.* TO 'username'@'localhost';

-- Revoke permissions from the user
REVOKE ALL PRIVILEGES ON SchoolDB.* FROM 'username'@'localhost';

-- Drop a database
DROP DATABASE SchoolDB;


-- Drop a table
DROP TABLE Students;

-- Drop a column
ALTER TABLE Students DROP COLUMN Gender;
