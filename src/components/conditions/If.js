export default (props) => {
  const ifChildren = [];
  let elseChildren;

  props.children.forEach((children) => {
    if (children.type && children.type.name === "Else") elseChildren = children;
    else ifChildren.push(children);
  });

  if (props.test) {
    return ifChildren;
  }
  return elseChildren;
};

export const Else = (props) => props.children;
