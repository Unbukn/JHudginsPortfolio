DROP DATABASE IF EXISTS portfolio_db;
CREATE DATABASE portfolio_db;
USE portfolio_db;

-- Create the table tasks.
CREATE TABLE projects
(
    id int NOT NULL AUTO_INCREMENT,
    project_title varchar(255) NOT NULL,
    project_desc varchar(255) NOT NULL,
    tech_used varchar(255) NOT NULL,
    date_created varchar(255) NOT NULL,
    img_url varchar(255) NOT NULL,
    repo_link varchar(255) NOT NULL,
    live_link varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO  projects(project_title, project_desc, tech_used, date_created, img_url, repo_link, live_link) VALUE ("sdfgsdfg", "sdfg sdf", "sdfgsdf", "sdfgsdfg", "sdfgsdfg", "sdfgsdfgsdf", "sdfgsdfgsdfg");
INSERT INTO  projects(project_title, project_desc, tech_used, date_created, img_url, repo_link, live_link) VALUE ("HTML 5 music player", "An HTML 5 Music Player", "HTML CSS JavaScript", "10 May 2020", "./Assets/Images/MusicPlayer.png", "https://github.com/Unbukn/KlazzicMusicPlayer", "https://unbukn.github.io/KlazzicMusicPlayer/");
INSERT INTO  projects(project_title, project_desc, tech_used, date_created, img_url, repo_link, live_link) VALUE ("HTML 5 music player", "An HTML 5 Music Player", "HTML CSS JavaScript", "10 May 2020", "./Assets/Images/MusicPlayer.png", "https://github.com/Unbukn/KlazzicMusicPlayer", "https://unbukn.github.io/KlazzicMusicPlayer/");



