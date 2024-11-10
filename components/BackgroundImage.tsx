
type Props = {
  bgImage?: string;
  bgSize?: number[];
}

const BackgroundImage = ({ bgImage = "/certificate/summit.png", bgSize }: Props) => {

  const styleGenerated = {
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: bgSize ? `${bgSize[0]}px ${bgSize[1]}px` : 'cover',
  }

  return (
    <div className="absolute inset-0 bg-no-repeat bg-center opacity-5 bg-contain" style={styleGenerated}  ></div>
  )
};

export default BackgroundImage;  