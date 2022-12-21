.PHONY: run run-dev run-dynamic run-static
.DEFAULT_GOAL := build

run:
	ng serve

run-dev:
	npm run dev:ssr

run-dynamic:
	npm run build:ssr && npm run serve:ssr

run-static:
	npm run build:prerender && npm run serve:prerender

clean:
	rm -fr .angular
	rm -fr dist
	rm -fr node_modules
	rm -fr .vscode

docker-build:
	docker build --platform amd64 -t t00-web:local .

docker-run:
	docker run --rm -p 4000:4000 t00-web:local