import _ from 'lodash';

const compareDeep = (obj1, obj2) => {
  const newObj = _.union(_.keys(obj1), _.keys(obj2));
  const sortKeys = _.sortBy(newObj);

  return sortKeys.map((key) => {
    const value1 = _.has(obj1, key) ? obj1[key] : undefined;
    const value2 = _.has(obj2, key) ? obj2[key] : undefined;

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        key,
        children: compareDeep(value1, value2),
        type: 'nested',
      };
    }

    if (!_.has(obj1, key)) {
      return {
        key,
        value: value2,
        type: 'added',
      };
    }

    if (!_.has(obj2, key)) {
      return {
        key,
        value: value1,
        type: 'deleted',
      };
    }

    if (!_.isEqual(value1, value2)) {
      return {
        key,
        value1,
        value2,
        type: 'changed',
      };
    }

    return {
      key,
      value: value1,
      type: 'unchanged',
    };
  });
};

export default compareDeep;
