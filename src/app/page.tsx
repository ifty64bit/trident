import { getAllMemes } from "@/apis/getAllMemes";
import Img from "@/components/ui/Img";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
    const data = await getAllMemes();

    return (
        <main className="flex gap-4 flex-wrap py-4">
            {data.map((meme: any) => (
                <Link
                    key={meme.id}
                    href={`/${encodeURIComponent(
                        meme.title
                    )}-${encodeURIComponent(meme.id)}`}
                >
                    <Card
                        className={cn(
                            "overflow-hidden max-w-[480px] cursor-pointer hover:shadow-lg transition-transform duration-300"
                        )}
                    >
                        <CardContent className={cn("px-0")}>
                            <Img
                                src={meme.imageUrl}
                                alt={meme.title}
                                width={900}
                                height={500}
                            />

                            <CardHeader className={cn("px-2 pt-2 pb-0")}>
                                <CardTitle>{meme.title}</CardTitle>
                                <CardDescription>
                                    Uploaded by: {meme.uploader.username}
                                </CardDescription>
                                <div className="flex gap-1 flex-wrap">
                                    {meme.tags.map((tag: any, i: number) => (
                                        <Badge key={i}>{tag}</Badge>
                                    ))}
                                </div>
                            </CardHeader>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </main>
    );
}
