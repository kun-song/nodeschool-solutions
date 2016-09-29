/**
 * 递归解析依赖
 *
 var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }
 */
function getDependencies(mod, result) {
  result = result || [];
  var dependencies = mod.dependencies || {};

  Object.keys(dependencies).forEach(dep => {
    const item = dep + '@' + dependencies[dep].version;

    if(! result.includes(item)) {
      result.push(item);
    }
    getDependencies(dependencies[dep], result);
  });
  return result.sort();
}

module.exports = getDependencies;
