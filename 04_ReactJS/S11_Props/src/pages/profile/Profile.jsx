import "./Profile.css";
import { useState } from "react";

function Profile() {
  const [theme, setTheme] = useState({
    themeClass: "rightPanelLightTheme",
    title: "Check to Switch Dark Mode",
  });

  const [name, setName] = useState("Rohan Sinha");
  const [image, setImage] = useState(
    "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
  );
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("rohan@gmail.com");

  const changeToRenuka = () => {
    setName("Renuka Verma");
    setImage(
      "https://www.geetanjaliinstitute.com/wp-content/uploads/2020/01/student_PNG62561.png"
    );
    setGender("female");
    setEmail("renuka@gmail.com");
  };

  const changeToRohan = () => {
    setName("Rohan sinha");
    setImage(
      "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
    );
    setGender("male");
    setEmail("rohan@gmail.com");
  };

  const changeTheme = (event) => {
    // var inputDom = document.querySelector("input");
    if (event.target.checked) {
      setTheme({
        themeClass: "rightPanelDarkTheme",
        title: "Uncheck to Switch Light Mode",
      });
    } else {
      setTheme({
        themeClass: "rightPanelLightTheme",
        title: "Check to Switch Dark Mode",
      });
    }
  };

  return (
    <div className="profileContainer">
      <div className="leftPanel">
        <img src={image} width={"100%"} height={"100%"} />
      </div>
      <div className={theme.themeClass}>
        <dl>
          <dt>
            <b>User Name:</b>
          </dt>
          <dd>{name}</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{gender}</dd>
          <dt>
            <b>Email</b>
          </dt>
          <dd>{email}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi odit
            ea at. Repudiandae, reprehenderit rerum tempora enim fugit impedit
            hic at voluptas architecto corrupti voluptate accusantium, magnam ut
            unde voluptatem sunt fuga suscipit? Amet soluta corporis architecto
            commodi atque minima autem aliquid voluptatum, nulla, quam harum in
            sed neque debitis. unde voluptatem sunt fuga suscipit? Amet soluta
            corporis architecto commodi atque minima autem aliquid voluptatum,
            nulla, quam harum in sed neque debitis.
          </dd>
        </dl>
        <button onClick={changeToRohan}>Rohan Sinha</button>
        <button onClick={changeToRenuka}>Renuka Verma</button>
        <br />
        <br />
        <input
          type="checkbox"
          style={{ marginRight: "5px" }}
          onChange={changeTheme}
        />
        <label>{theme.title}</label>
      </div>
    </div>
  );
}

export default Profile;
