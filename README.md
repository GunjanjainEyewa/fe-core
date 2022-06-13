# **fe-core**

A `mono-repository` for React components.

---
## **Cloning the repo**

### Using `ssh` -  if you have it configured with Github
> Recommended way

```bash
git clone git@github.com:Nykaa/fe-core.git
```


### Using `https`
```bash
git clone https://github.com/Nykaa/fe-core.git
```

---
## **Getting started**

### Installing packages(*root level*)

```bash
yarn install
```

### Setting up packages

```bash
npm run bootstrap
```

This would install the dependencies of all the packages in the repo.

Now you are ready to **GAME**!


---
## **View Packages**

### `List all packages`

```bash
yarn run list
```

### `List all packages` with their dependencies

```bash
yarn run lint --graph -a
```


## **Create a new Package**

> Better ways are coming...


## Storybook

To Help in development of components

- An UI to refer to, when developing components.
- A way to test callbacks.
- A way to stress test components with various props.
- Supports HMR!

### **`start storybook`**

&nbsp;&nbsp;&nbsp;&nbsp; `npm run build`
> ❓ This is needed as some of the packages depend on the published versions of other packages.

&nbsp;&nbsp;&nbsp;&nbsp; `yarn run storybook`

> 💡 This is going to open a browser where you can interact with the components available.


## Initializing new package
```
npm run plop <package-name>
```