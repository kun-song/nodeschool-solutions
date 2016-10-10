
------------------------------------------------------------
-- Creates first user, password is 'secret'
------------------------------------------------------------

INSERT INTO users (uname, role, username, password, os) VALUES
 ('100.130.177.142', '常规', 'admin', 'Admin@123', 'UNIX')
 ,('100.130.177.143', '常规', 'admin', 'Admin@123', 'UNIX')
 ,('100.130.177.144', '常规', 'admin', 'Admin@123', 'UNIX')
 ,('100.130.177.145', '常规', 'admin', 'Admin@123', 'UNIX')
 ,('100.130.177.138', '常规', 'admin', 'Admin@storage', '')
 ,('100.130.177.139', '常规', 'admin', 'Admin@storage', '')
 ,('100.130.127.140', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.141', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.163', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.127.164', '自动化', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.242.66', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.242.67', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.177.146', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.177.147', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.241.26', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.241.27', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.241.24', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.241.87', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.241.88', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.242.38', '常规', 'admin', 'Admin@storage', 'Windows')
 ,('100.130.242.39', '常规', 'admin', 'Admin@storage', 'Windows')
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
