import productJson from './product.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
  // Logging to show which tag is being used for filtering
  console.log('Tag used for filtering:', tag);

  // Logging to show the initial productJson data
  console.log('Initial productJson:', productJson);

  // Filter based on the given tag
  const filtered = productJson.filter((item) => {
    // Logging to display the tags for each item being inspected
    console.log(`Item tags: ${item.tags}`);

    // Check if the item's tags include the filter tag
    return item.tags.includes(tag);
  });

  // Logging to show the filtered products based on the tag
  console.log('Filtered products:', filtered);

  // Return the sliced array based on the count
  return filtered.slice(0, count);
}



function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

export { generateMockProductData, generateMockBlogData };
