curl --request POST \
  --url http://localhost:5000 \
  --header 'content-type: application/json' \
  --data '{"name":"Arrow","description":"bad movie","rating":"7.0","image":"michaeljackson.png"}'

curl --request GET \
  --url http://localhost:5000

curl --request GET \
  --url http://localhost:5000/
  
