import React, { useEffect, useState } from "react";

import { HeaderSection } from "layout";
import { Container, Div, HomeContainer } from "styles/globals.styled";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import UnsentLetters from "components/unsentlettercard";
import EmailViewCard from "components/emailview/EmailView";
import { useRouter } from "next/router";
import { getMessageById, getPublicEmailById } from "actions/emailActions";
import { getMyInfo } from "utils/getMyInfo";
import PublicEmailView from "components/publicemailview/PublicEmail";

const EmailPage = () => {
  const [state, setstate] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getPublicEmailById(router.query.id);
      setstate(res);
      setLoading(false);
    };
    if (router.query.id) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id]);
  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <PublicEmailView data={state} loading={loading} />
            </Div>
            <Div w={30} mode="column" gap={30}>
              {/* <MyInfoCard /> */}
              <UnsentLetters />
            </Div>
          </Div>
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default EmailPage;
