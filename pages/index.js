import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg/668px-Tokyo_Skytree_2014_%E2%85%A2.jpg",
    address: "Sumida, Tokyo, Japan",
    description: "Tokyo, worked before with Eunmin-Choi",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg/668px-Tokyo_Skytree_2014_%E2%85%A2.jpg",
    address: "Sumida, Tokyo, Japan",
    description: "Tokyo, worked before with Eunmin-Choi",
  },
  {
    id: "m3",
    title: "third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg/668px-Tokyo_Skytree_2014_%E2%85%A2.jpg",
    address: "Sumida, Tokyo, Japan",
    description: "Tokyo, worked before with Eunmin-Choi",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
