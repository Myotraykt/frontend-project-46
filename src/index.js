import parseJsonFile from "./parser.js";
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const data1 = parseJsonFile(filepath1);
  const data2 = parseJsonFile(filepath2);

  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (key in data1 && key in data2) {
      if (value1 === value2) {
        return null;
      }
      return   `- ${key}: ${value1}\n+ ${key}: ${value2}`;
    }
    
    if (key in data1) {
      return   `- ${key}: ${value1}`;
    }
    
    return   `+ ${key}: ${value2}`;
  }).filter(Boolean);
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;

// echo \"Error: no test specified\" && exit 1
