"use server";

import Editor from "@/components/editor";

export default async function Home() {
  return (
    <div className="stretch mx-auto flex w-full max-w-lg flex-col py-24">
      <div className="flex flex-col flex-1">
        <Editor />
      </div>
    </div>
  );
}
