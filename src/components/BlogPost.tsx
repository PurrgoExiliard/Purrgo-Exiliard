import GuitarButton from "./GuitarButton.tsx";

type GuitarButtonProps = {
  url: string;
  text: string;
};

type GuitarButtonPropsOut = GuitarButtonProps & {
    url : string;
    text : string; 
    id: number;
};

type BlogPostProps = {
    title: string;
    content_text : string;
    index: number;
    imageSrc? : string;
    guitarComponents? : GuitarButtonProps;
}

export default function BlogPost({title, content_text, index, imageSrc, guitarComponents} : BlogPostProps) {
    let guitarComponentsOut: GuitarButtonPropsOut;
    if (guitarComponents) {
       guitarComponentsOut = {...guitarComponents, id: index};
    } else {
        guitarComponentsOut = {url: "", text: "", id: index};
    }
    return <>
    <div className="blog_post_container">
        <h2>{title}</h2>
        <p>{content_text}</p>
        {imageSrc && <img src={imageSrc} alt={title} />}
        {guitarComponents && <GuitarButton {...guitarComponentsOut} />}
    </div>
    </>
}