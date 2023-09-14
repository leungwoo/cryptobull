import SocialIcons from "./SocialIcons";

const withSocialIcons = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <WrappedComponent {...props} />
        <div className="absolute top-2 right-0 flex flex-col items-center justify-center h-full px-2">
          <SocialIcons />
        </div>
      </div>
    );
  };
};

export default withSocialIcons;
