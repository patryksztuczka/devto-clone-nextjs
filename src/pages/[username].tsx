import React from "react";

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();

  const paths = users.map((user: any) => ({
    params: { username: user.username },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const response = await fetch(
    `http://localhost:3000/api/user/${params.username}`
  );

  return {
    props: {
      user: await response.json(),
    },
  };
}

const ProfilePage = ({ user }: any) => {
  return (
    <div>
      Profile Page
      {JSON.stringify(user)}
    </div>
  );
};

export default ProfilePage;
