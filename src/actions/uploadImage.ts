import { v2 as cloudinary } from "cloudinary";

export function UplaodImage(image: File, title: string) {
    return new Promise(async (resolve, reject) => {
        cloudinary.uploader
            .upload_chunked_stream(
                {
                    categorization: "google_tagging",
                    auto_tagging: 0.9,
                    resource_type: "image",
                    folder: "bangla-memes-hub",
                    public_id: title + "-" + Date.now(),
                    tags: [title],
                },
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            )
            .end(Buffer.from(await image.arrayBuffer()));
    });
}
