import React from "react";
import uid from "../../utils/uid";
import Quiz from "./Quiz";

const RECORD_TYPE = {
  POST: 1,
  QUIS: 2,
  TESTING: 3,
};

const mocks = [
  {
    id: uid(),
    type: RECORD_TYPE.POST,
    name: "Знаеете ли вы об этом",
    body: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },

  {
    id: uid(),

    type: RECORD_TYPE.QUIS,
    settings: {
      is_anonimus: true,
      is_many: false,
    },
    name: "Что нужно делать чтобы быть счастливым?",
    variants: [
      {
        id: uid(),
        name: "Жить",
      },
      {
        id: uid(),
        name: "Радоваться",
      },
      {
        id: uid(),
        name: "Любить",
      },
    ],
  },
  {
    id: uid(),

    type: RECORD_TYPE.QUIS,
    settings: {
      is_anonimus: true,
      is_many: false,
    },
    name: "Я люблю",
    variants: [
      {
        id: uid(),
        name: "какая",
      },
      {
        id: uid(),
        name: "ты",
      },
      {
        id: uid(),
        name: "шокар",
      },
    ],
  },
  {
    id: uid(),

    type: RECORD_TYPE.TESTING,
    name: "Что нужно делать чтобы быть счастливым?",
    start_at: new Date(),
  },
];

const Feed = () => {
  return mocks.map((record: any) => {
    if (record.type === RECORD_TYPE.QUIS) {
      return <Quiz key={record.id} {...record} />;
    }

    return null;
  });
};

export default Feed;
