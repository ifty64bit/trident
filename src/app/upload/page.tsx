"use client";

import { uploadMeme } from "@/actions/uploadMeme";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";



function Upload() {
    const { userId } = useAuth();
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        try {
            await uploadMeme(formData, userId!);
        } catch (error) {
            console.error(error);
        }
    }

    function onImageSelect(meme: FileList) {
        const fileInput = document.getElementById(
            "fileInput"
        ) as HTMLInputElement;
        fileInput.files = meme;
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.getElementById(
                "preview"
            ) as HTMLImageElement;
            preview.src = e.target?.result as string;
            preview.hidden = false;
        };
        reader.readAsDataURL(meme[0]);
    }
    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="mt-32">
                <form
                    className="flex flex-col gap-4"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            className="border p-1 rounded"
                        />
                    </div>
                    <div>
                        <div
                            className="w-[600px] h-[400px] overflow-hidden flex justify-center items-center border-2 border-dashed rounded-lg hover:bg-zinc-200 hover:border-gray-800 cursor-pointer transition-colors relative"
                            id="dropzone"
                            onDrop={(e) => {
                                e.preventDefault();
                                onImageSelect(e.dataTransfer.files);
                            }}
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.dataTransfer.dropEffect = "copy";
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault();
                            }}
                            onClick={() =>
                                document.getElementById("fileInput")?.click()
                            }
                        >
                            <img
                                src=""
                                alt=""
                                id="preview"
                                hidden
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <p>Drag or Click to Select Photo</p>
                            <input
                                type="file"
                                name="image"
                                hidden
                                multiple={false}
                                id="fileInput"
                                onChange={(e) => {
                                    onImageSelect(e.target.files!);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="tags"
                            placeholder="Tags"
                            className="w-full border p-1 rounded"
                        />
                    </div>
                    <Button type="submit">Upload</Button>
                </form>
            </div>
        </section>
    );
}

export default Upload;
