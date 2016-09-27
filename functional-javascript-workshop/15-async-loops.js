/**
 * 根据 userIds 提供的 id，并行加载 user 对象
 *
 * 说明：
 * 1. load 函数接受一个数值 id 和一个 callback，在 id 指定的 user 对象加载完成之后，使用
 *    加载的 user 对象或者 null 调用 callback
 * 2. done 接受 user 对象数组，其中 user 对象顺序必须和 userIds 中指定的顺序一致
 * 3. 由于 load 是异步加载，所以没有必要返回值
 *
 * 思路：
 * 1. 异步 load 函数：在 load 的 callback 中 push user
 * 2. 保证异步加载的顺序：使用数组的 index 天然保证顺序
 * 3. 加载结束：通过计数器判断是否加载结束
 */
function loadUsers(userIds, load, done) {
  const users = [];
  let counter = 0;
  for (let i = 0; i < userIds.length; i++) {
    load(userIds[i], user => {
      if (user != null) {
        users[i] = user;  // 保证加载顺序
      }
      counter++;  // 计数器

      if (counter === userIds.length) {  // 加载结束
        done(users);
      }
    });
  }
}

module.exports = loadUsers;
