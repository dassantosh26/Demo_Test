/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginCheck = async () => {
    if (userName === "" || password === "") {
      alert(`Please Enter Email or Password`);
    } else {
      const url = "https://cybotrix.com/webapi/login/auth";
      const newBrand = { email: userName, password: password };
      const postData = {
        headers: { "content-type": "application/json" },
        method: "post",
        body: JSON.stringify(newBrand),
      };
      try {
        const response = await fetch(url, postData);
        const userinfo = await response.json();
        console.log(userinfo);
        if (userinfo.type === "VENDOR") {
          localStorage.setItem("tokenno", userinfo.tokenno);
          localStorage.setItem("name", userinfo.name);
          localStorage.setItem("status", userinfo.status);

          navigate("/dashboard");
        } else {
          alert("Sorry!,You are not Vendor");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     navigate("/");
  //   }
  // }, [navigate]);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-danger text-white text-center">
              <i className="fa fa-lock fa-lg mx-2"></i>Admin Login
            </div>
            <div className="card-body">
              <div className="mb-4">
                <label htmlFor="email">e-Mail Id</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-danger" onClick={loginCheck}>
                Login <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Login;
