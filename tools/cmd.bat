curl --request POST \
  --url http://localhost:5000 \
  --header 'content-type: application/json' \
  --data '{"name":"Arrow","description":"bad movie","rating":"7.0","image":"michaeljackson.png"}'

curl --request GET \
  --url http://localhost:5000

curl --request GET \
  --url http://localhost:5000/
  
curl --request GET \
  --url http://localhost:5000/api/user/90
  
curl --request POST \
  --url http://localhost:5000/api/user/follow \
  --header 'content-type: application/json' \
  --data '{"user": "ert"}'

POST NEW ARTICLE
curl --request POST \
  --url http://localhost:5000/api/article \
  --header 'content-type: application/json' \
  --data '{"text": "ersdst", "title": "sfsf", "claps":60, "description": "jjhjjgjgjg"}'
