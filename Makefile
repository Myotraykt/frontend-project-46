install:
	npm ci

gendiff:
	node bin/gendiff.js file1.json file2.json

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest