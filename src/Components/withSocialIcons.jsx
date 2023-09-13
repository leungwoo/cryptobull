import SocialIcons from "./SocialIcons";

const withSocialIcons = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <WrappedComponent {...props} />
        <div className="fixed top-1/2 left-2">
          <SocialIcons />
        </div>
      </div>
    );
  };
};

export default withSocialIcons;
