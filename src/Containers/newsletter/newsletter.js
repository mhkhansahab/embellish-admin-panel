import React from "react";
import Header from "../../Components/organisms/header/header";
import "./newsletter.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendNewsletter } from "./../../Store/action/actions";

function Newsletter() {
  const dispatch = useDispatch();
  const [newsletter, setNewsletter] = useState({
    text: "",
  });

  const send = async () => {
    if (newsletter.text.trim() !== "") {
      const result = await dispatch(
        sendNewsletter({
          mail_txt: newsletter.text,
        })
      );
      if(result.msg === "success"){
        setNewsletter({ text: "" });
        alert("Newsletter Sent");
      }else{
        alert("Oops! there is an error");
      }
    } else {
      alert("Newsletter is Empty");
    }
  };

  const handleChange = (e) => {
    setNewsletter({
      text: e.target.value,
    });
  };
  const handleTextArea = (e) => {
    e.target.style.cssText = "height:" + e.target.scrollHeight + "px";
  };
  return (
    <div>
      <Header upperText="Send" lowerText="Newsletter"></Header>
      <div className="newsletter-container">
        <div className="header-text">Send Newsletter to all Subscribers</div>
        <div className="input-container">
          <textarea
            placeholder="Write here...."
            value={newsletter.text}
            onKeyDown={(e) => handleTextArea(e)}
            rows={1}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="send-newsletter-btn" onClick={() => send()}>
          Send
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
