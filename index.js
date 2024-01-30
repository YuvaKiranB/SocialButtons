const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="main">
    <h1 className="h1">Social Buttons</h1>
    <div className="buttonsContainer">
      <Button className="like" buttonText="Like" />
      <Button className="comment" buttonText="Comment" />
      <Button className="share" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
