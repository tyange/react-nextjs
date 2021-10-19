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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// component func-여기서는 HomePage()-내부에 useEffect, useState 등을 이용하여
// 업데이트되는 데이터를 주입하는 경우, 해당 데이터를 제외한 나머지 부분은 static으로 표현되나
// rendering cycle이 끝난 후 업데이트된 데이터를 표현되지 않는다.
// (정상적으로 rendering 된 것으로 보이지만 페이지 소스에는 나타나지 않음,
// SEO에 취약해짐.)
// 이런 현상을 보완하고자 getStaticProps func를 사용한다.(NextJS에 탑재된 메소드)
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
