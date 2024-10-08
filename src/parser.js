import fs from 'fs';
import path from 'path';

const parseJsonFile = (filepath) => {
    const absolutePath = path.isAbsolute(filepath)
    ? filepath
    : path.resolve(process.cwd(), filepath);
    const data = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(data);
};

export default parseJsonFile;