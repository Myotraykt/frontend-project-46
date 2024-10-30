import stylish from '../formatters/stylish.js';

const formatter = (node, format) => {
  switch (format) {
    case 'stylish':
      return stylish(node);
    case 'json':
      return JSON.stringify(node);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default formatter;