import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg/668px-Tokyo_Skytree_2014_%E2%85%A2.jpg"
      title="First Meetup"
      address="Tokyo"
      description="the meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg/668px-Tokyo_Skytree_2014_%E2%85%A2.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Tokyo",
        decription: "the meetup description",
      },
    },
  };
}

export default MeetupDetails;
