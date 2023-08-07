import { useState } from "react";
import Button from "../components/Button";
import { EMAIL_REGEX } from "../constants/regex";
import requestHandler from "../utils/request/requestHandler";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [emailValid, setEmailValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    if (EMAIL_REGEX.test(email)) {
      setEmailValid(true);
      setLoading(true);
      const results = await requestHandler({
        url: "https://api.getwaitlist.com/api/v1/waiter",
        requestOptions: {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        },
        data: {
          email,
          api_key: process.env.REACT_APP_WAITLIST_KEY,
        },
      });
      if (results) {
        if (results.priority) setSuccess(true);
      }
      setLoading(false);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <div className="flex align-center justify-center items-center p-auto m-auto">
      <div className="w-screen flex justify-center items-center">
        <form
          className="p-10 2xl:w-1/4 xl:w-1/3 md:w-1/2 xs:w-screen  bg-white rounded-xl space-y-5 mt-16"
          onSubmit={onClickHandler}
        >
          <h1 className="text-center font-bold text-3xl text-[#0029FF]">
            <a href="https://www.arithmo.ai/">arithmo.ai</a>
          </h1>
          <h2 className="text-left text-2xl font-bold">Sign up</h2>
          <div className="flex flex-col space-y-2">
          <label className="text-sm font-light">Email</label>
            <input
              onChange={onEmailChange}
              className="w-auto px-3 py-2  border border-slate-400"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
            />
            {!emailValid && (
              <p className="text-left text-xs  text-[#ff0000]">
                Enter a valid Email
              </p>
            )}
          </div>
          <p className="text-left text-xs  text-[#0029FF]">
            By signing up you agreee to the <a style={{textDecoration: 'underline'}} href="https://www.arithmo.ai/terms-and-condition">Terms & Condition</a> & <a style={{textDecoration: 'underline'}} href="https://www.arithmo.ai/privacy-policy">Privacy Policy</a>
          </p>
          <div className="flex justify-center align-center">
            <Button type="submit" isLoading={loading} text="Sign up" />
          </div>
          <h3 className="text-center text-sm font-light">Already have an account? <a style={{textDecoration: 'underline'}} href="https://app.arithmo.ai/sign-in">Log in</a>
          </h3>
          {success && (
            <div
              className="bg-teal-100 rounded-b text-teal-900 px-4 py-3"
              role="alert"
            >
              <div className="flex">
                <div>
                  <p className="text-left text-xs">
                    Thank you for signing up. Due to high demand in our Beta Phase, we currently have a waiting list. We
                    will inform you once you get access.{" "}
                    <a className="text-[#0029FF]" href="/">
                      Click here{" "}
                    </a>
                    to get back.
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
