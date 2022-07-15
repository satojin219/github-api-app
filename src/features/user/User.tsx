type Props = {
  [index: string]: any;
};

export const User = (props: Props) => {
  if (props.user.login === undefined) return <p>Not found</p>;
  return (
    <div>
      <a href={props.user.html_url}>
        <img src={props.user.avatar_url} alt="" />
      </a>
      <p>{props.user.login}</p>
    </div>
  );
};
