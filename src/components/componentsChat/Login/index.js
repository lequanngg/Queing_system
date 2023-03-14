import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { addDocument, generateKeywords } from "../firebase/services";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function LoginChat() {
  const navigate = useNavigate();

  const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName),
      });
    }
  };

  auth.onAuthStateChanged((user) => {
    console.log({ user });
    if (user) {
      navigate("/home/chatroom");
    }
  });

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Chat Internal
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Login Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Login Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
