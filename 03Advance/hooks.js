const React = (function () {
  let hook = [];
  let idx = 0;
  function useState(initVal) {
    const state = hook[idx] || initVal;
    const _idx = idx;
    const useState = (newVal) => {
      hook[_idx] = newVal;
    };
    idx++;
    return [state, useState];
  }
  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  function useEffect(cb, depArray) {
    const oldDeps = hook[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    if (hasChanged) cb();
    hook[idx] = depArray;
    idx++;
  }

  return { useState, render, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState('apple');
  React.useEffect(() => {
    console.log('jsconffff');
  }, [count]);
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word)
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type('pear');
var App = React.render(Component);
App.type({ name: 'k', surname: 'm' });
var App = React.render(Component);
App.click();
var App = React.render(Component);
