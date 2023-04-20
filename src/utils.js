const getVariables = (...props) => {
  let propsString = props.join();
  propsString = propsString.replaceAll(',', ' / ');

  alert(propsString);
};

export default getVariables;
