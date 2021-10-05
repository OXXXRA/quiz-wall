import { useStore } from "effector-react";
import { useRef } from "react";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import QuizCard from "../components/QuizCard";
import { userStore } from "../modules/User/user-store";
import Loader from "./../components/Loader";
import { confetti } from "./../utils/runConfitti";
import TestingCard from "../components/TestingCard";
let data = [
  {
    title: "dolore",
    body: "Mollit aliquip cillum minim laboris fugiat veniam fugiat dolor culpa dolore. Cupidatat amet officia minim cupidatat proident non. Occaecat aliquip voluptate ipsum quis veniam in aute officia enim ea consequat eu.\r\nIrure quis cupidatat in irure tempor id reprehenderit duis elit et sit irure do esse. Nisi cupidatat cupidatat nulla ad laborum deserunt. Dolore proident ipsum sit tempor sint exercitation mollit aute. Laborum exercitation cillum anim sint nisi eu esse laboris. Quis exercitation aute ad enim do enim ea ipsum. Exercitation laboris commodo magna voluptate cupidatat duis duis elit id et est eiusmod enim.\r\n",
    created_at: "Mon Aug 31 2020 02:02:56 GMT+0300 (Москва, стандартное время)",
  },
  {
    title: "aliqua",
    body: "Id sint veniam laborum sit. Nisi veniam dolor et excepteur velit ad nisi eiusmod nostrud. Nisi velit nulla enim eu pariatur qui Lorem dolore nostrud et. Laborum sit exercitation nisi sint minim exercitation nostrud aliqua est est.\r\nEx non id eiusmod dolor mollit amet. Culpa eiusmod aliqua labore sunt incididunt cupidatat cupidatat incididunt aliquip est aliquip incididunt. Mollit consectetur mollit deserunt minim duis occaecat labore laborum ullamco Lorem. Non labore dolor dolor labore nisi anim. Dolor commodo ex minim pariatur elit dolore elit sunt sunt quis exercitation. Ut duis non enim tempor culpa irure incididunt nisi dolor id cupidatat occaecat voluptate.\r\n",
    created_at: "Wed Feb 05 2014 13:36:26 GMT+0400 (Москва, стандартное время)",
  },
  {
    title: "aliqua",
    body: "Ex anim officia pariatur commodo est dolore irure enim. Non exercitation voluptate sunt ut nostrud veniam officia ipsum occaecat mollit esse enim nulla. Sint magna sit ipsum nisi excepteur id et qui. Lorem dolor do eu velit incididunt nisi est sint velit sunt laborum.\r\nEiusmod proident minim cillum consequat ullamco incididunt dolore enim. Adipisicing aliquip anim labore pariatur anim veniam ullamco occaecat occaecat enim quis. Ea qui laborum minim labore amet reprehenderit minim. Elit sit consequat cupidatat in cupidatat reprehenderit esse eiusmod ipsum id labore laborum id aliqua. Adipisicing ad Lorem enim ipsum velit. Excepteur tempor enim nisi nisi dolore veniam nisi anim mollit nostrud. Culpa tempor exercitation consequat eu est minim aliquip voluptate ut exercitation.\r\n",
    created_at: "Sun Apr 10 2016 20:58:52 GMT+0300 (Москва, стандартное время)",
  },
  {
    title: "in",
    body: "Sit aute voluptate sunt anim. Consequat do ad sit dolore exercitation. Esse exercitation nostrud laborum ullamco quis minim occaecat mollit. Esse reprehenderit proident ullamco sit laborum magna proident anim voluptate non occaecat commodo eu ullamco. Qui ex culpa deserunt dolor.\r\nUt cupidatat et nisi dolor fugiat enim cillum. Occaecat velit laborum amet laborum ut in sint eu nisi quis aute ea. Mollit aliquip commodo sit dolor tempor laborum eiusmod aliqua. Minim est do consectetur esse. Proident mollit eiusmod enim minim culpa amet sunt proident ex consectetur fugiat tempor Lorem et.\r\n",
    created_at: "Mon Jan 05 2015 23:33:22 GMT+0300 (Москва, стандартное время)",
  },
  {
    title: "proident",
    body: "Non cupidatat cupidatat laborum voluptate sunt pariatur labore ipsum fugiat ex ad qui quis. Laboris enim laborum anim eiusmod velit anim duis proident voluptate eiusmod deserunt occaecat anim. Duis fugiat reprehenderit velit elit anim sunt sunt. Nostrud elit laborum voluptate consectetur tempor occaecat aute sit duis.\r\nAnim ullamco sunt qui mollit sunt culpa veniam reprehenderit ad. Qui non aute esse pariatur laborum tempor. Nisi deserunt adipisicing laboris anim incididunt qui id tempor ullamco voluptate. Duis occaecat excepteur do laboris deserunt velit in ea veniam. Commodo amet proident exercitation magna ex in et dolore mollit duis non nostrud veniam proident. Non occaecat laboris quis consequat aliquip amet est pariatur cillum irure et magna consequat. Aliqua do eiusmod id eiusmod tempor fugiat irure ad incididunt non excepteur mollit Lorem est.\r\n",
    created_at: "Sat May 07 2016 15:55:37 GMT+0300 (Москва, стандартное время)",
  },
  {
    title: "elit",
    body: "Culpa veniam pariatur quis laborum aliquip commodo laborum cupidatat exercitation deserunt duis sint deserunt. Ullamco consequat occaecat Lorem incididunt amet consequat consequat laborum eiusmod esse ut dolore cupidatat dolore. Ipsum et officia fugiat labore tempor exercitation nostrud est ea commodo enim. Do culpa tempor pariatur sit velit mollit non.\r\nCommodo est consequat laboris adipisicing fugiat commodo. Culpa consectetur veniam exercitation fugiat qui duis quis pariatur. Nulla cillum ipsum cillum minim cillum. Cupidatat quis adipisicing culpa ea laborum ipsum cillum consectetur proident nisi cupidatat ipsum minim. Eiusmod magna ipsum aliquip tempor ea qui aliqua dolor sunt ea amet. Nostrud aute magna pariatur anim proident laborum nulla do sit sint fugiat.\r\n",
    created_at: "Wed Jan 01 2020 08:12:16 GMT+0300 (Москва, стандартное время)",
  },
  {
    title: "sunt",
    body: "Aliquip velit sunt anim cupidatat non id duis sunt reprehenderit ipsum culpa occaecat et reprehenderit. Veniam eiusmod in enim proident. Nisi laboris consequat incididunt ea veniam culpa commodo. Officia proident ex pariatur laborum aute id. Laborum commodo reprehenderit velit et laboris laboris sunt quis occaecat deserunt qui amet dolore laborum. Lorem dolor commodo sunt cillum consectetur occaecat excepteur irure commodo non qui.\r\nIpsum non elit cupidatat voluptate eu enim velit ullamco laborum id. Excepteur mollit labore elit ut culpa ex consequat duis fugiat sunt dolor culpa cillum. Ut aliqua voluptate laborum ex.\r\n",
    created_at: "Sun Feb 24 2019 12:28:57 GMT+0300 (Москва, стандартное время)",
  },
];

const testings = [
  {
    id: 1,
    start_at: null,
    end_at: null,
    name: "Тестирование",
    question_count: 15,
    question_time: 12,
  },
  {
    id: 2,
    start_at: new Date(Date.now() + 1000 * 657),
    end_at: new Date(Date.now() + 60 + 60 * 5),
    name: "Тестирование по математике",
    question_count: 15,
    question_time: 12,
  },
  {
    id: 3,
    start_at: new Date(Date.now() + 12),
    end_at: null,
    name: "Тестирование",
    question_count: 25,
    question_time: null,
  },
];

const Index = () => {
  const [open, setOpen] = useState(true);
  const user = useStore(userStore);

  return (
    <div className="container">
      {testings.map((testing) => (
        <TestingCard className="mb-2" key={testing.id} {...testing} />
      ))}
      <QuizCard className="mb-2" />
      {data.map(({ title, body, created_at }) => (
        <PostCard
          key={title + body}
          className="mb-2 p-2"
          body={body}
          title={title}
          created_at={created_at}
        ></PostCard>
      ))}
    </div>
  );
};

export default Index;
