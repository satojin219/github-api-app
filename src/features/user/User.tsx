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
      <h1>{props.user.login}</h1>
      <ul>
        <li>email: {props.user.email}</li>
        <li>followers: {props.user.followers}</li>
        <li>followring: {props.user.following}</li>
      </ul>
    </div>
  );
};
