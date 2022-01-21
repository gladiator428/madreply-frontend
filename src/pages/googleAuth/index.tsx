import { oauthCallback } from "actions/emailActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getMyInfo } from "utils/getMyInfo";

const GoogleAuth = () => {
  const router = useRouter();
  useEffect(() => {
    const func = async () => {
      const res = await oauthCallback(router.query.code, getMyInfo().email);
      console.log(res);
      router.push("/myemails");
    };
    if (router.query.code) {
      func();
    }
  }, [router.query]);

  return <div></div>;
};

export default GoogleAuth;
