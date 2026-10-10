type SocialItem = {
  link: string;
  img: string;
  alt: string;
  text: string;
  cssClass?: string;
};

type SocialsProps = {
  data: SocialItem[];
};

export default function Socials({data }: SocialsProps) {
  return (
    <>
    <div className="links_wrapper">
        <div className="links_info">
        {data.map((item) => (
            <div className={item.cssClass ?? item.text.toLowerCase()} key={item.link}>
            <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.img} alt={item.alt} />
            </a>
            <span>{item.text}</span>
            </div>
        ))}
        </div>
    </div>
    </>
  );
}