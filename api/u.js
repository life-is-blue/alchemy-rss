const crypto = require('crypto');
const links = require('../data/links.json');

let linksMap = {};

links.forEach((item) => {
  item.items.forEach((ite) => {
    const md5 = crypto.createHash('md5');
    const result = md5.update(ite.link).digest('hex');

    linksMap[result] = ite.link;
  });
});

module.exports = (req, res) => {

  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  let link = '/';



  if(id && (id in linksMap)){

    link = linksMap[id];

  }



  res.redirect(301, link);

}
