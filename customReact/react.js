//how react see elements in function eg. h1 p.....how it makes tree
function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);

  //   domElement.innerHTML = reactElement.children;

  //   domElement.setAttribute("href", reactElement.proprs.href);
  //   domElement.setAttribute("target", reactElement.proprs.target);

  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.proprs) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, reactElement.proprs[prop]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  proprs: {
    href: "https://google.com",
    target: "_blank",
  },

  children: "Click me to visit gooogle",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
