import { CommentIcon, PeopleIcon } from "../../icons";
import { Card, Checkbox } from "../../ui";

const Quiz = ({ variants = [], name }) => {
  return (
    <Card className="mb-2">
      <p className="question-text mt-40 mb-40">{name}</p>
      {variants.map(({ id, name }) => (
        <div key={id} className="mb-1 answer-block">
          <div className="answer-rating"></div>

          <div className="answer-text-block">
            <Checkbox>
              <span className="answer-text">{name}</span>
            </Checkbox>
          </div>
          <div className="answers-count-block">
            <span className="answer-count count-text">1212</span>
            <span className="answer-percent count-text">5%</span>
          </div>
        </div>
      ))}
      <div className="counts-container">
        <button className="btn-vote btn-none">Голосовать</button>
        <div className="counts-group">
          <PeopleIcon />
          <span className="users-count count-text">12</span>
          <CommentIcon />
          <span className="comments-count count-text">12</span>
        </div>
      </div>
    </Card>
  );
};

export default Quiz;
