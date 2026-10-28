module.exports = function tomlSourceLoader(source) {
  return `export default ${JSON.stringify(source.toString())};`;
};
