// banner props
type bannerProps = {
  height: number;
  width: number;
};

// banner component
export default function Banner(_props: bannerProps) {
  // destructuring props
  const { height, width } = _props;

  return (
    <div className="banner">
      <img src="/assets/logo.png" height={height} width={width} />
    </div>
  );
}
