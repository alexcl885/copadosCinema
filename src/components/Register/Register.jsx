import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button, TextField, Typography } from "@mui/material";
import "./Register.css"; 

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      const response = await register(email, password);
      if (!response.error) {
        navigate("/");
      }
    }
  };

  return (
    <div className="register-container">
      <Typography className="register-title" variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit} className="register-form">
        <TextField
          className="register-input"
          label="Email..."
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="register-input"
          label="Password..."
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="register-button"
        >
          Register user
        </Button>
      </form>
    </div>
  );
};

export default Register;
