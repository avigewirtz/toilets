import productJson from './product.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
  // Filter based on the given tag
  const filtered = productJson.filter((item) => {
    // Check if the item's tags include the filter tag
    return item.tags.includes(tag);
  });
  // Return the sliced array based on the count
  return filtered.slice(0, count);
}



function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

export { generateMockProductData, generateMockBlogData };
