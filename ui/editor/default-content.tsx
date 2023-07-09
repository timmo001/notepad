const DEFAULT_EDITOR_CONTENT = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ type: "text", text: "Notepad" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "An AI-powered notepad. Start typing to get started. Use / for commands and ++ for autocompletion.",
        },
      ],
    },
  ],
};

export default DEFAULT_EDITOR_CONTENT;
