install:
	docker-compose build
start: 
	docker-compose up
test:
	docker-compose run app npm run test