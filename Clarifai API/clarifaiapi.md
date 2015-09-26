#__*The Clarifai API*__
##A Brief Intro

---

#Clarifai is rad.
##clarifai.com
---

###The Clarifai API has 4 REST endpoints and a bunch of API Clients
####(so far)

---

#*Endpoints*

---

##/v1/token
###Gets you an access token

---

##/v1/info
###Gets you info about the current state of the API and user

---

##/v1/feedback
###Lets you provide feedback to the system for improved results

^ The more developers use the system, the better the system gets!

---

##/v1/tag
###Gives you tags for a given image

---

#*Clients*

---

##iOS and Android Starters

---

##Python

```python
from clarifai.client import ClarifaiApi

clarifai_api = ClarifaiApi()
result = clarifai_api.tag_images(open('image.jpeg'))
```

---

##Java

```java
ClarifaiClient clarifai = new ClarifaiClient(APP_ID, APP_SECRET);

List<RecognitionResult> results =
    clarifai.recognize(new RecognitionRequest("image.jpg"));
```

...this works for Android, too!

---

##Node.JS

```javascript
var Clarifai = require('./clarifai_node.js');
Clarifai.initAPI(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

Clarifai.tagURL('image.jpeg', 'identifying string', resultHandler );
```

---

##Custom Training

---

#_developer.clarifai.com_
###@clarifaidev
###hackers@clarifai.com
