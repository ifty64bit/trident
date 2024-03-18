import { UplaodImage } from "@/actions/uploadImage";
import { Button } from "@/components/ui/button";

function Upload() {
    async function handleSubmit(formData: FormData) {
        "use server";
        const image = formData.get("image") as File;
        const title = formData.get("title") as string;
        const response = await UplaodImage(image, title);
    }
    return (
        <section className="w-full h-full">
            <div>
                <form
                    method="POST"
                    className="flex flex-col gap-4"
                    encType="multipart/form-data"
                    action={handleSubmit}
                >
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="image">Upload an image</label>
                        <input type="file" name="image" />
                    </div>

                    <Button type="submit">Upload</Button>
                </form>
            </div>
        </section>
    );
}

export default Upload;
