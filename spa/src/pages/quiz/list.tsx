import { Card, QuizVariants } from '../../ui/';

const QuezzList = () => {
	return (
		<div className="container" style={{ marginTop: 20 }}>
			<h1>All quizes</h1>
			<Card>
				<QuizVariants />
			</Card>
		</div>
	);
};

export default QuezzList;
