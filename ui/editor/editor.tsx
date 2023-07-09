"use client";
import { useEditor, EditorContent } from "@tiptap/react";

import { TiptapExtensions } from "@/ui/editor/extensions";

export default function Editor() {
  const editor = useEditor({
    extensions: TiptapExtensions,
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
}
