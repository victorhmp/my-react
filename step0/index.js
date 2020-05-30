/**
 * This is a simple "translation" from a React app into vanilla JS,
 * which is used to populate the index.html page.
 * Using React, we would write something like this to make a simple
 * <h1>Hello</h1> render into a <div id="root">:
 *
 * const element = <h1 title="foo">Hello</h1>
 * const container = document.getElementById("root")
 * ReactDOM.render(element, container)
 *
 * Below is the vanilla-JS equivalent
 */

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
