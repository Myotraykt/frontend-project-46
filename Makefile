install:
	npm ci

publish:
	npm publish --dry-run

help:
	node bin/gendiff.js -h

runStylish:
	node bin/gendiff.js '__fixtures__/file1.json' '__fixtures__/file2.json' --format stylish

gendiff yml:
	node bin/gendiff.js __fixtures__/file1.yml __fixtures__/file2.yml

publish:
	npm publish --dry-run

lint:
	npx eslint

lint-fix:
	npx eslint --fix

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest