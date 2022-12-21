.PHONY: run run-dev run-prd
.DEFAULT_GOAL := build

run:
	ng serve

run-dev:
	npm run dev:ssr

run-prd:
	npm run build:ssr && npm run serve:ssr

clean:
	rm -fr .angular
	rm -fr .vscode
	rm -fr dist
	rm -fr node_modules
