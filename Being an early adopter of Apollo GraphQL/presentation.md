# 

# Being an early adopter of Apollo+GraphQL

---

# Cassidy Williams
## **@cassidoo**

---

# I work at **React Training**
## reacttraining.com

----

# State Management

^ Redux, MobX, the Context API, oh my!

---

# State Management

- Redux
- MobX
- The Context API
- **Oh my**

---

# Apollo GraphQL

---

# Apollo GraphQL

> A single versatile query system to replace a patchwork of legacy APIs, with all the devtools and cloud services you need to run GraphQL at scale

^ allows you to fetch data from your GraphQL server and use it in building UIs using React. May be used in the browser, in React Native, or in Node.js when you want to do server-side rendering.

---

# Apollo GraphQL

- Establishes a data graph
- All clients and micro services speak in the exact same way

---

```js

const SESSION_USER = gql`
  query CreateSessionUser {
    sessionUser {
      id
      pro
    }
  }`;

```

---

```js

const SESSION_USER = gql`
  query CreateSessionUser {
    sessionUser {
      id
      pro
      avatar
      username
    }
  }`;

```

^ This is the power of a single data graph! You can query for it, and the front end can get whatever data it needs.

---

# _Then it all went **wrong**_

--- 


# (dramatic pause)

---


# Apollo is pretty new.


---

# Using new technologies

---

# Using new technologies

- Ask a lot of questions
- Don't be afraid to contact the maintainers/team behind the technology
- Look under the hood
- **Share your knowledge!**

---

# Thank you!!

## **@cassidoo**
