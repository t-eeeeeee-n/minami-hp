"use client";

import React, { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHeading,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaImage,
  FaLink,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
  placeholder = "記事の本文を入力...",
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-stone max-w-none min-h-[400px] p-4 focus:outline-none",
      },
    },
  });

  const addImage = useCallback(async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        // 署名付きURLを取得
        const response = await fetch("/api/admin/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: file.name,
            contentType: file.type,
          }),
        });

        if (!response.ok) {
          throw new Error("アップロードURLの取得に失敗しました");
        }

        const { uploadUrl, imageUrl } = await response.json();

        // S3に直接アップロード
        const uploadResponse = await fetch(uploadUrl, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        if (!uploadResponse.ok) {
          throw new Error("画像のアップロードに失敗しました");
        }

        // エディタに画像を挿入
        editor?.chain().focus().setImage({ src: imageUrl }).run();
      } catch (error) {
        console.error("Image upload error:", error);
        alert("画像のアップロードに失敗しました");
      }
    };

    input.click();
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URLを入力してください", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  const ToolbarButton = ({
    onClick,
    isActive = false,
    children,
    title,
  }: {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
    title: string;
  }) => (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      title={title}
      className={`p-2 rounded hover:bg-stone-100 transition-colors ${
        isActive ? "bg-stone-200 text-stone-900" : "text-stone-600"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-stone-200 bg-stone-50">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="太字"
        >
          <FaBold className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="斜体"
        >
          <FaItalic className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          title="取り消し線"
        >
          <FaStrikethrough className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-stone-200 mx-1" />

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive("heading", { level: 2 })}
          title="見出し2"
        >
          <span className="text-sm font-bold">H2</span>
        </ToolbarButton>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive("heading", { level: 3 })}
          title="見出し3"
        >
          <span className="text-sm font-bold">H3</span>
        </ToolbarButton>

        <div className="w-px h-6 bg-stone-200 mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="箇条書き"
        >
          <FaListUl className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="番号付きリスト"
        >
          <FaListOl className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          title="引用"
        >
          <FaQuoteLeft className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-stone-200 mx-1" />

        <ToolbarButton onClick={setLink} isActive={editor.isActive("link")} title="リンク">
          <FaLink className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton onClick={addImage} title="画像を挿入">
          <FaImage className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-stone-200 mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          title="元に戻す"
        >
          <FaUndo className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          title="やり直す"
        >
          <FaRedo className="w-4 h-4" />
        </ToolbarButton>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />

      <style jsx global>{`
        .tiptap p.is-editor-empty:first-child::before {
          color: #a8a29e;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
