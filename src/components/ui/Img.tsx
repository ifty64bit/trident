"use client";

import { CldImage } from "next-cloudinary";

interface Props extends React.ComponentProps<typeof CldImage> {}

function Img({ ...rest }: Props) {
    return <CldImage {...rest} />;
}

export default Img;
