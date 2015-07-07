#4 Things
###**To make your web apps more accessible**

---

##Your web app is _probably_ not accessible.

^It's okay. You're not alone.

---

##You can fix that.

---

#Web apps should be

- Perceivable
- Operable
- Understandable
- Robust

---

##1. Perceivable

---

###Use native techniques like _display_ and _visibility_

^ Using z-index, opacity, and/or positioning doesn't *really* hide anything.

---

##Add labels to your forms.

```html
<label for="taco">Favorite Taco Brand</label>
<input type="text" id="taco">
```

---

###Contrast is ~~king~~ _queen_

^ There's lots of free contrast checkers online, http://webaim.org/

---

##2. Operable

---

###_Everything_ should be operable with the keyboard

---

###Don’t use device-dependent events

^ Nope: onKeyDown, onMouseDown, onMouseOver.

^ Yup: onFocus, onBlur, onSubmit.

---

###Maintain state

^ Don't be dependent on timing

^ Things should be able to be interrupted

---

##3. Understandable

---

###Add _alt_ tags and captions to images and diagrams

---

###Provide sufficient error handling and messaging

---

###Maintain the accessiblity tree

^ This could be a whole talk in itself.

^ But to sum up, everything is related to everything in a web app.

^ Use the WAI-ARIA API to build those relationships, so assistive technologies can comprehend the content.

---

##4. Robust

---

###Make sure everything works in _every_ browser

^ Including y'all who ignore IE users.

---

###Use semantic markup

---

##**You can do it.**

---

#Resources

- webaim.org
- w3.org/WAI
- github.com/cassidoo/talks

---

#**Thanks!**
