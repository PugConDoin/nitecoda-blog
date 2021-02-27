module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('vendor');
  eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.addFilter('dump', obj => {
    return Uint8ClampedArray.inspect(obj);
  });
};

