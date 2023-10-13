"use client";
import { useFormContext } from "@/context/FormContext";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

interface EditorProps {
  description: string;
}

function Editor({ description }: EditorProps) {
  const { formData, updateFormData } = useFormContext();

  const [value, setValue] = useState(description);

  const onChange = (content: string) => {
    setValue(content);
    updateFormData({
      ...formData,
      description: content,
    });
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      defaultValue="<h1>testing</h1>"
    />
  );
}

export default React.memo(Editor);
