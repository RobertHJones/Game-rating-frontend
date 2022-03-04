import "./index.css";

export default function Comments({ details }) {
  return (
    <div>
      <div id="whitebox">
        {details.title}
        {details.comments}
      </div>
      <div id="whitebox2"></div>
      <div id="whitebox3"></div>
      <img
        id="thinker"
        src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2014/04/brainFacts-579411100-770x533-1-650x428.jpg"
        alt="Rob's brain"
      />
    </div>
  );
}
