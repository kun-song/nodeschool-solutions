
------------------------------------------------------------
-- Creates first user, password is 'secret'
------------------------------------------------------------

INSERT INTO users (uname, role, username, password, os) VALUES
 ('100.130.127.11', '长稳', 'admin', 'Admin@123', 'UNIX')
 ,('100.130.127.12', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.13', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.14', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.15', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.16', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.17', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.18', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.19', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.20', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.21', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.22', '自动化', 'admin', 'Admin@storage', 'Windows')
;

------------------------------------------------------------
-- Create some users, password is always 'secret'
------------------------------------------------------------
--
-- INSERT INTO users (uname, digest, username, password, os) VALUES
-- ('100.10.12.11', '3', 'admin', 'Huawei@123', 'Eular');

-- INSERT INTO users (uname, digest)
--   SELECT
--     'user-' || x.id,
--     '$2a$12$3InPKSvlWwgLHYVxvJpaMeXDZF/.hhoiYMv72xydoqm3Pg58Emrwm'
--   FROM generate_series(1, 1000) AS x(id)
-- ;

-- ------------------------------------------------------------
-- -- Create some messages
-- ------------------------------------------------------------
--
-- INSERT INTO messages (user_id, markup, ip_address)
--   SELECT
--     trunc(random() * 1000 + 1), -- Random int [1, 1000]
--     'Seeded message ' || x.id,
--     '1.2.3.4'::inet
--   FROM generate_series(1, 1000) AS x(id)
-- ;
--
-- INSERT INTO messages (user_id, markup, ip_address) VALUES
-- (null, 'This is an anonymous message!', '1.2.3.4'::inet)
-- ;
