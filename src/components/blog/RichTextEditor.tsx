import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Code2,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import { useCallback, useRef } from "react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const lowlight = createLowlight(common);

const RichTextEditor = ({ content, onChange, placeholder = "Start writing your article..." }: RichTextEditorProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline underline-offset-4",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: "rounded-lg bg-secondary/50 p-4 font-mono text-sm",
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none min-h-[400px] p-4 focus:outline-none",
      },
    },
  });

  const addLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && editor) {
        const reader = new FileReader();
        reader.onload = () => {
          const url = reader.result as string;
          editor.chain().focus().setImage({ src: url }).run();
        };
        reader.readAsDataURL(file);
      }
    },
    [editor]
  );

  if (!editor) return null;

  return (
    <div className="glass rounded-xl border border-border overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-card/50">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("code")}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
        >
          <Code size={16} />
        </Toggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          <Heading1 size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 3 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          <Heading3 size={16} />
        </Toggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("blockquote")}
          onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={16} />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("codeBlock")}
          onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code2 size={16} />
        </Toggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <Button variant="ghost" size="sm" onClick={addLink} className="h-8 w-8 p-0">
          <LinkIcon size={16} />
        </Button>
        <Button variant="ghost" size="sm" onClick={addImage} className="h-8 w-8 p-0">
          <ImageIcon size={16} />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().setHorizontalRule().run()} className="h-8 w-8 p-0">
          <Minus size={16} />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="h-8 w-8 p-0"
        >
          <Undo size={16} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="h-8 w-8 p-0"
        >
          <Redo size={16} />
        </Button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
