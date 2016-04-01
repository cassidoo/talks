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

##/v1/color
###Gives you colors for a given image

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
Clarifai.initAPI(CLIENT_ID, CLIENT_SECRET);

Clarifai.tagURL('image.jpg', 'identifying string', resultHandler);
```

---

##Go

```go
func main() {
    client := clarifai.NewClient("<client_id>", "<client_secret>")
    urls := []string{"image.jpg", "image2.jpg"}
    tag_data := client.Tag(clarifai.TagRequest{URLs: urls})
    fmt.Printf("%+v\n", tag_data)
}
```

---

##New Model!

---

##Food!

###developer.clarifai.com/alpha/images

---

#__Bounties!__
###*blog.clarifai.com/bounties*

![left](bounties.png)

---

#_developer.clarifai.com_
###github.com/clarifai
###@clarifaidev
###hackers@clarifai.com
