import "../assets/Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post_header"></div>
      <Avatar
        className="post_avatar"
        alt="Filipe Diniz"
        src="/static/images/avatar/1.jpg"
      />
      <h6>Username</h6>

      <img
        className="post_image"
        src="https://s2.glbimg.com/sdmrMgmAU3F1tuLyONzprsH4aew=/0x0:695x479/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2014/06/16/inteligencia-artificial.jpg"
        alt="fotoPost"
      />

      <h6 className="post_text">
        <strong>Caio Nogueira: </strong>Excelente Post Filipe!
      </h6>
    </div>
  );
}

export default Post;
