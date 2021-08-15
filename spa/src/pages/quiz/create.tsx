import { default as React, FC } from 'react';

import { Button, Card, Input, QuizVariants } from '../../ui';

interface Props {}

const CreateQuiz = (props: Props) => {
	return (
		<div className="container" style={{ marginTop: 20 }}>
			<Card>
				<h1>Создание опроса</h1>
				<Input placeholder="Как будет называться ваш опрос?" />

				<h3>Варианты ответа</h3>
				<QuizVariants />
			</Card>
		</div>
	);
};

export default CreateQuiz;
