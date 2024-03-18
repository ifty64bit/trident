import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex gap-4 flex-wrap py-4">
            <Card className={cn("overflow-hidden max-w-[480px]")}>
                <CardContent className={cn("px-0")}>
                    <Image
                        src="https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-man-playing-with-dogs-on-a-beach.jpeg"
                        alt="image"
                        width={900}
                        height={500}
                    />

                    <CardHeader className={cn("px-2 pt-2 pb-0")}>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Uploaded by: Ifty</CardDescription>
                        <div className="flex gap-1 flex-wrap">
                            {["memes", "funny", "lol"].map((tag, i) => (
                                <Badge key={i}>{tag}</Badge>
                            ))}
                        </div>
                    </CardHeader>
                </CardContent>
            </Card>
            <Card className={cn("overflow-hidden max-w-[480px]")}>
                <CardContent className={cn("px-0")}>
                    <Image
                        src="https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-man-playing-with-dogs-on-a-beach.jpeg"
                        alt="image"
                        width={900}
                        height={500}
                    />

                    <CardHeader className={cn("px-2 pt-2 pb-0")}>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Uploaded by: Ifty</CardDescription>
                        <div className="flex gap-1 flex-wrap">
                            {["memes", "funny", "lol"].map((tag, i) => (
                                <Badge key={i}>{tag}</Badge>
                            ))}
                        </div>
                    </CardHeader>
                </CardContent>
            </Card>
            <Card className={cn("overflow-hidden max-w-[480px]")}>
                <CardContent className={cn("px-0")}>
                    <Image
                        src="https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-man-playing-with-dogs-on-a-beach.jpeg"
                        alt="image"
                        width={900}
                        height={500}
                    />

                    <CardHeader className={cn("px-2 pt-2 pb-0")}>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Uploaded by: Ifty</CardDescription>
                        <div className="flex gap-1 flex-wrap">
                            {["memes", "funny", "lol"].map((tag, i) => (
                                <Badge key={i}>{tag}</Badge>
                            ))}
                        </div>
                    </CardHeader>
                </CardContent>
            </Card>
        </main>
    );
}
