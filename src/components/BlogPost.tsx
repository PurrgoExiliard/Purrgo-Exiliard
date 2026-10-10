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
    <div className="blog_post">
        <h2 className="blog_post_title">{title}</h2>
        <p className="blog_post_content">{content_text}</p>
        {imageSrc && <img className="blog_post_image" src={imageSrc} alt={title} />}
        {guitarComponents && <GuitarButton {...guitarComponentsOut} />}
    </div>
    </>
}