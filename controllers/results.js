const express = require("express");

function list(req, res, next) {
  const n1 = req.param('n1');
  const n2 = req.param('n2');
  const result=parseInt(n1)+parseInt(n2);
  res.send(''+result);
}

function create(req, res, next) {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  const result = n1 * n2;
  res.send(''+result);
}
function replace(req, res, next) {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  res.send(''+n1 / n2);
}
function update(req, res, next) {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  res.send(''+n1 ** n2);
}
function destroy(req, res, next) {
    const n1 = req.param('n1');
    const n2 = req.param('n2');
    const result=parseInt(n1)-parseInt(n2);
  res.send(''+result);
}

module.exports = { list, create, replace, update, destroy };
