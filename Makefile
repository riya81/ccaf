.PHONY: push
push: 
	npm run publish-demo
	npm run transpile
	git add .
	git commit -m "commit-auto"
	npm version patch 
	git tag 
	git push origin tags/v1.0.1
	npm publish ./ 
.PHONY: start
start:
	npm run publish-demo
	npm run start