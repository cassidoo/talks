# Building
# [fit] Compound Components
# In React 

### **@cassidoo**

---

## Using a Single-Entry Point in a UI Library

---

```jsx

const data = [
  { label: 'About', link: '/about' },
  { label: 'Login', link: '/login' },
  { label: 'Signup', link: '/signup' }
]

<MenuBar links={data} />

```

---

## **Demo**
github.com/cassidoo/accordion

---

## Compound Components

---

# Compound Components

> A set of components that delegate rendering control across child elements, while managing an implicit state together as a whole.

---

# Compound Components

At least 2 components that work together to accomplish a task.

---

```jsx

const data = [
  { label: 'About', link: '/about' },
  { label: 'Login', link: '/login' },
  { label: 'Signup', link: '/signup' }
]

<MenuBar links={data} />

```

---

```html
<MenuBar>
  <Link to="/about">About</Link>
  <Link to="/login">Login</Link>
  <Link to="/signup">Signup</Link>
</MenuBar>
```

^ The responsibility has moved from the one MenuBar component to the group of components as a whole.

---

## This isn't just a React thing

---

```html
<select>
  <option>Dornbirn</option>
  <option>Lech</option>
</select>
```

---

```html
<table>
  <th>
    <td>Item</td>
    <td>Quantity</td>
  </th>
  <tr>
    <td>Banana</td>
    <td>5000</td>
  </tr>
</table>
```

---

## **Demo**

---

## Compound Components

- They give the user of your library control of the markup
- Separation of concerns
- Extensibility

^ Users can rearrange things however they want
^ Rendering logic is handled at each level, great for maintenance
^ I don't have to make changes at every level to add a component type to the bundle

---

# Thank you!

### **@cassidoo**
