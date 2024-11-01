install:
	npm ci

publish:
	npm publish --dry-run

help:
	node bin/gendiff.js -h

runStylish:
	gendiff '__fixtures__/file1.json' '__fixtures__/file2.json' --format stylish

runPlain:
	node bin/gendiff.js '__fixtures__/file1.json' '__fixtures__/file2.json' --format plain

runJson:
	gendiff '__fixtures__/file1.json' '__fixtures__/file2.json' --format json

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test:
	npm test --watchAll
	npx jest --coverage

test-coverage:
	npm test --coverage --coverageProvider=v8