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

// 아래의 getStaticProps는 빌드(렌더링) 후에는 Component를 변경하지 않는다.
// 렌더링이 끝난 이후에도 변경점이 있는 페이지, 혹은 컴포넌트라면
// getServerSideProps를 사용한다. getServerSideProps는 빌드 이후 언제나
// 요청이 있다면 데이터를 새로 패칭하고 Component를 re-rendering한다.
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

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
    // revalidate 속성은 해당 컴포넌트를 지정한 숫자 만큼 '초second'마다 갱신한다.
    // revalidate: 10
  };
}

export default HomePage;
