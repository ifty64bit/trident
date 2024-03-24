import { getAllMemes } from "@/apis/getAllMemes";
import Img from "@/components/ui/Img";
import React from "react";

export async function generateStaticParams() {
    const memes = await getAllMemes();

    return memes.map((meme: any) => ({
        memeId: `${encodeURIComponent(meme.title)}-${encodeURIComponent(
            meme.id
        )}`,
    }));
}

type Props = {
    params: {
        memeId: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
};

async function Meme({ params }: Props) {
    const memeId = params.memeId.split("-").pop() as string;
    return (
        <div>
            <Img src={memeId} alt="meme" width={900} height={500} />
            <pre>{JSON.stringify(memeId, null, 2)}</pre>
        </div>
    );
}

export default Meme;
