interface Signature {
    cloud_name: string | undefined;
    api_key: string | undefined;
    timestamp: number;
    signature: string;
}

interface UploadResponse {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: string[];
    pages: number;
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    asset_folder: string;
    display_name: string;
    info: {
        categorization: {
            google_tagging: {
                status: string;
                data: {
                    tag: string;
                    confidence: number;
                }[];
            };
        };
    };
    original_filename: string;
    api_key: string;
}

export async function uploadMeme(data: FormData, userId: string) {
    const title = data.get("title") as string;
    const tags = (data.get("tags") as string).split(",");
    const upload_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

    try {
        const signature = await fetch(
            `${
                process.env.NEXT_PUBLIC_API_URL
            }/upload?upload_preset=${upload_preset}&tags=${tags
                .map((tag) => tag.trim())
                .join(", ")}`
        ).then((res) => res.json() as Promise<Signature>);

        const payload = new FormData();
        payload.append("file", data.get("image") as Blob);
        payload.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET!);
        payload.append("signature", signature.signature);
        payload.append("timestamp", signature.timestamp.toString());
        payload.append("api_key", signature.api_key!);
        payload.append("cloud_name", signature.cloud_name!);
        payload.append("tags", tags.map((tag) => tag.trim()).join(", "));

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${signature.cloud_name}/image/upload`,
            {
                method: "POST",
                body: payload,
            }
        ).then((res) => res.json() as Promise<UploadResponse>);

        const memeData = {
            title,
            public_id: response.public_id,
            tags: [...tags, title],
            url: response.secure_url,
            uploaderId: userId,
            creatorId: userId,
        };

        const savedToDB = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/memes`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(memeData),
            }
        ).then((res) => res.json());

        return savedToDB;
    } catch (error) {
        console.error(error);
        return;
    }
}
