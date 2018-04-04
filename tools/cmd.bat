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
  --data '{"text": "ersdst", "title": "sfsf", "claps":0, "description": "jjhjjgjgjg", "feature_img": "sdsdsd", "author_id": "5a92cf3f2dec79115c8fc78a"}'

POST NEW USER
=============
curl --request POST \
  --url http://localhost:5000/api/user \
  --header 'content-type: application/json' \
  --data '{"name": "david", "email": "kurt@gmail.com"}'

FOLLOW USER
===========
curl --request POST \
  --url http://localhost:5000/api/user/follow \
  --header 'content-type: application/json' \
  --data '{"id": "5a92cf3f2dec79115c8fc78a", "user_id": "5a92cf582dec79115c8fc78b"}'

GET A USER
==========
curl --request GET \
  --url http://localhost:5000/api/user/5a92cf3f2dec79115c8fc78a

GET ALL ARTICLES
================
curl --request GET \
  --url http://localhost:5000/api/articles

GET AN ARTICLE
==============
curl --request GET \
  --url http://localhost:5000/api/article/5a92e41abb04440888395e44

COMMENT ON AN ARTICLE
=====================
curl --request POST \
  --url http://localhost:5000/api/article/comment \
  --header 'content-type: application/json' \
  --data '{"comment": "dfdggd", "author_id": "5a92cf3f2dec79115c8fc78a", "article_id": "5a92e41abb04440888395e44"}'

CLAP AN ARTICLE
===============
curl --request POST \
  --url http://localhost:5000/api/article/clap \
  --header 'content-type: application/json' \
  --data '{"article_id": "5a92e41abb04440888395e44"}'

GET A USER ARTICLES
===================
curl --request GET \
  --url http://localhost:5000/api/user/profile/5a92cf3f2dec79115c8fc78a

https://stackabuse-197509.appspot.com
mongo ds237855.mlab.com:37855/alc -u alc -p alc
