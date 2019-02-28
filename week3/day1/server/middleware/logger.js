const color = require('colors');
/**
* Create middleware that reports information about the incoming http request
* Certain elements will be objects(body, etc), display the key value pairs
* Items to report iff they have value, use colors (an external module):
*                 method
*                 hostname
*                 ip
*                 body
*                 params
*                 protocol
*                 route
*                 path
*                 query
*/


module.exports = function (request, response, next) {
  const keys = ['method', 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query'];

  keys.forEach(function (key) {
    const data = request[key];

    if (data) {

      if (typeof data === 'object') {
        // do object stuff

        if (Object.keys(data).length) {
          console.log(color.red(`The request ${key} object has these properties: `));
          
          for (const [prop, value] of Object.entries(data)) {

            console.log(color.blue(`\t${prop} => ${value}`));
          }
        }
      } else {
        console.log(color.gray(`The request ${key } is ${ data }`))
      }
    }

  })

  next();
};

