import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [laststName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: laststName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s"
          alt="Uber Captain LOGO"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What&apos;s our captain&apos;s name ?</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
              type="text"
              placeholder="first name"
            />
            <input
              required
              value={laststName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
              type="text"
              placeholder="last name"
            />
          </div>

          <h3 className="text-base font-medium mb-2">What&apos;s your captain email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter your captain Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have an Captain account ?
          <br />
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
