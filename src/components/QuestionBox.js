import React from "react";

function QuestionBox(props) {
  return (
    <div className="flex items-center justify-center h-50">
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold">{props.question}</h2>
        {props.children}
      </div>
    </div>
  );
}

export default QuestionBox;
