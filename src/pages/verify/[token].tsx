import React from "react";
import { verifyEmail } from "actions/user.action";
import { ToastContainer, toast } from "react-toastify";
import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

let count = 0;
const Verify = ({ res }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const showToastify = () => {
    if (count === 0) {
      if (res === "error") {
        toast.error("Please resend verification request.", {
          theme: "colored",
        });
      } else {
        toast.success(res, {
          theme: "colored",
        });
      }
      setTimeout(() => {
        router.push("/");
      }, 3500);
    }

    count++;
  };
  return (
    <div>
      {showToastify()}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Verify;

export async function getStaticPaths(context: any) {
  console.log(context);
  return { paths: [], fallback: "blocking" };
}
export async function getStaticProps(context: any) {
  let result: any;
  if (context.params.token !== undefined) {
    const res: any = await verifyEmail(context.params.token);
    if (res.error) {
      console.log(res.error);
      result = "error";
    } else {
      result = "success";
    }
  }

  return { props: { res: result } };
}
