type Props = {
  [index: string]: any;
};

export const User = (props: Props) => {
  return (
    <div>
      <a href={props.user.html_url}>
        <img src={props.user.avatar_url} alt="" />
      </a>
      <p>{props.user.login}</p>
    </div>
  );
};
